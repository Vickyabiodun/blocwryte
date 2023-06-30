import React from 'react'
import AboutHero from '../components/About/AboutHero'
import MissionStatement from '../components/About/MissionStatement'
import Benefits from '../components/About/Benefits'
import Footer from "../components/Footer"
import Partners from '../components/About/Partners'
import Values from '../components/About/Values'
import Project from '../components/About/Project'
import Head from 'next/head'

const About = () => {
  return (
    <div className='w-full flex flex-col'>
        <Head>
        <title>About</title>
        </Head>
          <AboutHero />
          <MissionStatement />
          <Benefits />
      <Partners />
      <Values />
      <Project />
          <Footer />
          
    </div>
  )
}

export default About
