
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

import styles from '@/styles/Home.module.css'
import {Box, Grid, IconButton} from "@mui/material"
import Navbar from '@/components/Navbar'
import {PlaceOutlined} from '@mui/icons-material';

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
      setImgHeight(800)
      setImgWidth(370)
    } else {
      setImgHeight(800)
      setImgWidth(370)
    }
  },[downLg, downSm, downMd, downXl])

  return (
          <Box className={styles.container}> 
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
              <Image
                src="/images/ana2.png" // Route of the image file
                height={imgHeight} // Desired size with correct aspect ratio
                width={imgWidth} // Desired size with correct aspect ratio
                alt="Ana Loredo"
              />
              <div style={{position:"absolute", bottom:"0rem", left:"-58rem", zIndex:"-20"}}>
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