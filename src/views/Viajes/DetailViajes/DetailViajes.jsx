import React from 'react';
import { useParams } from 'react-router-dom';
import paquetes from '../viajes1.json';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPersonBiking } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { LayoutGrid } from '@/components/ui/layout-grid';
import { IoBedOutline, IoMoonOutline } from "react-icons/io5";

const DetailViajes = () => {
    const { id } = useParams(); // Obtener el id del paquete de la URL
    const paqueteDetail = paquetes.find(paquete => paquete.id === parseInt(id)); // Buscar el paquete por id

    if (!paqueteDetail) {
        return <div>Paquete no encontrado.</div>;
    }

    const handleConsultClick = (paquete) => {
    
        const message = `Hola, ¿cómo están? Me gustaría tener más información sobre el paquete "${paquete.title}"`;
      
        const encodedMessage = encodeURIComponent(message);
    
        const whatsappLink = `https://wa.me/+5492612457513?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    return (
        <div className='flex flex-col justify-center items-start'>
            <div className='relative w-full'>
                <img src={paqueteDetail.coverImage} alt="" className='object-cover h-[25rem] w-full -z-10 brightness-50'/>
                <div className='absolute z-10 top-[50%] sm:left-5 flex flex-col sm:justify-start sm:items-start justify-center items-center gap-2 sm:px-0 px-5'>
                    <p className='flex justify-start items-center gap-1 font-semibold text-white text-base font-lora italic'><FaMapMarkerAlt/>{paqueteDetail.country}</p>
                    <h2 className='text-white text-4xl sm:text-5xl text-center sm:text-start font-bold'>{paqueteDetail.title}</h2>
                </div>
            </div>
            <div className='py-10 px-10 w-full sm:flex sm:flex-row flex flex-col justify-between items-start gap-10 sm:gap-16'>
                <section className='w-full sm:w-[40%] flex flex-col justify-center items-start gap-4'>
                    <article className='flex flex-col gap-2 w-full'>
                        <p className='font-semibold opacity-80 text-sm'>Precio total desde</p>
                        <p className='text-5xl font-bold text-[#218B7D]'>US${paqueteDetail.price}</p>
                        <button onClick={() => handleConsultClick(paqueteDetail)} className='bg-[#FE904D] text-white font-bold py-3 mt-2 rounded-xl shadow-xl hover:bg-opacity-80 duration-300'>¡Consultar!</button>
                    </article>
                    <article className='flex flex-col gap-2 w-full'>
                        <p className='font-semibold opacity-80 text-sm'>Resumen del viaje</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-start items-center gap-2 border border-[#218B7D] rounded-r-xl w-full'>
                                <div className='bg-[#218B7D] text-xl text-white p-2'>
                                    <IoIosPeople/>
                                </div>
                                <p className='opacity-80 font-medium text-sm font-lora italic'>{paqueteDetail.persons} Personas</p>
                            </div>
                            <div className='flex justify-start items-center gap-2 border border-[#218B7D] rounded-r-xl w-full'>
                                <div className='bg-[#218B7D] text-xl text-white p-2'>
                                    <IoMoonOutline/>
                                </div>
                                <p className='opacity-80 font-medium text-sm font-lora italic'>{paqueteDetail.nights} Noches</p>
                            </div>
                        </div>
                    </article>
                    <article className='flex flex-col gap-2 w-full'>
                        <p className='font-semibold opacity-80 text-sm'>El viaje incluye</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-start items-center gap-2 border border-[#218B7D] rounded-r-xl w-full'>
                                <div className='bg-[#218B7D] text-xl text-white p-2'>
                                    <IoBedOutline/>
                                </div>
                                <div className='flex justify-between items-center w-full pr-3'>
                                    <p className='opacity-80 font-medium text-sm font-lora italic'>Alojamientos</p>
                                    <p className='opacity-80 font-medium text-sm font-lora italic'>{paqueteDetail.lodgings}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className='flex flex-col justify-center items-start gap-3 w-full'>
                    <p className='font-semibold opacity-80 text-xl'>Servicios incluidos</p>
                    <div className='flex justify-start items-center gap-3 border border-[#218B7D] rounded-r-xl w-full'>
                        <div className='bg-[#218B7D] text-xl text-white p-3'>
                            <LuCalendarClock/>
                        </div>
                        <p className='text-xl font-semibold opacity-80'>Itinerario</p>
                    </div>
                    <div className='w-full relative'>
                        <LayoutGrid cards={paqueteDetail.galleryImages} />
                    </div>
                    <div className='py-5'>
                        <p>{paqueteDetail.description}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default DetailViajes;