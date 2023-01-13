import { Box, Button, Divider, Drawer, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import React from 'react'
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const drawerWidth = 240;

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

console.log(AppBar,"AppBar");

export default function Appbar(props) {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Grid>
                <AppBar color="inherit" position="fixed" open={props.openSideBar}>
                    {/* <Grid p={1}> */}
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
                    {/* </Grid> */}
                </AppBar>
            </Grid>
        </Box>
    )
}
