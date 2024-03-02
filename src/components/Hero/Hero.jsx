import { IoArrowDownOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
 


const Hero = () => {

  const images = [
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1708984819/natalya-zaritskaya-SIOdjcYotms-unsplash_artxcj.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709222233/elizeu-dias-RN6ts8IZ4_0-unsplash_zlwv0f.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709350380/engin-yapici-WA1u0scVLZU-unsplash_rtkwmd.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709222231/lucia-macedo-WbU-8xoco9o-unsplash_xqagal.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709222061/boxed-water-is-better-jbcY_yvsDzk-unsplash_ymmvwr.webp"
  ];

  const { t } = useTranslation()
  
  return (
    <div className='h-screen flex flex-col lg:flex lg:flex-row lg:justify-start justify-center items-center relative' id="home">
        <section className='lg:w-[50%] lg:pl-20 flex justify-center lg:justify-start items-center z-10'>
          <div className='flex flex-col items-center justify-center lg:items-start gap-8 px-10 lg:px-0'>
              <h1 id="title" className='text-4xl sm:text-5xl w-full lg:text-7xl 2xl:text-8xl font-extrabold text-[#FCCC71] m-0 text-center lg:text-start sm:px-10 lg:px-0'>{t("title")}</h1>
              <p className="text-white font-lora italic text-center lg:text-start">{t("secondTitle")}</p>
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
                {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#FCCC71] to-[#ffdfa4] py-4">
                PROMOS
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-[#FCCC71] bg-opacity-40 border-[#FCCC71] text-white text-center rounded-full relative mt-4">
                  <span>Consultar →</span>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-gray-600 to-transparent" />
                </button> */}
              </motion.div>
            </ImagesSlider>
          </div>
        </section>
        {/* <section className="h-screen grayscale w-1/2 flex justify-center items-center">
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709224855/RECA_S-mofsdfdified_gavhqs.png" alt="" className="w-[30rem]"/>
        </section> */}
    </div>
  )
}

export default Hero