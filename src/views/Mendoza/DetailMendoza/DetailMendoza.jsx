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
                <h2 id='title' className='text-white text-5xl font-bold absolute text-center w-full z-10 top-[50%]'>{ideaDetail.description.toUpperCase()}</h2>
            </div>
            <div className='py-10 px-10 w-full flex flex-col justify-center items-center gap-10'>
                <h3 className='text-center w-[80%]'>{ideaDetail.text}</h3>
                <div className='w-full h-full'>
                {ideaDetail.paquetes.map(paquete =>(
                    <div key={paquete.title} className='w-[20rem] h-[25rem] flex flex-col justify-between rounded-xl shadow-xl'>
                        <div className='flex flex-col'>
                            <img src={paquete.image} alt="" className='rounded-t-xl'/>
                            <div className='pt-2 px-2'>
                                <h2 className='text-xl text-[#218B7D] font-semibold'>{paquete.title}</h2>
                                <p className='text-sm opacity-80'>{paquete.description}</p>
                            </div>
                        </div>
                        <button onClick={() => handleConsultClick(paquete)} className='flex justify-center items-center bg-[#218B7D] py-2 text-lg font-semibold text-white rounded-b-xl'>Consultar</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};


export default DetailMendoza;