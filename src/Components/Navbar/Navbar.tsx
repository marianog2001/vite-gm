import { useState } from 'react';
import './Navbar.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import MenuDropdown from '../MenuButton/MenuButton';
import NavigationTuple from '../../interfaces/NavigationTupleInterface';



const pages = ['Categories', 'Offers', 'About'];
const settings = ['Profile', 'Account', 'Historial', 'Logout'];

const items : NavigationTuple = {
    items: [
        ["Categories", "#"],
        ["Bass", "#"],
        ["Guitar", "#"],
        ["Synth","#"]
    ]
}




export function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        className="w-56 pb-1"
                        src="/logo-placeholder2.png"
                        alt="Groove Gallery - Compra y vende instrumentos musicales, nuevos y usados"
                    />

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    className="NavbarMenuButton"
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* icono en typography, ver luego*/}

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        {pages.map((page) =>
                            page === 'Categories' ? (
                                <MenuDropdown items={items.items} key={page}> {/* Fix: Changed props to items and added key to MenuDropdown */}
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            fontFamily: 'Roboto',
                                            fontWeight: 500,
                                            marginInlineStart: 4,
                                            fontSize: '1em',
                                            color: '#B2572B',
                                            display: 'block',
                                            paddingY: '0.8em',
                                            '&:hover': {
                                                color:'#ffe76d',
                                                backgroundColor: '#B2572B', // Cambia este color al que prefieras
                                                transform: 'scale(1.05)'
                                            }
                                        }}
                                    >
                                        Categories <ExpandMoreIcon />{' '}
                                    </Button>
                                    </MenuDropdown>
                                
                            ) : (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        fontFamily: 'Roboto',
                                        fontWeight: 500,
                                        marginInlineStart: 4,
                                        fontSize: '1em',
                                        color: '#B2572B',
                                        display: 'block',
                                        
                                        paddingY: '0.8em',
                                        '&:hover': {
                                            color:'#ffe76d',
                                            backgroundColor: '#B2572B', // Cambia este color al que prefieras
                                            transform: 'scale(1.05)'
                                        }
                                    }}
                                >
                                    {page}
                                </Button>
                            )
                        )}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
