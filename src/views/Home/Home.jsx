import Hero from '@/components/Hero/Hero'
import Nosotros from '@/components/Nosotros/Nosotros'
import Services from '@/components/Services/Services'
import Testimonial from '@/components/Testimonial/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <Nosotros/>
      <Testimonial/>
    </>
  )
}

export default Home