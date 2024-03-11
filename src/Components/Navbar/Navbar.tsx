import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPanel } from '../UserPanel/UserPanel';


import AdbIcon from '@mui/icons-material/Adb';
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

//antd imports
import type { MenuProps } from 'antd';
import { ConfigProvider, Dropdown } from 'antd';

const pages = ['Categories', 'Offers', 'About'];
const settings = ['Profile', 'Account', 'Historial', 'Logout'];


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Guitar
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Bass
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Synth
            </a>
        ),
    },
];


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
                    <img className='w-56' src="/logo-placeholder2.png" alt="" />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* icono en typography, ver luego*/}

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: "Noto Sans JP",
                            fontWeight: 400,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            page === 'Categories' ?
                                <Dropdown menu={{ items }} placement="bottomLeft">
                                    <Button key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ fontFamily: 'Roboto', fontWeight: 500, marginInlineStart: 4, fontSize: '1em', color: '#B2572B', display: 'block' }}>Categories <ExpandMoreIcon /> </Button>
                                </Dropdown>
                                :
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ fontFamily: 'Roboto', fontWeight: 500, marginInlineStart: 4, fontSize: '1em', color: '#B2572B', display: 'block' }}
                                >
                                    {page}
                                </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}



<nav className='bg-[#FFE66D] flex justify-between'>
    <div className='px-4 py-2'>
        <Link to={'/'}>
            <img className='w-52' src="/logo-placeholder2.png" alt="Groove Gallery - Compra y vende instrumentos musicales, nuevos y usados" />
        </Link>
    </div>

    <div className='w-[50%]'>

        <input type="text" className='border-0 py-1 rounded-md mt-4 ms-2 w-[70%] ' />

        <div className='flex justify-start w-[100%] h-fit mt-2'>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: 'black'
                        }
                    }
                }}>

            </ConfigProvider>

            <Link to={'/offers'} className='hover:bg-cyan-300 rounded-md px-2'><Button>Offers</Button></Link>

            <Link to={'/saved'} className='hover:bg-cyan-300 rounded-md px-2'><Button>Saved</Button></Link>
        </div>

    </div>

    <UserPanel />
</nav>