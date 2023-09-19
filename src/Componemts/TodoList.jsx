
import { Button, Stack, Box, Card, Typography, CardContent, CardHeader, Avatar, IconButton, CardMedia, Switch, Grid, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, Link } from '@mui/material';
import { useState } from 'react';
import { red } from '@mui/material/colors';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';



export default function TodoList() {

    fetch(`https://todo-server-programming-agency.vercel.app/todo/todos`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <Stack direction={'row'} spacing={1}>
            <List
                sx={{ width: '100%', maxWidth: 256, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Logo here
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <GridViewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List sx component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="My todos" />
                        </ListItemButton>
                        {/* Add todo */}

                        <ListItemButton sx={{ pl: 4 }}>

                            <Link underline="none" href="/addTodo"><ListItemText primary="Add Todo" /></Link>
                        </ListItemButton>

                    </List>
                </Collapse>
            </List>

            {/* card  */}


            <Grid sx={{ backgroundColor: "#EEE" }}
                container spacing={3}>
                <Grid item xs   >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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

                </Grid>

                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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

                </Grid>

                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>
                <Grid item xs  >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="Avatar">
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
                        <Typography padding={1}
                            variant="body2"
                            color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>


                    </Card>

                </Grid>

            </Grid>

        </Stack>
    );
}