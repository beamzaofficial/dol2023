import React from "react";
import { Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
//COMPONENTS
import Tab01 from "./tabs/tab01";
import Tab02 from "./tabs/tab02";
import Tab03 from "./tabs/tab03";
import Tab04 from "./tabs/tab04";
import Tab05 from "./tabs/tab05";
import Tab06 from "./tabs/tab06";

export default function IndexScan(props) {
    const [valueTab, setValueTab] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };
    return (
        <Grid container>
            <Grid xs={12} bgcolor={"white"}>
                <TabContext value={valueTab}>
                    <Grid item xs={12} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="โฉนดที่ดิน" value="1" />
                            <Tab label="โฉนดตราจอง" value="2" />
                            <Tab label="ตราจอง" value="3" />
                            <Tab label="น.ส.3ก" value="4" />
                            <Tab label="น.ส.3" value="5" />
                            <Tab label="อาคารชุด/ห้องชุด" value="6" />
                        </TabList>
                    </Grid>
                    <TabPanel value="1"><Tab01 /></TabPanel>
                    <TabPanel value="2"><Tab02 /></TabPanel>
                    <TabPanel value="3"><Tab03 /></TabPanel>
                    <TabPanel value="4"><Tab04 /></TabPanel>
                    <TabPanel value="5"><Tab05 /></TabPanel>
                    <TabPanel value="6"><Tab06 /></TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}