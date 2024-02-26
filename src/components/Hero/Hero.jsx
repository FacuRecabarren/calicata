import { IoArrowDownOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';


const Hero = () => {

  const { t } = useTranslation()
  
  return (
    <div className='pt-10 h-screen flex flex-col lg:flex lg:flex-row justify-center items-center gap-10 sm:gap-20 lg:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708897821/svg_3_1_jju9ih.svg)] lg:bg-contain lg:bg-no-repeat bg-none relative' id="home">
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708898786/Group_11_1_pfmqqv.svg" alt="" className="absolute lg:hidden bottom-0"/>
        <section className='lg:w-1/2 lg:pl-20 px-10 flex justify-center lg:justify-start items-center z-10'>
          <div className='flex flex-col items-center justify-center lg:items-start gap-8'>
              <h1 className='text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-[#218B7D] m-0 text-center lg:text-start sm:px-10 lg:px-0'>{t("title")}</h1>
              <p className="text-[#218B7D] opacity-60 font-semibold text-center xl:text-lg lg:text-start text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi saepe numquam reprehenderit</p>
              <a href='#servicios' className='flex gap-2 justify-center items-center py-3 px-10 lg:px-6 text-lg sm:text-xl text-[#218B7D] font-bold bg-gradient-to-l from-[#fccb71c5] to-[#fccb718f] hover:bg-gradient-to-l hover:scale-105 duration-500 rounded-xl'>{t("packages")}<IoArrowDownOutline className="text-xl"/></a>
          </div>
        </section>
        <section className="sm:w-1/2 z-10">
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708651380/Agencia%20viajes/Group_4_1_zuvqlb.webp" alt="" className="w-[20rem] sm:w-[30rem] 2xl:w-[35rem]"/>
        </section>
    </div>
  )
}

export default Hero