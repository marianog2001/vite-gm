import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import NavigationTuple from '../../interfaces/NavigationTupleInterface';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MenuButton(props: NavigationTuple) {
    const [titleTuple, ...otherPropsTuples] = props.items;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate(); // Use useHistory hook

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (path: string) => {
        handleClose(); // Close the menu
        navigate(path); // Navigate
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                href={titleTuple[1]}
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 500,
                    marginInlineStart: 4,
                    fontSize: '1em',
                    color: '#B2572B',
                    display: 'block',
                    paddingY: '0.8em',
                    '&:hover': {
                        color: '#ffe76d',
                        backgroundColor: '#B2572B', // Cambia este color al que prefieras
                        transform: 'scale(1.05)'
                    }
                }}
            >
                {titleTuple[0]}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {Object.entries(otherPropsTuples).map(([key, value]) => (
                    <MenuItem
                        key={key}
                        onClick={() => handleMenuItemClick(value[1])}
                    >
                        {value[0]}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
