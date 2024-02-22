import { IoIosArrowRoundForward, IoLogoInstagram, IoLogoFacebook  } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RiTwitterXFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className='h-screen pt-10 flex justify-center items-center gap-20 bg-white bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708603837/Group_1_tjgap4.svg)] bg-right-top bg-no-repeat bg-contain'>
        <section className='w-1/2 pl-20 flex justify-start items-center'>
          <div className='flex flex-col justify-center items-start gap-8'>
              <p className='text-center text-[#59342C] font-semibold text-xl'>Los mejores destinos del mundo</p>
              <h1 className='text-3xl lg:text-7xl font-extrabold text-[#023059] m-0'>Viajar, disfrutar y vivir una vida nueva y plena</h1>
              <p className="text-[#023059] opacity-80 font-semibold pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi saepe numquam reprehenderit error atque delectus dolore veniam ducimus.</p>
              <a href='#contact' className='flex gap-2 justify-center items-center py-3 px-10 lg:px-6 text-xl text-[#023059] font-bold bg-[#F2CAA7] hover:bg-[#f2caa756] duration-500 rounded-xl'>Más información <IoIosArrowRoundForward className="text-2xl"/></a>
          </div>
        </section>
        <section className="w-1/2">
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708605750/vecteezy_3d-viajero-personaje-comprobacion-mapa-en-telefono-mientras_36309449_ndiofj.png" alt="" className="w-[35rem]"/>
        </section>
    </div>
  )
}

export default Hero