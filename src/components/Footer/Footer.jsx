import React from 'react'
import { FaFacebookF, FaInstagram  } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='px-10 pt-20'>
      <section className='flex justify-between items-center py-5'>
        <h2 className='font-extrabold text-xl text-[#023059]'>LOGO</h2>
        <article className='flex flex-col justify-center items-center gap-5'>
          <div className='flex justify-center items-center gap-3 h-6'>
            <a className='rounded-full border-[#023059] border cursor-pointer p-2 hover:border-[#59342C] duration-300'>
              <FaFacebookF className='text-[#023059] hover:text-[#59342C] duration-300'/>
            </a>
            <a className='rounded-full border-[#023059] border cursor-pointer p-2 hover:border-[#59342C] duration-300'>
              <FaInstagram className='text-[#023059] hover:text-[#59342C] duration-300'/>
            </a>
            <a className='rounded-full border-[#023059] border cursor-pointer p-2 hover:border-[#59342C] duration-300'>
              <BiLogoGmail className='text-[#023059] hover:text-[#59342C] duration-300'/>
            </a>
          </div>
          <div className='flex justify-center items-center gap-3 text-[#023059] font-semibold text-sm'>
            <a href="" className='hover:text-[#59342C] duration-300'>Inicio</a><a href="" className='hover:text-[#59342C] duration-300'>Servicios</a><a href="" className='hover:text-[#59342C] duration-300'>Nosotros</a><a href="" className='hover:text-[#59342C] duration-300'>Testimonios</a>
          </div>
        </article>
      </section>
      <hr />
      <section className='py-5 flex flex-col justify-center items-center gap-3'>
        <p className='text-sm font-medium opacity-80'>© 2024 Nombre. All Rights Reserved.</p>
        <p className='font-bold text-[#023059]'>Made by Elizca</p>
      </section>
    </div>
  )
}

export default Footer