import '../styles/globals.css'
import DrawerLogin from './components/drawerLogin';
import AppBar from './components/appbar';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react'
import styles from '../styles/Home.module.css'
import { Box } from '@mui/material';

const drawerWidth = 360;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);
console.log(Main);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function App({ Component, pageProps }) {
  const [openSideBar, setOpenSideBar] = React.useState(false);

  const onClickOpen = () => {
    setOpenSideBar(true);
  }

  const onCloseOpen = () => {
    setOpenSideBar(false);
  }

  return (
    <Box display={"flex"}>
      <AppBar openSideBar={openSideBar} onClickOpen={onClickOpen} onCloseOpen={onCloseOpen} />
      <Main open={openSideBar} >
        <DrawerHeader />
        <Component {...pageProps} />
      </Main>
      <DrawerLogin openSideBar={openSideBar} onClickOpen={onClickOpen} onCloseOpen={onCloseOpen} />
    </Box>
  )
}
