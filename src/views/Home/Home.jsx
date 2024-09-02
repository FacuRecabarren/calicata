import ContactUs from '@/components/ContactUs/ContactUs'
import Hero from '@/components/Hero/Hero'
import Nosotros from '@/components/Nosotros/Nosotros'
import Services from '@/components/Services/Services'
import Testimonial from '@/components/Testimonial/Testimonial'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import 'aos/dist/aos.css';
import Promos from '@/components/Promos/Promos'

const Home = () => {

  const { i18n } = useTranslation()

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
        i18n.changeLanguage(selectedLanguage);
    }
}, []); // Run only once on component mount

  return (
    <>
      <Hero/>
      <div className='bg-white'>
        <Services/>
        {/* <Promos/> */}
        <Nosotros/>
        <Testimonial/>
        <ContactUs/>
      </div>
    </>
  )
}

export default Home