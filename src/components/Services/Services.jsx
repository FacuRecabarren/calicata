import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  const { t } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 3000});
    Aos.refresh();
  },[])

  return (
    <div id='servicios' className='pt-20 relative bg-white lg:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709125624/Group_13_1_vgyvfn.svg)] bg-cover bg-no-repeat bg-bottom bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709083896/Group_13_zsavu4.svg)]'>
      <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-10 lg:gap-10 px-10'>
        <a data-aos='fade-up' href="/travel">
          <section className='flex flex-col justify-center items-center gap-10 pt-5 pb-10 shadow-2xl rounded-xl bg-white transform hover:scale-105 duration-300'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <div className='flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709305731/Tu_Historia_Promo_en_Compras_Online_Ilustrado_Lila-modified_ltriho.webp" alt=""/>
              </div>
              <h2 className='text-[#218B7D] border-b-4 border-b-[#218B7D] rounded-lg px-4 py-2 font-bold text-2xl'>{t("travel")}</h2>
              <p className='px-12 text-center text-sm font-medium opacity-50 font-lora italic'>{t("travelInfo")}</p>
            </div>
          </section>
        </a>
        <a data-aos='fade-up' href="/excursions">  
          <section className='flex flex-col justify-center items-center gap-10 pt-5 pb-10 shadow-2xl rounded-xl bg-white transform hover:scale-105 duration-300'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <div className='flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709305757/Tu_Historia_Promo_en_Compras_Online_Ilustrado_Lila_2_-modified_njsydp.webp" alt=""/>
              </div>
              <h2 className='text-[#218B7D] border-b-4 border-b-[#218B7D] rounded-lg px-4 py-2 font-bold text-2xl'>{t("excursions")}</h2>
              <p className='px-12 text-center text-sm font-medium opacity-50 font-lora italic'>{t("excursionsInfo")}</p>
            </div>
          </section>
        </a>
        <a data-aos='fade-up' href="/events">
          <section className='flex flex-col justify-center items-center gap-10 pt-5 pb-10 shadow-2xl rounded-xl bg-white transform hover:scale-105 duration-300'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <div className='flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709305726/Tu_Historia_Promo_en_Compras_Online_Ilustrado_Lila_1_-modified_msoioy.webp" alt=""/>
              </div>
              <h2 className='text-[#218B7D] border-b-4 border-b-[#218B7D] rounded-lg px-4 py-2 font-bold text-2xl'>{t("events")}</h2>
              <p className='px-12 text-center text-sm font-medium opacity-50 font-lora italic'>{t("eventsInfo")}</p>
            </div>
          </section>
        </a>
      </div>
    </div>
  )
}

export default Services