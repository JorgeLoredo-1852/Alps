
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import {PlaceOutlined, Call, WhatsApp} from '@mui/icons-material';

import { useState, useRef, useEffect } from 'react'
import {Snackbar, Alert, Container, InputBase, Grid, InputAdornment, OutlinedInput, Typography, IconButton } from "@mui/material"
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: "#3900BB",
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
  weight: '400',
  subsets: ['latin'],
})

export default function Form() {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
  const form = useRef();
  const [open, setOpen] = useState(false)
  const [openFailed, setOpenFailed] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseFailed = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenFailed(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const a = e.target.user_name.value
    const b = e.target.user_email.value
    const c = e.target.message.value

    if(a && b && c){
      emailjs.sendForm('service_jg7abqb', 'template_iyit9sr', form.current, 'JgLTAy0eic29nE5Vv')
          .then((result) => {
              //console.log(result.text);
              setOpen(true);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
      });
    } else {
        setOpenFailed(true);
    }
  };

  return (
        <div style={{display:"flex", justifyContent:"center", width:"100%", height:"100%"}}>
        <Grid container sx={{position:"relative", height:"100%", maxWidth:"1200px", paddingTop:"12rem"}} >
            <Grid item xs={6} sx={{display:"flex", flexDirection:"column", padding:"1rem"}}>
                <div style={{fontSize:"3.5rem", color:"#28215C", fontWeight:"800"}}>
                    Agenda una cita
                </div>
                <div style={{fontSize:"1.2rem", color:"#5364A7", marginTop:"1.4rem", marginRight:"5rem", fontWeight:"400"}} className={inter.className}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo
                </div>
            </Grid> 
            <Grid item xs={6} sx={{display:"flex", flexDirection:"column", padding:"1rem"}}>


            <form autoComplete="off" ref={form} onSubmit={sendEmail} style={{display:"flex", flexDirection:"column"}}>
                        <Grid container sx={{padding:"1rem"}} rowSpacing={downMd ? 2 : 3} >
                            <Grid item xs={12}>
                                <div style={{fontSize:"1.6rem", color:"#28215C"}}>Nombre</div>
                                <div style={{backgroundColor:"white", padding:"0.3rem", borderRadius:"5px", marginTop:"0.6rem"}}>
                                    <InputBase
                                    sx={{ ml: 1, flex: 1, fontSize:"1rem" }}
                                    inputProps={{ 'aria-label': 'Ana Loredo' }}
                                    fullWidth
                                    name="user_name"
                                />               
                                </div>

                            </Grid>
                            <Grid item xs={12}>
                            <div style={{fontSize:"1.6rem", color:"#28215C"}}>Correo</div>
                                <div style={{backgroundColor:"white", padding:"0.3rem", borderRadius:"5px", marginTop:"0.6rem"}}>
                                    <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    inputProps={{ 'aria-label': 'Ana Loredo' }}
                                    fullWidth
                                    name="user_email"
                                    type='email'
                                />               
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                            <div style={{fontSize:"1.6rem", color:"#28215C"}}>Mensaje</div>
                                <div style={{backgroundColor:"white", padding:"0.3rem", borderRadius:"5px", marginTop:"0.6rem"}}>
                                    <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    inputProps={{ 'aria-label': 'Ana Loredo' }}
                                    multiline
                                    minRows={6}
                                    maxRows={6}
                                    fullWidth
                                    name="message"
                                />               
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <button className={styles.formButton} style={{fontSize:"1.4rem", padding:"0.5rem 2rem", width:"100%",borderRadius:"5px", outline:"none", cursor:"pointer",border:"none", backgroundColor:"#5364A7", color:"white"}}>Enviar</button>
                            </Grid>
                        </Grid>
                    </form>     



            </Grid>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <div style={{display:"flex", backgroundColor:"#5364A7", padding:"0.5rem 1.2rem", borderRadius:"5px"}}>
                    <TaskAltIcon sx={{fontSize:25, color:"white"}}/>
                    <div style={{margin:"0 1rem", color:"white"}}>
                        Correo Enviado
                    </div>
                    <div onClick={handleClose} style={{lineHeight:"0", display:"flex", justifyItems:"center"}}>
                    <ClearIcon sx={{cursor:"pointer", fontSize:20, alignSelf:"center", color:"white"}}/>
                    </div>
                </div>
            </Snackbar>

            <Snackbar open={openFailed} autoHideDuration={6000} onClose={handleCloseFailed}>
                <div style={{display:"flex", backgroundColor:"#5364A7", padding:"0.5rem 1.2rem", borderRadius:"5px"}}>
                    <WarningAmberIcon sx={{fontSize:25, color:"white"}}/>
                    <div style={{margin:"0 1rem", color:"white"}}>
                        Campos Faltantes 
                    </div>
                    <div onClick={handleCloseFailed} style={{lineHeight:"0", display:"flex", justifyItems:"center"}}>
                    <ClearIcon sx={{cursor:"pointer", fontSize:20, alignSelf:"center", color:"white"}}/>
                    </div>
                </div>
            </Snackbar>


            <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", width:"100%", top: downXl ? "-3rem" : "-2rem"}}>
                <Image
                  src="/images/Triangle2.png" // Route of the image file
                  height={190.8} // Desired size with correct aspect ratio
                  width={2500} // Desired size with correct aspect ratio
                  alt="Triangle"
                />
                <Image
                    src="/images/logo.png" // Route of the image file
                    height={85} // Desired size with correct aspect ratio
                    width={100} // Desired size with correct aspect ratio
                    alt="Analizarte" 
                    className={styles.logo}
                    style={{position:"absolute", marginLeft:"1rem", marginTop:"2rem"}}
                    />
              </div>
        </Grid>
</div>
  )
}

