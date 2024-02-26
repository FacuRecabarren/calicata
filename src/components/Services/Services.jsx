import { useTranslation } from 'react-i18next'

const Services = () => {

  const { t } = useTranslation()

  return (
    <div id='servicios' className='pt-20 relative'>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708902725/Meteor_3_jxrgns.svg" alt="" className='absolute -z-10 hidden sm:flex sm:h-[30rem] w-full'/>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708902727/Meteor_2_bdjxwx.svg" alt="" className='lg:hidden absolute -z-10 h-[35rem]'/>
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708902727/Meteor_2_bdjxwx.svg" alt="" className='lg:hidden absolute -z-10 h-[35rem] bottom-10'/>
      <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-10 lg:gap-20'>
        <a href="">
        <section className='flex flex-col justify-center items-center gap-10 pt-5 pb-10 w-[22rem] sm:w-[35rem] shadow-md rounded-xl bg-white border-2 border-t-[2rem] border-[#218B7D] transform hover:scale-105 duration-300'>
          <div className='flex flex-col justify-center items-center gap-6 pt-10'>
            <div className='flex justify-center items-center w-40 h-40 bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708902502/Vector_3_mk9vtt.svg)] bg-contain bg-no-repeat bg-center'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708651267/Agencia%20viajes/vecteezy_3d-airplane-transparent-background-aircraft-aeroplane-3d_22950875_lqt46j.webp" alt=""/>
            </div>
            <h2 className='text-[#218B7D] font-bold text-2xl'>{t("travel")}</h2>
            <p className='px-12 text-center text-sm font-medium opacity-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nesciunt cumque</p>
          </div>
        </section>
        </a>
        <a href="">  
        <section className='flex flex-col justify-center items-center gap-10 pt-5 pb-10 w-[22rem] sm:w-[35rem] shadow-md rounded-xl bg-white border-2 border-t-[2rem] border-[#218B7D] transform hover:scale-105 duration-300'>
          <div className='flex flex-col justify-center items-center gap-6 pt-10'>
            <div className='flex justify-center items-center w-40 h-40 bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708902502/Vector_3_mk9vtt.svg)] bg-contain bg-no-repeat bg-center'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708651312/Agencia%20viajes/Group_5_2_l0wfe9.webp" alt=""/>
            </div>
            <h2 className='text-[#218B7D] font-bold text-2xl'>{t("excursions")}</h2>
            <p className='px-12 text-center text-sm font-medium opacity-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nesciunt cumque</p>
          </div>
          
        </section>
        </a>
      </div>
    </div>
  )
}

export default Services