import { Menu } from '@mui/icons-material'
import { Box, Button, Drawer, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import DrawerLogin from './drawerLogin'
import { styled, useTheme } from '@mui/material/styles';

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

export default function Appbar() {
    const [openSideBar, setOpenSideBar] = React.useState(false);

    const onClickOpen = () => {
        setOpenSideBar(true);
    }

    const onCloseOpen = () => {
        setOpenSideBar(false);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Grid>
                <AppBar color="inherit" position="fixed" open={openSideBar}>
                    <Grid p={1}>
                        <Toolbar>
                            <Image src={"/samartcorp.png"} width={150} height={50} />
                            <Image src={"/logoLOD.png"} width={150} height={50} />
                            <Typography color={"black"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            </Typography>
                            <Button sx={{ ...(openSideBar && { display: 'none' }) }} onClick={onClickOpen}>Login</Button>
                        </Toolbar>
                    </Grid>
                </AppBar>
                <DrawerLogin onOpen={openSideBar} onClose={onCloseOpen} />
            </Grid>
        </Box>
    )
}
