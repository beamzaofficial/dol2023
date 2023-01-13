import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Appbar from './components/appbar'
import DrawerLogin from './components/drawerLogin'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 360;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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
  }),
);

export default function Home(props) {
  const [openSideBar, setOpenSideBar] = React.useState(false);

  const onClickOpen = () => {
      setOpenSideBar(true);
  }

  const onCloseOpen = () => {
      setOpenSideBar(false);
  }
  return (
    <div>
      <Appbar openSideBar={openSideBar} onClickOpen={onClickOpen} onCloseOpen={onCloseOpen}/>
      <Main open={openSideBar}>
        <DrawerLogin/>
      </Main>
    </div>
  )
}
