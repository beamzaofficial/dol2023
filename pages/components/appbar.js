import { Menu } from '@mui/icons-material'
import { AppBar, Box, Button, Drawer, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Grid p={1}>
                    <Toolbar>
                        <Image src={"/samartcorp.png"} width={150} height={50} />
                        <Image src={"/logoLOD.png"} width={150} height={50} />
                        <Typography color={"black"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>

                        {/* <Button >Login</Button> */}
                    </Toolbar>
                </Grid>
            </AppBar>
        </Box>
    )
}
