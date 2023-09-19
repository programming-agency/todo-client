
import { Button, Stack, Box, Card, Typography, CardContent, CardHeader, Avatar, IconButton, CardMedia, Switch } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { red } from '@mui/material/colors';



export default function TodoList() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Stack
            direction={'row'}
            margin={3}
            spacing={5}>

            {/* <Box sx={{
                width: "256px"
                , backgroundColor: " #FFF",
                color: 'white'
            }}>
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
            </Box> */}

            <Stack
                sx={{
                    display: 'grid'
                    , gridTemplateColumns: 'repeat(3, 1fr)'
                    , backgroundColor: "#EEE",
                }}
                height={'100vh'} padding={5}
                direction={'row'}
                spacing={2}>
                <Box >
                    <Card
                        sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="recipe">
                                    NH
                                </Avatar>
                            }

                            action={
                                <IconButton aria-label="settings">
                                    <Switch {...label}
                                        defaultChecked />
                                </IconButton>
                            }
                            title="Label"
                        />
                        <Typography padding={2}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Box>
                <Box>
                    <Card
                        sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="recipe">
                                    NH
                                </Avatar>
                            }

                            action={
                                <IconButton aria-label="settings">
                                    <Switch {...label}
                                        defaultChecked />
                                </IconButton>
                            }
                            title="Label"
                        />
                        <Typography padding={2}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout .
                        </Typography>


                    </Card>

                </Box>
                <Box  >
                    <Card
                        sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="recipe">
                                    NH
                                </Avatar>
                            }

                            action={
                                <IconButton aria-label="settings">
                                    <Switch {...label}
                                        defaultChecked />
                                </IconButton>
                            }
                            title="Label"
                        />
                        <Typography padding={2}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Box>
            </Stack>

        </Stack>
    );
}