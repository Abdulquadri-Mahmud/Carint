import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import About from '../Components/About'
import Track from '../Components/Track'
import Testimonial from '../Components/Testimonial'
import Contact from '../Components/Contact'

export default function HomePage() {
  return (
    <Box>
      <Hero/>
      <Services/>
      <About/>
      <Track/>
      <Testimonial/>
      <Contact/>
    </Box>
  )
}
