
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import {PlaceOutlined, Call, WhatsApp} from '@mui/icons-material';

import { useState, useRef, useEffect } from 'react'
import {Box, Snackbar, Alert, Container, InputBase, Grid, InputAdornment, OutlinedInput, Typography, IconButton } from "@mui/material"
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TimelineObserver from "react-timeline-animation";

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

export default function Terapy(){
    const [rendered, setRendered] = useState(false)
    const onCallback = () => {
        console.log("awesome");
      };
    useEffect(()=>{
        setRendered(true)
    },[])
    return(<>{rendered ? <TimelineObserver
        initialColor="rgba(255,255,255,0.12)"
        fillColor="#CCD9F0"
        hasReverse={true}
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      /> : <></>}</>)
}

const Timeline = ({ setObserver, callback }) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
  const [message1, setMessage1] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [message3, setMessage3] = useState(false);
  const [message4, setMessage4] = useState(false);
  const timeline0 = useRef();
  const timeline1 = useRef();
  const timeline2 = useRef();
  const timeline3 = useRef();
  const circle1 = useRef();
  const circle2 = useRef();
  const circle3 = useRef();

  const someCallback = () => {
    setMessage1(true);
    callback();
  };

  const someCallback2 = () => {
    setMessage2(true);
  };

  const someCallback3 = () => {
    setMessage3(true);
  };

  const someCallback4 = () => {
    setMessage4(true);
  };

  useEffect(() => {
    setObserver(timeline0.current);
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
  }, []);
  return (
        <div style={{width:"100%", height:"100%"}} className={inter.className}>
            {
                downSm ? <>
                
                <div style={{width:"100%", fontSize:"2.7rem", textAlign:"center", padding:"4rem 0", color:"#CCD9F0", fontWeight:"800"}}>
                    ¿Por qué es importante ir a terapia? 
                </div>
                <Grid container>
                    <Grid item xs={2} style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                        <div id="timeline0" ref={timeline0} className={styles.timelineN0} />
                        <div className={styles.circleWrapper}>
                            <div id="circle1" ref={circle1} className={styles.circle}>
                            &nbsp;
                            </div>
                        </div>
                        <div id="timeline1" ref={timeline1} className={styles.timelineN1} style={{height: downSm ? "500px" : "400px"}}/>
                    </Grid>
                    <Grid item xs={10} sm={5} sx={{marginTop:"1rem", paddingLeft:"1rem", paddingRight:"1.5rem"}}>
                        <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem", marginBottom:"1rem"}} width={200} height={200}/>
                        <div style={{ color:"#CCD9F0", marginBottom:"1rem", fontSize:downMd ? "1.8rem" : "2.5rem", fontWeight:"600"}}>
                            Lorem Ipsum
                        </div>
                        <div style={{ color:"white",fontSize:"1.1rem", textAlign:"left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2} style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                        <div className={styles.circleWrapper}>
                            <div id="circle2" ref={circle2} className={styles.circle}>
                            &nbsp;
                            </div>
                        </div>
                        <div id="timeline2" ref={timeline2} className={styles.timelineN2} style={{height: downSm ? "500px" : "400px"}}/>
                    </Grid>
                    <Grid item xs={10} sm={5} sx={{marginTop:"-13.5rem", paddingLeft:"1rem", paddingRight:"1.5rem"}}>
                        <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem", marginBottom:"1rem"}} width={200} height={200}/>
                        <div style={{ color:"#CCD9F0", marginBottom:"1rem", fontSize:downMd ? "1.8rem" : "2.5rem", fontWeight:"600"}}>
                            Lorem Ipsum
                        </div>
                        <div style={{ color:"white",fontSize:"1.1rem", textAlign:"left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt
                        </div>
                    </Grid>
                </Grid> 

                <Grid container>
                    <Grid item xs={2} style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <div className={styles.circleWrapper}>
                    <div id="circle3" ref={circle3} className={styles.circle}>
                        &nbsp;
                        </div>
                    </div>
                    <div id="timeline3" ref={timeline3} className={styles.timelineN3} style={{height: downSm ? "300px" : "300px"}}/>
                    </Grid>
                    <Grid item xs={10} sm={5} sx={{marginTop:"-13.5rem", paddingLeft:"1rem", paddingRight:"1.5rem"}}>
                        <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem", marginBottom:"1rem"}} width={200} height={200}/>
                        <div style={{ color:"#CCD9F0", marginBottom:"1rem", fontSize:downMd ? "1.8rem" : "2.5rem", fontWeight:"600"}}>
                            Lorem Ipsum
                        </div>
                        <div style={{ color:"white",fontSize:"1.1rem", textAlign:"left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt
                        </div>
                    </Grid>
                </Grid> 
                
                </> : <>
                            <div style={{width:"100%", fontSize:"3.5rem", textAlign:"center", padding:"4rem 0", color:"#CCD9F0", fontWeight:"800"}}>
                ¿Por qué es importante ir a terapia? 
            </div>
            <Grid container>
                    <Grid item xs={2} sm={5} sx={{display:"flex", flexDirection:"column", alignItems:"flex-end", paddingLeft:"4rem", marginTop:downMd ? "0rem" :"5rem"}} >
                        <div style={{ color:"#CCD9F0", marginBottom:"1rem", fontSize:downMd ? "1.8rem" : "2.5rem", fontWeight:"600"}}>
                            Lorem Ipsum
                        </div>
                        <div style={{ color:"white",fontSize:"1.3rem", textAlign:"right"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt
                        </div>
                    </Grid>
                    <Grid item xs={2} style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                        <div id="timeline0" ref={timeline0} className={styles.timelineN0} />
                        <div className={styles.circleWrapper}>
                            <div id="circle1" ref={circle1} className={styles.circle}>
                            &nbsp;
                            </div>
                        </div>
                        <div id="timeline1" ref={timeline1} className={styles.timelineN1} style={{height: downSm ? "650px" : "400px"}}/>
                    </Grid>
                    <Grid item xs={8} sm={5} sx={{marginTop:"4rem"}}>
                        <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem"}} width={250} height={250}/>
                </Grid>
            </Grid>






      <Grid container>
            <Grid item xs={8} sm={5} sx={{display:"flex", flexDirection:"column", alignItems:"flex-end",marginTop:"-6rem", paddingLeft:"4rem"}}>
            <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem"}} width={250} height={250}/>
                </Grid>
            <Grid item xs={2} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className={styles.circleWrapper}>
                    <div id="circle2" ref={circle2} className={styles.circle}>
                    &nbsp;
                    </div>
                </div>
                <div id="timeline2" ref={timeline2} className={styles.timelineN2} style={{height: downSm ? "650px" : "400px"}}/>
            </Grid>
            <Grid item xs={2} sm={5} sx={{display:"flex", flexDirection:"column", alignItems:"flex-start", marginTop:downMd ? "-8rem" : "-5rem", paddingRight:"4rem"}} >
            <div style={{ color:"#CCD9F0", marginBottom:"1rem", fontSize:downMd ? "1.8rem" : "2.5rem", fontWeight:"600"}}>
                            Lorem Ipsum
                        </div>
                        <div style={{ color:"white",fontSize:"1.3rem", textAlign:"left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt
                        </div>
                    </Grid>
      </Grid>







      <Grid container>
      <Grid item xs={2} sm={5} sx={{display:"flex", flexDirection:"column", alignItems:"flex-end", paddingLeft:"4rem", marginTop:downMd ? "-8rem" : "-5rem"}} >
                        <div style={{ color:"#CCD9F0", marginBottom:"1rem", fontSize:downMd ? "1.8rem" : "2.5rem", fontWeight:"600"}}>
                            Lorem Ipsum
                        </div>
                        <div style={{ color:"white",fontSize:"1.3rem", textAlign:"right"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt
                        </div>
                    </Grid>
            <Grid item xs={2} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className={styles.circleWrapper}>
                    <div id="circle3" ref={circle3} className={styles.circle}>
                    &nbsp;
                    </div>
                </div>
                <div id="timeline3" ref={timeline3} className={styles.timelineN3} style={{height: downSm ? "500px" : "300px"}}/>
            </Grid>
            <Grid item xs={8} sm={5} sx={{marginTop:"-6rem"}}>
                        <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem"}} width={250} height={250}/>
                </Grid>
      </Grid>
                </>
            }
        </div>
  )
}
