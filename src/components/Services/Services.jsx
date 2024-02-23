import React from 'react'
import { useTranslation } from 'react-i18next'

const Services = () => {

  const { t } = useTranslation()

  return (
    <div id='servicios' className='pt-20 relative'>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708712106/Meteor_utmbba.svg" alt="" className='absolute -z-10 hidden sm:flex sm:h-[30rem] w-full'/>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708711530/Meteor_1_zyru00.svg" alt="" className='sm:hidden absolute -z-10 h-[35rem]'/>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708711530/Meteor_1_zyru00.svg" alt="" className='sm:hidden absolute -z-10 h-[35rem] bottom-10'/>
      <div className='flex flex-col sm:flex sm:flex-row justify-center items-center gap-10 lg:gap-20 px-10'>
        <section className='flex flex-col justify-center items-center gap-10 py-5 w-[22rem] sm:w-[30rem] shadow-md rounded-xl bg-white border-2 border-t-[2rem] border-[#023059]'>
          <div className='flex flex-col justify-center items-center gap-6 pt-10'>
            <div className='flex justify-center items-center w-40 h-40 bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708656436/Agencia%20viajes/asset_5_jm3p3r.svg)] bg-contain bg-no-repeat bg-center'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708651267/Agencia%20viajes/vecteezy_3d-airplane-transparent-background-aircraft-aeroplane-3d_22950875_lqt46j.webp" alt=""/>
            </div>
            <h2 className='text-[#023059] font-bold text-2xl'>{t("travel")}</h2>
            <p className='px-12 text-center text-sm font-medium opacity-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nesciunt cumque</p>
          </div>
          <a href="" className='flex gap-2 justify-center items-center py-3 px-10 lg:px-6 text-lg text-[#023059] font-bold bg-[#F2CAA7] hover:bg-[#f2caa756] duration-500 rounded-xl'>Más información</a>
        </section>
        <section className='flex flex-col justify-center items-center gap-10 py-5 w-[22rem] sm:w-[30rem] shadow-md rounded-xl bg-white border-2 border-t-[2rem] border-[#023059]'>
          <div className='flex flex-col justify-center items-center gap-6 pt-10'>
            <div className='flex justify-center items-center w-40 h-40 bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708656436/Agencia%20viajes/asset_5_jm3p3r.svg)] bg-contain bg-no-repeat bg-center'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708651312/Agencia%20viajes/Group_5_2_l0wfe9.webp" alt=""/>
            </div>
            <h2 className='text-[#023059] font-bold text-2xl'>{t("excursions")}</h2>
            <p className='px-12 text-center text-sm font-medium opacity-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nesciunt cumque</p>
          </div>
          <a href="" className='flex gap-2 justify-center items-center py-3 px-10 lg:px-6 text-lg text-[#023059] font-bold bg-[#F2CAA7] hover:bg-[#f2caa756] duration-500 rounded-xl'>Más información</a>
        </section>
      </div>
    </div>
  )
}

export default Services