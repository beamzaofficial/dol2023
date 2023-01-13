import { Menu } from '@mui/icons-material'
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material'
// import Head from 'next/head'
import React from 'react'
// import Image from 'next/image'
import dayjs from 'dayjs'
import buddhistEra from "dayjs/plugin/buddhistEra";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
dayjs.extend(buddhistEra);

const drawerWidth = 360;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DrawerLogin(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [directionIcon, setDirectionIcon] = React.useState(<ChevronLeftIcon />);
    const showTime = dayjs().format("DD/MM/BBBB HH:mm:ss");
    const theme = useTheme();

    console.log(props, "drawer");
    console.log(theme, "theme");
    React.useEffect(() => {
        theme.direction === 'ltr' && setDirectionIcon(<ChevronRightIcon />)
    }, [])

    return (
        <div>
            <Grid container>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor={"right"}
                    open={props.onOpen}
                // onClose={props.onClose}
                >
                    <DrawerHeader>
                        <Grid container justifyContent={"center"}>
                            <Grid item>
                                <Typography variant='h6'>Admin Login</Typography>
                            </Grid>
                        </Grid>
                        <IconButton onClick={props.onClose}>
                            {directionIcon}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Grid container justifyContent={"center"} p={2}>
                        <Grid item py={1}>
                            <Typography>{showTime}</Typography>
                        </Grid>
                        <Grid item py={1}>
                            <TextField size='small' error={username == ""} label="Username" variant="outlined" required value={username} onChange={(e) => { setUsername(e) }} />
                        </Grid>
                        <Grid item py={1}>
                            <TextField size='small' error={password == ""} label="Password" variant="outlined" required value={password} onChange={(e) => { setPassword(e) }} />
                        </Grid>
                        <Grid item py={1}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button variant='contained' color='info'>Login</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' color='error'>Logout</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Drawer>
            </Grid>
        </div>
    )
}
