import React from 'react'
import { FaFacebookF, FaInstagram  } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const Footer = () => {


  const { t } = useTranslation()

  return (
    <div className='px-10 pt-3'>
      <section className='flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center py-5'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708796313/Agencia%20viajes/Recurso_5_mhtwhe.svg" alt="" className='w-40 cursor-pointer'/>
        <article className='flex flex-col justify-center items-center gap-5'>
          <div className='flex justify-center items-center gap-3 h-6'>
            <a className='rounded-full border-[#023059] border cursor-pointer p-2 hover:border-[#59342C] duration-300'>
              <FaFacebookF className='text-[#023059] hover:text-[#59342C] duration-300'/>
            </a>
            <a className='rounded-full border-[#023059] border cursor-pointer p-2 hover:border-[#59342C] duration-300'>
              <FaInstagram className='text-[#023059] hover:text-[#59342C] duration-300'/>
            </a>
            <a href='mailto:calicataconsultas@gmail.com' target='_blank' className='rounded-full border-[#023059] border cursor-pointer p-2 hover:border-[#59342C] duration-300'>
              <BiLogoGmail className='text-[#023059] hover:text-[#59342C] duration-300'/>
            </a>
          </div>
          <div className='flex justify-center items-center gap-3 text-[#023059] font-semibold text-xs sm:text-sm'>
            <a href="" className='hover:text-[#59342C] duration-300'>{t("home")}</a><a href="" className='hover:text-[#59342C] duration-300'>{t("service")}</a><a href="" className='hover:text-[#59342C] duration-300'>{t("aboutUs")}</a><a href="" className='hover:text-[#59342C] duration-300'>{t("reviews")}</a><a href="" className='hover:text-[#59342C] duration-300'>{t("contact")}</a>
          </div>
        </article>
      </section>
      <hr />
      <section className='py-5 flex flex-col justify-center items-center gap-3'>
        <p className='text-sm font-medium opacity-80'>© 2024 Calicata. {t("rights")}</p>
        <p className='font-bold text-[#023059]'>{t("madeBy")}</p>
      </section>
    </div>
  )
}

export default Footer