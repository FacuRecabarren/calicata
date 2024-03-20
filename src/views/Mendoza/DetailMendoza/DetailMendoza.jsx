import React from 'react';
import { useParams } from 'react-router-dom';
import ideas from '../ideas.json';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPersonBiking } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { LayoutGrid } from '@/components/ui/layout-grid';
import { IoBedOutline, IoMoonOutline } from "react-icons/io5";
import { MendozaDetailSlider } from '@/components/ui/images-slider-mendoza-detail';

const DetailMendoza = () => {
    const { id } = useParams(); // Obtener el id del paquete de la URL
    const ideaDetail = ideas.find(idea => idea.id === parseInt(id)); // Buscar el paquete por id

    if (!ideaDetail) {
        return <div>Paquete no encontrado.</div>;
    }

    const handleConsultClick = (idea) => {
    
        const message = `Hola, ¿cómo están? Me gustaría tener más información sobre el paquete "${idea.title}"`;
      
        const encodedMessage = encodeURIComponent(message);
    
        const whatsappLink = `https://wa.me/+5492612457513?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    return (
        <div className='flex flex-col justify-center items-start'>
            <div className='relative w-full'>
                <MendozaDetailSlider images={ideaDetail}/>
                <h2 id='title' className='text-white text-5xl font-bold absolute text-center w-full z-10 top-[50%] px-5 sm:px-0'>{ideaDetail.description.toUpperCase()}</h2>
            </div>
            <div className='py-10 px-10 w-full flex flex-col justify-center items-center gap-16'>
                <h2 className='relative text-center text-lg font-lora italic font-semibold opacity-80 w-[80%] pb-8 flex flex-col justify-center items-center'>{ideaDetail.text}
                    <span className="absolute bottom-2 w-[80%] h-[3px] bg-[#218B7D]"></span>
                    <span className="absolute bottom-0 w-[60%] h-[2px] bg-[#218B7D]"></span> 
                </h2>
                <div className='w-full h-full flex justify-evenly flex-wrap'>
                {ideaDetail.paquetes.map(paquete =>(
                    <div onClick={() => handleConsultClick(paquete)} key={paquete.title} className='flex flex-col justify-between rounded-xl shadow-xl hover:scale-[1.01] duration-300 cursor-pointer my-5'>
                        <div className='flex flex-col w-[26rem] h-[25rem]'>
                            <img src={paquete.image} alt="" className='rounded-t-xl h-[17rem]'/>
                            <div className='pt-5 h-32 px-2 bg-gray-100'>
                                <h2 className='text-xl text-[#218B7D] font-semibold'>{paquete.title}</h2>
                                <p className='text-sm opacity-80'>{paquete.description}</p>
                            </div>
                        </div>
                        <button className='flex justify-center items-center bg-[#218B7D] py-2 text-lg font-semibold text-white rounded-b-xl hover:bg-opacity-80 duration-300'>Consultar</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};


export default DetailMendoza;