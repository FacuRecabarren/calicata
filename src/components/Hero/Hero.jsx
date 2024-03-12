import { IoArrowDownOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { PromosSlider } from "../ui/images-slider-promos";
import promos from '../../utils/promos.json'

const Hero = () => {

  const images = [
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1708984819/natalya-zaritskaya-SIOdjcYotms-unsplash_artxcj.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926535/foto-de-la-bodega-1024x683-1_v4pg0y.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709222233/elizeu-dias-RN6ts8IZ4_0-unsplash_zlwv0f.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926422/MZSWMNLDGI3TQZRXGM2TKYTEME_mmrcuo.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709915165/premium_photo-1661963952208-2db3512ef3de_vtsp8w.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709682031/Agencia%20viajes/Mendoza-portada_k5wjlo.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709915041/photo-1576767444993-fa83e24a8a49_umyizo.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709914862/Agencia%20viajes/photo-1433838552652-f9a46b332c40_lyekj8.webp"
  ];

  const { t } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 3000});
    Aos.refresh();
  },[])
  
  return (
    <div data-aos='fade' className='h-screen flex flex-col lg:flex lg:flex-row lg:justify-start justify-center items-center relative' id="home">
        <section className='w-full lg:pl-20 flex justify-center lg:justify-start items-center z-10'>
          <div data-aos='fade-up' className='flex flex-col items-center justify-center lg:items-start gap-8 px-2 lg:px-0 w-[80%]'>
              <h1 id="title" className='text-5xl sm:text-5xl w-full lg:text-7xl 2xl:text-8xl font-extrabold text-[#FCCC71] m-0 text-center lg:text-start sm:px-10 lg:px-0'>{t("title")}</h1>
              <p className="text-white text-lg font-lora italic text-center lg:text-start">{t("secondTitle")}</p>
              <a href='#servicios' className='flex gap-2 justify-center items-center py-3 px-10 lg:px-6 text-lg sm:text-xl font-bold bg-transparent border-4 border-[#ffffff] text-[#FCCC71] hover:bg-[#FCCC71] hover:text-white hover:scale-105 duration-500 rounded-xl'>{t("packages")}<IoArrowDownOutline className="text-xl"/></a>
          </div>
        </section>
        <section className="flex justify-end items-center w-full lg:px-0 h-screen absolute -z-10">
          <div className="h-full w-full">
            <ImagesSlider className="w-full fixed" images={images}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="z-50 flex flex-col justify-center items-center w-full"
              >
              </motion.div>
            </ImagesSlider>
          </div>
        </section>
        <section className="lg:h-screen lg:w-1/2 w-full h-[20rem] lg:flex justify-center items-center border-8 border-[#FCCC71] lg:rounded-l-full hidden">
          <PromosSlider promos={promos}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="z-50 flex flex-col justify-center items-center w-full"
              >
                {/* Contenido adicional dentro del slider */}
              </motion.div>
            </PromosSlider>
        </section>
    </div>
  )
}

export default Hero