import ContactUs from '@/components/ContactUs/ContactUs'
import Hero from '@/components/Hero/Hero'
import Nosotros from '@/components/Nosotros/Nosotros'
import Services from '@/components/Services/Services'
import Testimonial from '@/components/Testimonial/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <div className='bg-white'>
        <Services/>
        <Nosotros/>
        <Testimonial/>
        <ContactUs/>
      </div>
    </>
  )
}

export default Home