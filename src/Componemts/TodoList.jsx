
import { Button, Stack, Box, Item, Card, Typography, CardContent, CardHeader, Avatar, IconButton, CardMedia, Switch, Grid, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';
import { appAxios } from '../Axios';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function TodoList() {

    const [todos, setTodos] = useState([])

    useEffect(() => {

        const getAllTodo = async () => {

            const todos = await appAxios.get("/todo/todos")
            setTodos(todos.data);
        }

        getAllTodo();
    }, [])

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


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

            <Grid container sx={{ backgroundColor: "#EEE" }}
                spacing={3}>


                {
                    todos.map((todo, index) => (


                        <Grid item xs={1} md={3} xl={4}   >
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
                    ))

                }

            </Grid>
        </Stack>
    );
}