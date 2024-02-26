import React from 'react';
import Atropos from 'atropos/react';
import { useTranslation } from 'react-i18next';
import 'atropos/css'

const Nosotros = () => {


    const { t } = useTranslation()

    return (
      <div id='nosotros' className="pt-20">
        <div className="flex flex-col justify-center items-center gap-4 py-10">
          <h2 className="text-[#218B7D] text-4xl font-extrabold">
            ¿Quiénes somos?
          </h2>
          <h3 className="text-[#218B7D] opacity-80 font-semibold text-center px-5 lg:text-start lg:px-0">
            Lorem ipsum dolor sit amet consectetur numquam reprehenderit error
            atque delectus dolore veniam ducimus.
          </h3>
        </div>
        <div className="flex justify-center lg:flex-row lg:justify-between lg:items-center">
            <div className="relative hidden lg:flex">
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708906415/vecteezy_3d-masculino-personaje-tiene-un-idea-mientras-trabajando-en_24658855_tghna9.webp"
                    alt=""
                    className="w-[25rem]"
                />
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708907849/asset_10_3_t6zqfm.svg"
                    alt=""
                    className="absolute -z-10 w-full"
                />
            </div>
            <section className='flex flex-col items-center justify-center'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Atropos shadow={false} className="my-atropos shadow-md rounded-full">
                            <div className="h-60 w-60 rounded-full overflow-hidden border-l-8 border-[#FCCC71]">
                                <img
                                src='https://res.cloudinary.com/dfschbyq2/image/upload/v1708743323/joven-empresario-al-aire-libre_53419-7471_lgs5dd.avif'
                                alt="Imagen de Juan Emilio Elizondo"
                                className=' duration-500 object-cover w-full h-full'
                                />
                            </div>
                        </Atropos>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="text-lg font-bold text-[#218B7D] cursor-pointer hover:text-[#FCCC71] duration-300 dark:text-gray-100" href="https://www.linkedin.com/in/juan-emilio-elizondo/">
                            Martin Puebla
                            </a>
                            <p className="text-center opacity-80">{t("travelAgent")}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Atropos shadow={false} className="my-atropos shadow-md rounded-full">
                            <div className="h-60 w-60 rounded-full overflow-hidden border-l-8 border-[#FCCC71]">
                                <img
                                src='https://res.cloudinary.com/dhqudb28a/image/upload/v1697066819/lara_fd5dtn.png'
                                alt="Imagen de Lara María De Cillis"
                                className=' duration-500 w-full h-full object-cover'
                                />
                            </div>
                        </Atropos>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="text-lg font-bold text-[#218B7D] cursor-pointer hover:text-[#FCCC71] duration-300 dark:text-gray-100" href="https://www.linkedin.com/in/laradecillis/">
                            Lara María De Cillis
                            </a>
                            <p className="text-center opacity-80">{t("operation")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative hidden lg:flex">
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708906411/Group_12_xalgel.webp"
                    alt=""
                    className="w-[25rem]"
                />
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708907851/asset_10_2_1_manzjl.svg"
                    alt=""
                    className="absolute -z-10 w-full"
                />
            </div>
          </div>
        </div>
    );
};

export default Nosotros;