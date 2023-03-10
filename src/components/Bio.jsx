import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react' 
import { Poppins } from '@next/font/google'

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

import {
    slideInBottom,
    slideOnScroll,
    slideInTop
  } from '@/components/Animations';
import ScrollAnimatable from '@/components/Animation';

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

  const inter = Poppins({
    weight: '600',
    subsets: ['latin'],
  })

export default function Bio({handlePageContact}) {
    const themeM = useTheme();

    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
    const downXl = useMediaQuery(themeM.breakpoints.down('xl'));

    const onClickInsta = () => {
        window.open('https://www.instagram.com/analizarte.mx/', '_blank', 'noreferrer');
    }

    const onClickWhatsapp = () =>{
        window.open('https://wa.link/011ynh', '_blank', 'noreferrer');
    }

    const onClickMail = () =>{
        window.open('mailto:psi.ana.loredo@gmail.com',  "_top", 'noreferrer');
    }


    return(

        <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}} >
            <div style={{maxWidth:"1280px",width:"100%", height:"100%"}}>
                <Grid container style={{width:"100%", height:"100vh", padding:downMd ? "0" : "3rem", paddingBottom:"0"}}>
                    <Grid item xs={12} md={7} sx={{height:"100%", padding:downMd ? "2rem" : "0 1rem", display:"flex", flexDirection:"column"}}>
                                                <ScrollAnimatable
                            initial='start'
                            animate='end'
                            animation={slideInBottom}
                            transition={slideOnScroll}
                        ><div style={{display:"flex", justifyContent:downMd ? "center":""}}>

                            <Image
                                src="/images/logo.png" // Route of the image file
                                height={75} // Desired size with correct aspect ratio
                                width={88.5} // Desired size with correct aspect ratio
                                alt="Analizarte" 
                                className={styles.logo}
                            />
                            <div className={styles.customHoverFocus} style={{marginRight:downSm ? "0.4rem" :""}} aria-label="Delete">
                                <Instagram onClick={onClickInsta} className={styles.customIcon} sx={{fontSize:45}}/>
                            </div>
                            <div className={styles.customHoverFocus} style={{marginRight:downSm ? "0.4rem" :""}} aria-label="Delete">
                                <WhatsApp onClick={onClickWhatsapp} className={styles.customIcon} sx={{fontSize:45}}/>
                            </div>
                            <div className={styles.customHoverFocus} style={{marginRight:downSm ? "0" :""}} aria-label="Delete">
                                <MailOutline onClick={onClickMail} className={styles.customIcon} sx={{fontSize:45}}/>
                            </div>
                            
                        </div></ScrollAnimatable>
                        <ScrollAnimatable
                            initial='start'
                            animate='end'
                            animation={slideInBottom}
                            transition={slideOnScroll}
                            style={{margin:"auto 0"}}
                        >
                        <div>
                        
                            {downMd ? <></> : <div className={inter.className} style={{fontSize:"3rem", fontWeight:"800", lineHeight:"1.2", color:"#CCD9F0", textAlign:downMd ? "center":"", marginBottom: downMd ? "1rem": ""}}>Hola, soy</div>}
                            <div className={inter.className} style={{fontSize:downMd ? "4.5rem" : "5.5rem", lineHeight:"1", fontWeight:"800", color:"#CCD9F0", textAlign:downMd ? "center":""}}>Ana Loredo</div>
                            <div style={{fontSize:"1.4rem", color:"white", marginTop:"1rem", textAlign:downMd ? "justify":""}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt. Nulla mollis finibus posuere. Sed vehicula neque rhoncus.</div>
                            <div style={{width:"100%", display:"flex", justifyContent:downMd ? "center":""}}>
                                <div className={styles.formButton} onClick={handlePageContact} style={{marginBottom:downMd ? "" : "4rem", width:"fit-content", textAlign:"left", cursor:"pointer", fontSize:"1.8rem", color:"#CCD9F0", marginTop:"1rem", borderBottom:"2px solid #CCD9F0"}}>Contactar</div>
                            </div>
                            
                        </div></ScrollAnimatable>
                    </Grid>
                    {downMd ? <></> : <Grid item xs={0} md={5} sx={{height:"100%", display:"flex", justifyContent:"flex-start", alignItems:"flex-end", padding:"0 1rem"}}>
                        <ScrollAnimatable
                            key='reference'
                            initial='start'
                            animate='end'
                            animation={slideInBottom}
                            transition={slideOnScroll}
                        >                      <Image
                            src="/images/ana5.png" // Route of the image file
                            height={downXl ? 590: 708} // Desired size with correct aspect ratio
                            width={downXl ? 377: 452} // Desired size with correct aspect ratio
                            alt="Ana Loredo"
                            className={styles.ana5}
                        />   
                        </ScrollAnimatable>    
                    </Grid>}
                </Grid>
            </div>
        </div>

    )

}