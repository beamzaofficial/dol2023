import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Tab
}
    from '@mui/material'

import { TabContext, TabList, TabPanel } from '@mui/lab';


export default function HeaderTabs() {
    const [valueTab, setValueTab] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Grid container>
                    <TabContext value={valueTab}>
                        <Grid item xs={12} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="โฉนดที่ดิน" value="1" />
                                <Tab label="น.ส.ล." value="2" />
                                <Tab label="น.ส.3ก" value="3" />
                                <Tab label="ที่สาธารณประโยชน์" value="4" />
                                <Tab label="หนังสืออนุญาต" value="5" />
                                <Tab label="นำเข้าเอกสารสิทธิ์" value="6" />
                                <Tab label="โฉนดตราจอง" value="7" />
                                <Tab label="ตราจองที่แสดงว่า ได้ทำประโยชน์แล้ว" value="8" />
                            </TabList>
                        </Grid>
                        <TabPanel value="1"></TabPanel>
                        <TabPanel value="2"></TabPanel>
                        <TabPanel value="3"></TabPanel>
                        <TabPanel value="4"></TabPanel>
                        <TabPanel value="5"></TabPanel>
                        <TabPanel value="6"></TabPanel>
                        <TabPanel value="7"></TabPanel>
                        <TabPanel value="8"></TabPanel>
                    </TabContext>
                </Grid>
            </AppBar>
        </Box>
    )
}
