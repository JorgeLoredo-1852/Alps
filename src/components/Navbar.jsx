'use client';

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react' 

import {Box, Grid, IconButton, OutlinedInput} from "@mui/material"
import {Instagram, WhatsApp, MailOutline} from '@mui/icons-material';
import styles from '@/styles/Home.module.css'

import {ReactComponent as ReactLogo} from '../assets/icons/blobSocials.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

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

export default function Navbar({handlePageBio, handlePageTerapy, handlePageContact}) {
    const themeM = useTheme();

    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
    const [showDrawer, setShowDrawer] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    
    useEffect(()=>{
        if(downMd){
            setShowDrawer(true)
        } else {
            setShowDrawer(false)
        }
    },[downMd])
      
    const onClickInsta = () => {
      window.open('https://www.instagram.com/analizarte.mx/', '_blank', 'noreferrer');
    }

    const onClickWhatsapp = () =>{
      window.open('https://wa.link/011ynh', '_blank', 'noreferrer');
    }

    const onClickMail = () =>{
      window.open('mailto:psi.ana.loredo@gmail.com', '_top', 'noreferrer');
    }



    return(<>
            {

showDrawer ? 
                <>
                <Box className={styles.header} sx={{zIndex:"100"}}>
                <Image
                  src="/images/logo.png" // Route of the image file
                  height={downMd ? 62.5 : 75} // Desired size with correct aspect ratio
                  width={downMd ? 73.75 : 88.5} // Desired size with correct aspect ratio
                  alt="Analizarte" 
                  className={styles.logo}
                />
                  <input checked={openMenu} onChange={()=>setOpenMenu(!openMenu)} type="checkbox" className={styles.navigation__checkbox} id="navi-toggle"/>

                  <label htmlFor="navi-toggle" className={styles.navigation__button} style={{cursor:downSm ? "unset" : "pointer"}}>
                      <span className={styles.navigation__icon} >&nbsp;</span>
                  </label></Box>
                  <div className={openMenu ?  styles.menuContainer : styles.hideMenu} style={{zIndex:"50",position:"absolute", width:"100%",left: "0", backgroundColor:"#CCD9F0", display:"flex", flexDirection:"column"}}>
                        <div onClick={handlePageBio} style={{textAlign:"center", userSelect: "none"}} className={styles.menuItem}>Sobre Mí</div>
                        <div onClick={handlePageTerapy} style={{textAlign:"center",userSelect: "none"}} className={styles.menuItem}>Sección</div>
                        <div onClick={handlePageContact} style={{textAlign:"center",userSelect: "none"}} className={styles.menuItem}>Contacto</div>
                        <div style={{textAlign:"center", paddingBottom:"0"}} className={styles.menuItem}>
                          <Instagram onClick={onClickInsta} className={styles.menuIcon} sx={{fontSize:30, marginRight:"0.7rem"}}/>
                          <WhatsApp onClick={onClickWhatsapp} className={styles.menuIcon} sx={{fontSize:30, marginRight:"0.7rem"}}/>
                          <MailOutline onClick={onClickMail} className={styles.menuIcon} sx={{fontSize:30}}/>

                        </div>
                    </div>

                </>
                :
                <>    <Box className={styles.header}>
                <Image
                  src="/images/logo.png" // Route of the image file
                  height={downMd ? 62.5 : 75} // Desired size with correct aspect ratio
                  width={downMd ? 73.75 : 88.5} // Desired size with correct aspect ratio
                  alt="Analizarte" 
                  className={styles.logo}
                />
                    <div className={styles.sections}>
                        <p onClick={handlePageBio} style={{marginRight:downLg ? "2rem":"4rem"}} className={styles.hoverUnderlineAnimation}>Sobre Mí</p>
                        <p onClick={handlePageTerapy} style={{marginRight:downLg ? "2rem":"4rem"}} className={styles.hoverUnderlineAnimation}>Sección</p>
                        <p onClick={handlePageContact} className={styles.hoverUnderlineAnimation}>Contacto</p>
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.blob} style={{zIndex: -10 ,position:"absolute", width:"30rem", top:"-17rem", right:downLg ? "-9rem":"-6.5rem"}}>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#5364A7" d="M41.8,-73.7C53.2,-65.9,60.7,-52.6,67.5,-39.4C74.4,-26.2,80.6,-13.1,81.5,0.5C82.4,14.2,78.1,28.4,70.2,39.7C62.3,51.1,50.8,59.6,38.5,66.3C26.2,73,13.1,77.9,0.2,77.5C-12.7,77.2,-25.4,71.5,-39,65.6C-52.7,59.7,-67.4,53.6,-75.1,42.6C-82.7,31.6,-83.4,15.8,-83.8,-0.3C-84.3,-16.3,-84.5,-32.6,-77.3,-44.4C-70.1,-56.2,-55.5,-63.4,-41.3,-69.7C-27.2,-76,-13.6,-81.3,0.8,-82.7C15.2,-84.1,30.5,-81.6,41.8,-73.7Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                        <ThemeProvider theme={theme}>
                        <div className={styles.customHoverFocus} aria-label="Delete">
                                <Instagram onClick={onClickInsta} className={styles.customIcon} sx={{fontSize:45}}/>
                            </div>
                            <div className={styles.customHoverFocus} aria-label="Delete">
                                <WhatsApp onClick={onClickWhatsapp} className={styles.customIcon} sx={{fontSize:45}}/>
                            </div>
                            <div className={styles.customHoverFocus} aria-label="Delete">
                                <MailOutline onClick={onClickMail} className={styles.customIcon} sx={{fontSize:45}}/>
                            </div>
                        </ThemeProvider>
                    </div></Box>
                </>

            }
          </>

    )

}