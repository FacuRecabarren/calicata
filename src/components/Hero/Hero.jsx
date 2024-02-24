import { IoArrowDownOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';


const Hero = () => {

  const { t } = useTranslation()
  
  return (
    <div className='pt-10 h-screen flex flex-col lg:flex lg:flex-row justify-center items-center gap-10 sm:gap-20 bg-white lg:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708603837/Group_1_tjgap4.svg)] lg:bg-right lg:bg-contain lg:bg-no-repeat bg-none)] relative' id="home">
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708660013/Agencia%20viajes/Group_11_wxzy5j.svg" alt="" className="absolute lg:hidden bottom-0"/>
        <section className='lg:w-1/2 lg:pl-20 px-10 flex justify-center lg:justify-start items-center z-10'>
          <div className='flex flex-col items-center justify-center lg:items-start gap-8'>
              {/* <p className='text-[#59342C] font-semibold text-xl'>Los mejores destinos del mundo</p> */}
              <h1 className='text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-[#023059] m-0 text-center lg:text-start sm:px-10 lg:px-0'>{t("title")}</h1>
              <p className="text-[#023059] opacity-80 font-semibold text-center xl:text-lg lg:text-start text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi saepe numquam reprehenderit</p>
              <a href='#servicios' className='flex gap-2 justify-center items-center py-3 px-10 lg:px-6 text-lg sm:text-xl text-[#023059] font-bold bg-[#F2CAA7] hover:bg-[#f2caa756] duration-500 rounded-xl'>{t("packages")}<IoArrowDownOutline className="text-xl animate-bounce"/></a>
          </div>
        </section>
        <section className="sm:w-1/2 z-10">
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708651380/Agencia%20viajes/Group_4_1_zuvqlb.webp" alt="" className="w-[20rem] sm:w-[30rem] 2xl:w-[45rem]"/>
        </section>
    </div>
  )
}

export default Hero