
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

import styles from '@/styles/Home.module.css'
import {Box, Grid, IconButton} from "@mui/material"
import Navbar from '@/components/Navbar'
import {PlaceOutlined, Call, WhatsApp} from '@mui/icons-material';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react'

const inter = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Landing() {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
  const [imgHeight, setImgHeight] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)

  useEffect(()=>{
    if(downXl){
      setImgHeight(700)
      setImgWidth(323)
    } else {
      setImgHeight(800)
      setImgWidth(370)
    }
  },[downLg, downSm, downMd, downXl])

  return (
          <Box className={styles.container}> 

          {

            downMd ? <>
            
            <div className={styles.titles} style={{width:"100%", justifyContent:"center"}}>
            <div className={styles.titleMain} style={{width:"100%", textAlign:"center", fontSize:"3.3rem", marginTop:"0rem"}}>Ana Loredo</div>
              <div className={styles.titleSecondary} style={{width:"100%", textAlign:"center", fontSize:"2rem"}}>Psicóloga</div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"25rem", marginTop:"-2rem"}}>
              <Image alt="profile" src={"/images/ana3.png"} style={{borderRadius:"1000px", marginTop:"-0.6rem"}} width={280} height={280}/>
              <div style={{zIndex:"-30", width: "20rem",position:"absolute"}}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#5364A7" d="M63.6,-49.8C78.9,-31.6,85.2,-5.4,79.6,17.8C74.1,41,56.6,61.2,34.2,72.6C11.9,83.9,-15.5,86.4,-38.2,76.5C-60.8,66.6,-78.9,44.4,-83.3,20.3C-87.8,-3.8,-78.8,-29.7,-62.6,-48.1C-46.5,-66.5,-23.2,-77.5,0.5,-77.9C24.2,-78.2,48.4,-68,63.6,-49.8Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
              
              <div style={{display:"flex", flexDirection:"column",  marginTop:"-1rem"}}>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <PlaceOutlined className={styles.locationIcon} sx={{fontSize:30, alignSelf:"center", marginRight:"0.7rem"}}/>
                    <div className={styles.subtitle} style={{textAlign:"center", margin:"0", color:"#5364A7"}}>Plaza San Agustín</div>                    
                  </div>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"0.5rem"}}>
                    <WhatsApp  className={styles.locationIcon} sx={{fontSize:30, marginRight:"0.7rem"}}/>
                    <div className={styles.subtitle} style={{textAlign:"center", margin:"0", color:"#5364A7"}}>+52 81 8179 7145</div>                 
                  </div>   
                </div>            
            </div>
            
            
            </> : <>
            <div className={styles.titles}>
              <div className={styles.titleMain}>Ana</div>
              <div className={styles.titleMain}>Loredo</div>
              <div className={styles.titleSecondary}>Psicóloga</div>
              <div className={styles.points}>

                <div className={styles.point1}>
                  <svg width="75" height="75" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.149 20.8025C46.1895 27.0565 42.4795 35.2185 36.9675 38.69C31.482 42.1615 24.168 40.9425 19.292 37.206C14.3895 33.4695 11.8985 27.2155 13.4885 21.5445C15.0785 15.9 20.8025 10.8385 27.56 10.494C34.3175 10.176 42.1085 14.522 44.149 20.8025Z" fill="#5364A7"/>
                  </svg>
                </div>

                <div className={styles.point2}>
                  <svg width="75" height="75" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.149 20.8025C46.1895 27.0565 42.4795 35.2185 36.9675 38.69C31.482 42.1615 24.168 40.9425 19.292 37.206C14.3895 33.4695 11.8985 27.2155 13.4885 21.5445C15.0785 15.9 20.8025 10.8385 27.56 10.494C34.3175 10.176 42.1085 14.522 44.149 20.8025Z" fill="#5364A7"/>
                  </svg>
                </div>

                <div className={styles.point3}>
                  <svg width="75" height="75" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.149 20.8025C46.1895 27.0565 42.4795 35.2185 36.9675 38.69C31.482 42.1615 24.168 40.9425 19.292 37.206C14.3895 33.4695 11.8985 27.2155 13.4885 21.5445C15.0785 15.9 20.8025 10.8385 27.56 10.494C34.3175 10.176 42.1085 14.522 44.149 20.8025Z" fill="#5364A7"/>
                  </svg>
                </div>

              </div>

            </div>

            <div className={styles.hero}>
              <div style={{paddingTop:"7rem"}}>
                <Image
                  src="/images/ana2.png" // Route of the image file
                  height={imgHeight} // Desired size with correct aspect ratio
                  width={imgWidth} // Desired size with correct aspect ratio
                  alt="Ana Loredo"
                />                
              </div>

              <div style={{position:"absolute", bottom:"0rem", zIndex:"-20"}}>
                <Image
                  src="/images/triangle.png" // Route of the image file
                  height={300} // Desired size with correct aspect ratio
                  width={3000} // Desired size with correct aspect ratio
                  alt="Triangle"
                />    
              </div>
            </div>
            
  
            <div className={styles.info}>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                  <div className={styles.subtitle}>
                    Psicóloga
                  </div>
                  <div className={styles.line}>
                  </div>
              </div>
              <div className={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo leo, interdum et aliquam sit amet, elementum eget sapien. Integer aliquet iaculis orci in tincidunt</div>
              <div>
                <div style={{display:"flex", marginLeft:"2rem", marginTop:"1rem"}}>
                  <PlaceOutlined className={styles.locationIcon} sx={{fontSize:38, marginRight:"0.7rem"}}/>
                  <div>
                    <div className={styles.subtitle}>Plaza San Agustín</div>
                    <div className={styles.location}>Av. Real San Agustin 222, 66260 Monterrey, N.L.</div>      
                  </div>

                </div>                
              </div>
            </div>
            </>
          }
          </Box>
  )
}


/*

<div className={styles.hero}>
              <Image
                src="/images/ana.png" // Route of the image file
                height={960} // Desired size with correct aspect ratio
                width={685.5} // Desired size with correct aspect ratio
                alt="Ana Loredo"
              />
            </div>

*/