import { Menu } from '@mui/icons-material'
import { AppBar, Box, Button, Drawer, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

export default function DrawerLogin() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const showTime = dayjs().format("DD/MM/BBBB HH:mm:ss");
    const drawerWidth = 360;
    return (
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
                anchor={"right"}
                variant="permanent"
            // open={true}
            >
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
    )
}
