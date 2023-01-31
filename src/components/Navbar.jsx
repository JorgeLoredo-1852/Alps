'use client';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react' 

import {Box, Grid, IconButton, OutlinedInput} from "@mui/material"
import {Instagram, Call, MailOutline} from '@mui/icons-material';
import styles from '@/styles/Home.module.css'

import {ReactComponent as ReactLogo} from '../assets/icons/blobSocials.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: "#CCD9F0",
        darker: '#053e85',
      }, 
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary: {
          main: "#F2E5FF"
      }
    },
  });

  const useStyles = makeStyles(theme => ({
    customHoverFocus: {
      "&:hover, &.Mui-focusVisible": { backgroundColor: "#CCD9F0" },
      "&:hover > *":{color:"#5364A7"}
    }
  }));

export default function Navbar() {
    const themeM = useTheme();

    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
    const [showDrawer, setShowDrawer] = useState(null)

    const classes = useStyles();

    
    useEffect(()=>{
        if(downMd){
            setShowDrawer(true)
        } else {
            setShowDrawer(false)
        }
    },[downMd])

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      
    const onClickkNavbar = () => {

    }

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return(

    <Box className={styles.header}>
            <Image
              src="/images/logo.png" // Route of the image file
              height={90} // Desired size with correct aspect ratio
              width={106.25} // Desired size with correct aspect ratio
              alt="Analizarte"
              className={styles.logo}
            />
            {

showDrawer ? 
                <>
          <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button>
          <Drawer
            anchor={"bottom"}
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          >
            {list("bottom")}
          </Drawer>
                </>
                :
                <>
                    <div className={styles.sections}>
                        <p onClick={onClickkNavbar} style={{marginRight:downLg ? "2rem":"4rem"}} className={styles.hoverUnderlineAnimation}>Sección</p>
                        <p onClick={onClickkNavbar} style={{marginRight:downLg ? "2rem":"4rem"}} className={styles.hoverUnderlineAnimation}>Sobre Mí</p>
                        <p onClick={onClickkNavbar} className={styles.hoverUnderlineAnimation}>Contacto</p>
                    </div>
                    <div className={styles.socials}>
                        <div style={{position:"absolute", width:"30rem", top:"-16rem", right:downLg ? "-9rem":"-6.5rem"}}>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#5364A7" d="M41.8,-73.7C53.2,-65.9,60.7,-52.6,67.5,-39.4C74.4,-26.2,80.6,-13.1,81.5,0.5C82.4,14.2,78.1,28.4,70.2,39.7C62.3,51.1,50.8,59.6,38.5,66.3C26.2,73,13.1,77.9,0.2,77.5C-12.7,77.2,-25.4,71.5,-39,65.6C-52.7,59.7,-67.4,53.6,-75.1,42.6C-82.7,31.6,-83.4,15.8,-83.8,-0.3C-84.3,-16.3,-84.5,-32.6,-77.3,-44.4C-70.1,-56.2,-55.5,-63.4,-41.3,-69.7C-27.2,-76,-13.6,-81.3,0.8,-82.7C15.2,-84.1,30.5,-81.6,41.8,-73.7Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                        <ThemeProvider theme={theme}>
                        <IconButton className={classes.customHoverFocus} color='primary' sx={{marginRight:"1rem"}} aria-label="Delete">
                                <Instagram sx={{ fontSize: 45, color:"#CCD9F0" }} />
                            </IconButton>
                            <IconButton className={classes.customHoverFocus} color='primary' sx={{marginRight:"1rem"}}  aria-label="Delete">
                                <Call  sx={{ fontSize: 45, color:"#CCD9F0" }} />
                            </IconButton>
                            <IconButton className={classes.customHoverFocus} color='primary' sx={{marginRight:"1rem"}}   aria-label="Delete">
                                <MailOutline  sx={{ fontSize: 45, color:"#CCD9F0" }} />
                            </IconButton>
                        </ThemeProvider>
                    </div>
                </>

            }
          </Box>

    )

}