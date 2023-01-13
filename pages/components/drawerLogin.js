import React from "react";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
import {
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 360;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
}));

export default function DrawerLogin(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showTime, setShowTime] = React.useState(null);

    const onChangeUserName = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassWord = (event) => {
        setPassword(event.target.value);
    };
    // const [directionIcon, setDirectionIcon] = React.useState(<ChevronLeftIcon />);
    const theme = useTheme();

    React.useEffect(() => {
        setShowTime(dayjs().format("DD/MM/BBBB HH:mm:ss"));
    }, []);

    return (
        <div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="right"
                open={props.openSideBar}
            >
                <DrawerHeader>
                    <Grid container justifyContent={"center"}>
                        <Grid item>
                            <Typography variant="h6">Admin Login</Typography>
                        </Grid>
                    </Grid>
                    <IconButton onClick={props.onCloseOpen}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Grid container justifyContent={"center"} p={2}>
                    <Grid item py={1} justifySelf={"center"}>
                        <Typography>{showTime}</Typography>
                    </Grid>
                    <Grid item py={1}>
                        <TextField
                            size="small"
                            error={username == ""}
                            label={"Username"}
                            variant="outlined"
                            required
                            value={username}
                            onChange={onChangeUserName}
                        />
                    </Grid>
                    <Grid item py={1}>
                        {/* <TextField type="password" autoComplete="current-password"  /> */}
                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            error={password == ""}
                            variant="outlined"
                            required
                            value={password}
                            onChange={onChangePassWord}
                        />
                    </Grid>
                    <Grid item py={1}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button variant="contained" color="info">
                                    Login
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="error">
                                    Logout
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
        </div>
    );
}
