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

  const imagesMendoza = [
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709682342/Agencia%20viajes/home-monteviejo_xy2nk9.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926535/foto-de-la-bodega-1024x683-1_v4pg0y.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926476/KJCFXCZFNJAIFH26JW7FXKRXCM_yeqwdf.avif",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926509/Bodega-Andeluna-1_i9mmly.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709682101/Agencia%20viajes/wp3119472_kso98a.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709682038/Agencia%20viajes/mendoza-bodegas_tkxb9w.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709681813/Agencia%20viajes/2-38_g4palb.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926422/MZSWMNLDGI3TQZRXGM2TKYTEME_mmrcuo.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709926056/high-altitude_rzbf89.jpg"
  ];

  const imagesTravel = [
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709914862/Agencia%20viajes/photo-1433838552652-f9a46b332c40_lyekj8.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709914965/photo-1546708973-b339540b5162_fndbbe.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709682174/Agencia%20viajes/e510c3aa-e889-4556-8c0b-2bd501f07494_16-9-discover-aspect-ratio_default_0_d4lxjq.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709915035/photo-1545430868-65762127bbfb_kcb1jd.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709915041/photo-1576767444993-fa83e24a8a49_umyizo.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709915165/premium_photo-1661963952208-2db3512ef3de_vtsp8w.webp",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1709915206/photo-1604503245604-930a6f3513ef_e6783u.webp"
  ];

  return (
    <div id='servicios' className='pt-20 relative bg-white lg:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709125624/Group_13_1_vgyvfn.svg)] bg-cover bg-no-repeat bg-bottom bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709083896/Group_13_zsavu4.svg)]'>
      <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-10 lg:gap-10 px-10'>
        <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>  
          <MendozaSlider className="w-full h-full" imagesMendoza={imagesMendoza}/>
        </div>
        <div data-aos='fade-up' className='w-full h-full bg-white rounded-xl shadow-xl'>
          <TravelSlider className="w-full h-full" imagesTravel={imagesTravel}/>
        </div>
      </div>
    </div>
  )
}

export default Services