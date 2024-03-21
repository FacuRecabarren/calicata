import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MendozaSlider } from '../ui/images-slider-mendoza';
import { TravelSlider } from '../ui/images-slider-travel';
import { motion } from "framer-motion";

const Services = () => {

  const { t } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 3000});
    Aos.refresh();
  },[])


  return (
    <div id='servicios' className='pt-20 relative lg:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709125624/Group_13_1_vgyvfn.svg)] bg-cover bg-no-repeat bg-bottom bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709083896/Group_13_zsavu4.svg)]'>
      <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-10 lg:gap-10 px-10 pb-10'>
        <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>  
          <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[30rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dreso9ye9/image/upload/v1709926535/foto-de-la-bodega-1024x683-1_v4pg0y.jpg')] bg-cover bg-center">
            <div className='w-full h-full flex flex-col items-center justify-between'>
              <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#218B7D] py-2 rounded-t-xl shadow-xl">{t("mendoza")}</p>
              <a href="/mendoza" className="text-md sm:text-xl flex justify-center items-center gap-2 bg-[#218B7D] absolute bottom-0 py-4 px-8 font-bold rounded-t-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#218B7D] duration-500">{t("packages1")}</a>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>
        <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[30rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dreso9ye9/image/upload/v1709915165/premium_photo-1661963952208-2db3512ef3de_vtsp8w.webp')] bg-cover bg-center">
          <div className="z-10 flex flex-col justify-between items-center gap-4 w-full h-full">
              <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#FE904D] py-2 rounded-t-xl shadow-xl">{t('travel')}</p>
              <a href="/travel" className="w-[8rem] sm:w-[10rem] lg:w-[15rem] text-md sm:text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 right-0 py-4 px-8 font-bold rounded-tl-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500 rounded-br-xl">{t("travel1")}</a>
              <a href="/events" className="w-[8rem] sm:w-[10rem] lg:w-[15rem] text-md sm:text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 left-0 py-4 px-8 font-bold rounded-tr-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500 rounded-bl-xl">{t("events")}</a>
          </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h2 className=' text-lg font-semibold text-black opacity-80 p-3  bg-opacity-60 hover:animate-bouncing cursor-default italic'>{t("travelAssistance")}</h2>
      </div>
    </div>
  )
}

export default Services