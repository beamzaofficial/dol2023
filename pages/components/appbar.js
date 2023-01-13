import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Divider, Drawer, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import React from 'react'
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import dayjs from 'dayjs'
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const drawerWidth = 360;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Appbar(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showTime,setShowTime] = React.useState("");
    // const [directionIcon, setDirectionIcon] = React.useState(<ChevronLeftIcon />);
    const theme = useTheme();

    React.useEffect(()=>{
        setShowTime(dayjs().format("DD/MM/BBBB HH:mm:ss"));
    },[])

    return (
        <Box sx={{ display: 'flex' }}>
            <Grid>
                <AppBar color="inherit" position="fixed" open={props.openSideBar}>
                    <Grid p={1}>
                        <Toolbar>
                            <Image src={"/samartcorp.png"} width={150} height={50} />
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Image src={"/logoLOD.png"} width={150} height={50} />
                            <Typography color={"black"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            </Typography>
                            <Button sx={{ ...(props.openSideBar && { display: 'none' }) }} onClick={props.onClickOpen}>Login</Button>
                        </Toolbar>
                    </Grid>
                </AppBar>
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
                    anchor="right"
                    open={props.openSideBar}
                >
                    <DrawerHeader>
                        <Grid container justifyContent={"center"}>
                            <Grid item>
                                <Typography variant='h6'>Admin Login</Typography>
                            </Grid>
                        </Grid>
                        <IconButton onClick={props.onCloseOpen}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
        </Box>
    )
}
