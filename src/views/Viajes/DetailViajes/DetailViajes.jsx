import React from 'react';
import { useParams } from 'react-router-dom';
import paquetes from '../viajes.json';
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

    return (
        <div className='flex flex-col justify-center items-start'>
            <div className='relative w-full'>
                <img src={paqueteDetail.coverImage} alt="" className='object-cover h-[25rem] w-full -z-10'/>
                <div className='absolute z-10 top-[50%] left-5 flex flex-col gap-2'>
                    <p className='flex justify-start items-center gap-1 font-semibold text-white text-base font-lora italic'><FaMapMarkerAlt/>{paqueteDetail.country}</p>
                    <h2 className='text-white text-5xl font-bold'>{paqueteDetail.title}</h2>
                </div>
            </div>
            <div className='py-10 px-10 w-full flex justify-between items-start gap-16'>
                <section className='w-[40%] flex flex-col justify-center items-start gap-4'>
                    <article className='flex flex-col gap-2 w-full'>
                        <p className='font-semibold opacity-80 text-sm'>Precio total desde</p>
                        <p className='text-5xl font-bold text-[#218B7D]'>US${paqueteDetail.price}</p>
                        <button className='bg-[#FE904D] text-white font-bold py-3 mt-2 rounded-xl shadow-xl hover:bg-opacity-80 duration-300'>¡Consultar!</button>
                    </article>
                    <article className='flex flex-col gap-2 w-full'>
                        <p className='font-semibold opacity-80 text-sm'>Resumen del viaje</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-start items-center gap-2 border border-[#218B7D] rounded-r-xl w-full'>
                                <div className='bg-[#218B7D] text-xl text-white p-2'>
                                    <IoIosPeople/>
                                </div>
                                <p className='opacity-80 font-medium text-sm font-lora italic'>{paqueteDetail.persons} Adultos</p>
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
                            <div className='flex justify-start items-center gap-2 border border-[#218B7D] rounded-r-xl w-full'>
                                <div className='bg-[#218B7D] text-xl text-white p-2'>
                                    <FaPersonBiking/>
                                </div>
                                <div className='flex justify-between items-center w-full pr-3'>
                                    <p className='opacity-80 font-medium text-sm font-lora italic'>Circuitos</p>
                                    <p className='opacity-80 font-medium text-sm font-lora italic'>{paqueteDetail.circuits}</p>
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
                    <p>{paqueteDetail.description}</p>
                </section>
            </div>
        </div>
    );
};


export default DetailViajes;