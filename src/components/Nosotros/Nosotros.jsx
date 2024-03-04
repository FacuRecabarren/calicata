import React, { useEffect } from 'react';
import Atropos from 'atropos/react';
import { useTranslation } from 'react-i18next';
import 'atropos/css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Nosotros = () => {


    const { i18n } = useTranslation()

    
  useEffect(()=>{
    Aos.init({duration: 2000});
    Aos.refresh();
  },[])

    const text = i18n.language === "es" ? <span>En la agencia de viajes <span className='text-[#218B7D] font-bold'>Calicata</span>, nos enorgullecemos de ser vendedores experimentados de <span className='text-[#218B7D] font-bold'>paquetes turísticos</span>. Con una pasión por la exploración y un compromiso de brindar <span className='text-[#218B7D] font-bold'>experiencias inolvidables</span>, nos esforzamos por adaptar cada viaje a las preferencias únicas de nuestros clientes. Nuestro equipo está comprometido en asegurar arreglos de viaje sin contratiempos, dejándote libre para concentrarte en <span className='text-[#218B7D] font-bold'>crear recuerdos que perdurarán toda la vida.</span></span> : i18n.language === "en" ? <span>At <span className='text-[#218B7D] font-bold'>Calicata</span> travel agency, we pride ourselves on being experienced sellers of <span className='text-[#218B7D] font-bold'>tour packages</span>. With a passion for exploration and a commitment to providing <span className='text-[#218B7D] font-bold'>unforgettable experiences</span>, we strive to tailor each trip to our clients' unique preferences. Our team is committed to ensuring seamless travel arrangements, leaving you free to focus on <span className='text-[#218B7D] font-bold'>creating memories that will last a lifetime.</span></span> : <span>
    Na agência de viagens <span className='text-[#218B7D] font-bold'>Calicata</span>, nos orgulhamos de ser vendedores experientes de <span className='text-[#218B7D] font-bold'>pacotes turísticos</span>. Com uma paixão pela exploração e um compromisso de fornecer <span className='text-[#218B7D] font-bold'>experiências inesquecíveis</span>, nos esforçamos para adaptar cada viagem às preferências únicas de nossos clientes. Nossa equipe está comprometida em garantir arranjos de viagem perfeitos, deixando você livre para se concentrar em <span className='text-[#218B7D] font-bold'>criar memórias que durarão toda a vida.</span></span>

    return (
      <div id='nosotros' className="py-20 bg-white">
        
        <div className="flex justify-center lg:flex-row lg:justify-between lg:items-center relative">
            <img
                src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709126767/Vector_5_urtzo4.svg"
                alt=""
                className="hidden lg:flex w-[18rem] absolute left-0 top-0 z-10"
            />
            <section data-aos='zoom-in' className='h-full flex flex-col gap-5 items-center justify-center z-30'>
                <Atropos shadow={false} className='hidden sm:flex'>
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1709397552/Group_14_smyrle.svg" alt="" className='w-[30rem]'/>
                </Atropos>
                <div className='lg:hidden'>
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1709397552/Group_14_smyrle.svg" alt="" className='w-[30rem]'/>
                </div>
                <p className='text-gray-400 font-lora italic text-center font-semibold leading-loose text-[15px] lg:text-[13x] w-[70%] z-20'>{text}</p>
            </section>
            <img
                src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709126761/Vector_4_xurgbc.svg"
                alt=""
                className="hidden lg:flex w-[18rem] absolute right-0 top-0 z-10"
            />
          </div>
        </div>
    );
};

export default Nosotros;