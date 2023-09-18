
import { Button, Stack, Box, Card } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"


export default function TodoList() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction={'row'} margin={3} spacing={5}>
            <Box sx={{ widows: "256px", backgroundColor: " #FFF", color: 'white' }}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>My Todo</MenuItem>

                </Menu>
            </Box>
            <Box sx={{ backgroundColor: "#EEE", }}>
                shgasa
            </Box>

        </Stack>
    );
}