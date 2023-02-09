
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

import styles from '@/styles/Home.module.css'
import {Box, Grid, IconButton} from "@mui/material"
import {Instagram, WhatsApp, MailOutline} from '@mui/icons-material';
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'

import { ThemeProvider } from '@mui/material'
import theme from '@/styles/material'
import { useEffect, useState, useRef } from 'react' 

const inter = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <>
      <Head>
        <title>Ana Loredo Psicología</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <main className={ styles.main}> 
        <div className={inter.className}>
        <Box sx={{overflow:"hidden", width:"100vw", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Navbar/>          
          <div style={{display:"flex", justifyContent:"center", flex:1}}>
            <Landing/>
          </div>
        </Box>

        <Box sx={{height:"100vh", backgroundColor:"#5364A7"}}>
          <div>Seccion</div>
        </Box>

        <Box sx={{height:"100vh", backgroundColor:"#28215C"}}>
          <div>Sobre Mi</div>
        </Box>
        <Box sx={{height:"100vh", backgroundColor:"#28215C"}}>
          <div>Contacto</div>
        </Box>
        </div>
      </main>
      </ThemeProvider>
    </>
  )
}
