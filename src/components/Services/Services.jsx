import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { AereosSlider } from '../ui/images-slider-aereos';
import promos from "../../utils/aereos.json"

const Services = () => {

  const { t } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 3000});
    Aos.refresh();
  },[])


  return (
    <div id='servicios' className='pt-20 relative lg:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709125624/Group_13_1_vgyvfn.svg)] bg-cover bg-no-repeat bg-bottom bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709083896/Group_13_zsavu4.svg)]'>
      <div className='flex flex-col justify-center items-center gap-10 lg:gap-10 px-10 pb-10'>
        <div data-aos='fade-up' className='w-full h-full rounded-xl flex flex-col lg:flex-row justify-between gap-5'>  
          <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[30rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1718400887/pedro-monteiro-HfIex7qwTlI-unsplash_2_lojunb.jpg')] bg-cover bg-center">
            <div className='w-full h-full flex flex-col items-center justify-between'>
              <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#218B7D] py-2 rounded-t-xl shadow-xl">{t("summer")}</p>
              <a href="/summer" className="text-md sm:text-xl flex justify-center items-center gap-2 bg-[#218B7D] absolute bottom-0 py-4 px-8 font-bold rounded-t-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#218B7D] duration-500">{t("packages1")}</a>
            </div>
          </div>
          <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[30rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dreso9ye9/image/upload/v1709915165/premium_photo-1661963952208-2db3512ef3de_vtsp8w.webp')] bg-cover bg-center">
            <div className='w-full h-full flex flex-col items-center justify-between'>
              <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#218B7D] py-2 rounded-t-xl shadow-xl">{t("travel1")}</p>
              <a href="/travel/world" className="text-md sm:text-xl flex justify-center items-center gap-2 bg-[#218B7D] absolute bottom-0 py-4 px-8 font-bold rounded-t-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#218B7D] duration-500">{t("packages1")}</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex lg:flex-row justify-center items-center w-full gap-5'>
          <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>
            <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[25rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dreso9ye9/image/upload/v1712013682/zachary-smith-zorgErvL_Fs-unsplash_cxffsb.jpg')] bg-cover bg-center">
              <div className="z-10 flex flex-col justify-between items-center gap-4 w-full h-full">
                <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#FE904D] py-2 rounded-t-xl shadow-xl">{t('events')}</p>
                <Link to="/recitals" className="text-md sm:text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 py-4 px-8 font-bold rounded-t-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500">{t("packages1")}</Link>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>
            <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[25rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dreso9ye9/image/upload/v1715703789/Agencia%20viajes/shai-pal-mC0IVwJ1YdU-unsplash_afzhbz_d03b1o.webp')] bg-cover bg-center">
              <div className="z-10 flex flex-col justify-between items-center gap-4 w-full h-full">
                <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#FE904D] py-2 rounded-t-xl shadow-xl">{t('sports')}</p>
                <Link to="/sports" className="text-md sm:text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 py-4 px-8 font-bold rounded-t-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500">{t("packages1")}</Link>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>
            <div className="transform hover:scale-[1.02] duration-300 rounded-xl h-[25rem] z-10 flex flex-col justify-center items-center gap-4 w-full bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1711846168/night-lights-road-tower-wallpaper-preview_qvifcn.jpg')] bg-cover bg-center">
              <div className="z-10 flex flex-col justify-between items-center gap-4 w-full h-full">
                <p className="text-xl sm:text-2xl text-white font-bold text-center w-full bg-[#FE904D] py-2 rounded-t-xl shadow-xl">{t('argentina')}</p>
                <Link to="/argentina" className="text-md sm:text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 py-4 px-8 font-bold rounded-t-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500">{t("packages1")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center px-10 transform duration-300'>
        <AereosSlider promos={promos}/>
      </div>
      <div className='flex flex-col justify-center gap-10 pt-10'>
        <h2 className='text-center text-lg font-semibold text-black opacity-80 p-3  bg-opacity-60 hover:animate-bouncing cursor-default italic'>{t("travelAssistance")}</h2>
        <div className='lg:flex lg:flex-row flex flex-col justify-center items-center gap-20'>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1722529574/Agencia%20viajes/Imagen_de_WhatsApp_2024-07-18_a_las_16.36.21_daa9cdb8_zruore.jpg" alt="" className='w-[25rem] h-[25rem] object-cover'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1722529574/Agencia%20viajes/Imagen_de_WhatsApp_2024-07-18_a_las_16.36.31_5e906dcd_diyzle.jpg" alt="" className='w-[25rem] h-[25rem] object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Services