
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

export default function Form() {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const downXl = useMediaQuery(themeM.breakpoints.down('xl'));


  return (
        <Grid container sx={{position:"relative", width:"100%", height:"100%"}}>
            <Grid item xs={6} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                PART A
            </Grid> 
            <Grid item xs={6} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                Part B
            </Grid>


            <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", width:"100%", top:"-2rem"}}>
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

  )
}

