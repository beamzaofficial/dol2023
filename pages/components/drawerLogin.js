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
import content from "../../msg.json"
import SnackBarDiaLog from "./snackbar";


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
    const theme = useTheme();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showTime, setShowTime] = React.useState(null);
    const [errorInput,setErrorInput] = React.useState([]);
    const [open,setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [type,setType] = React.useState('');

    const onChangeUserName = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassWord = (event) => {
        setPassword(event.target.value);
    };

    const onChekedUser = (username,password) =>{
        if (username == "admin" && password == "1234") {
            return true
        }else{
            return false
        }
    }

    React.useEffect(() => {
        setShowTime(dayjs().format("DD/MM/BBBB HH:mm:ss"));
    }, []);

    const _checkedData = () =>{
        let ValidArr = []
        if (username == "" || username == '' || username == undefined || username == null) {
            ValidArr.push("username");
        }
        if (password == "" || password == '' || password == undefined || password == null) {
            ValidArr.push("password");
        }
        setErrorInput(ValidArr);
        return ValidArr
    }

    const onLogin = () =>{
        let checkedData = _checkedData();
        if (checkedData.length > 0) {
            setMessage(content.MESSAGE_ALERT.VALIDATE.FORM_VALIDATE);
            setType("error");
            setOpen(true);
        }
        let checkedLogin = onChekedUser(username,password);
        console.log(checkedLogin);
        if (checkedLogin) {
            setMessage(content.MESSAGE_ALERT.SUCCESS.LOGIN_SUCCESSFUL);
            setType("success");
            setOpen(true);
        }else{
            setMessage(content.MESSAGE_ALERT.FAILED.LOGIN_FAILED);
            setType("error");
            setOpen(true);
        }
    }

    // console.log(content.MESSAGE_ALERT.ERROR.LOGIN_ERROR,"error_login");
    // console.log(content.MESSAGE_ALERT.FAILED.LOGIN_FAILED,"error_login");
    // console.log(content.MESSAGE_ALERT.SUCCESS.SAVE_SUCCESSFUL,"save");
    return (
        <div>
            <SnackBarDiaLog open={open} message={message} type={type} handleClose={() => setOpen(false)}/>
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
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
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
                            error={errorInput.includes("username")}
                            label={"Username"}
                            variant="outlined"
                            required
                            value={username}
                            onChange={onChangeUserName}
                        />
                    </Grid>
                    <Grid item py={1}>
                        {/* <TextField type="password" autoComplete="current-password"  /> */}
                        <TextField fullWidth
                            type={"password"}
                            label="Password"
                            value={password}
                            required
                            variant={"outlined"}
                            error={errorInput.includes("password")}
                            onChange={onChangePassWord}
                            size="small"
                        />
                    </Grid>
                    <Grid item py={1}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button variant="contained" color="info" onClick={onLogin}>
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
