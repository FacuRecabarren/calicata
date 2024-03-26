import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ideas from '../ideas.json';
import ideasEn from '../ideas-en.json'
import ideasPort from '../ideas-port.json'
import { MendozaDetailSlider } from '@/components/ui/images-slider-mendoza-detail';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DetailMendoza = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleLanguageChange = () => {
          setLanguage(i18n.language);
        };
    
        i18n.on('languageChanged', handleLanguageChange);
    
        return () => {
          i18n.off('languageChanged', handleLanguageChange);
        };
      }, [i18n]);


    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);


    const { id } = useParams(); // Obtener el id del paquete de la URL
    const ideaDetail = ideas.find(idea => idea.id === parseInt(id)); // Buscar el paquete por id
    const ideaEnDetail = ideasEn.find(idea => idea.id === parseInt(id));
    const ideaPortDetail = ideasPort.find(idea => idea.id === parseInt(id));

    if (!ideaDetail) {
        return <div>Paquete no encontrado.</div>;
    }

    if (!ideaEnDetail) {
        return <div>Package not found.</div>;
    }
    
    if (!ideaPortDetail) {
        return <div>Paquete no encontrado.</div>;
    }

    const handleConsultClick = (idea) => {
    
        let message;
         if(i18n.language === 'en'){
            message = `Hello, how are you? I would like to have more information about the package "${paquete.title}"`;
        }else if(i18n.language === 'port'){
            message = `Olá, como você está? Gostaria de ter mais informações sobre o pacote "${paquete.title}"`;
        } else if(i18n.language === 'es'){
            message = `Hola, ¿cómo están? Me gustaría tener más información sobre el paquete "${paquete.title}"`;
        }
      
        const encodedMessage = encodeURIComponent(message);
    
        const whatsappLink = `https://wa.me/+5492612457513?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    return (
        <div className='flex flex-col justify-center items-start'>
            <div className='relative w-full'>
                <MendozaDetailSlider images={ideaDetail}/>
                <h2 id='title' className='text-white text-5xl font-bold absolute text-center w-full z-10 top-[50%] px-5 sm:px-0'>{ideaDetail.description.toUpperCase()}</h2>
                <p className='hidden lg:block absolute bottom-5 left-10 text-[#FCCC71] text-xl cursor-default uppercase'><Link to="/mendoza" className='z-50 text-white hover:text-[#bcbec7] duration-300 hover:underline'>MENDOZA</Link> / {i18n.language === 'es' && ideaDetail.description}
                    {i18n.language === 'en' && ideaEnDetail.description}
                    {i18n.language === 'port' && ideaPortDetail.description}</p>
            </div>
            <div className='py-10 px-10 w-full flex flex-col justify-center items-center gap-16'>
                <h2 className='relative text-center text-lg font-lora italic font-semibold opacity-80 w-[80%] pb-8 flex flex-col justify-center items-center'>
                    {i18n.language === 'es' && ideaDetail.text}
                    {i18n.language === 'en' && ideaEnDetail.text}
                    {i18n.language === 'port' && ideaPortDetail.text}
                    <span className="absolute bottom-2 w-[80%] h-[3px] bg-[#218B7D]"></span>
                    <span className="absolute bottom-0 w-[60%] h-[2px] bg-[#218B7D]"></span> 
                </h2>
                <div className='w-full h-full flex justify-evenly flex-wrap'>
                    {i18n.language === 'es' && ideaDetail.paquetes.map(paquete =>(
                        <div onClick={() => handleConsultClick(paquete)} key={paquete.title} className='flex flex-col justify-between rounded-xl shadow-xl hover:scale-[1.01] duration-300 cursor-default my-5'>
                            <div className='flex flex-col w-[21rem] sm:w-[26rem] h-[25rem]'>
                                <img src={paquete.image} alt="" className='rounded-t-xl h-[17rem]'/>
                                <div className='pt-5 h-32 px-2 bg-gray-100'>
                                    <h2 className='text-xl text-[#218B7D] font-semibold'>{paquete.title}</h2>
                                    <p className='text-sm opacity-80'>{paquete.description}</p>
                                </div>
                            </div>
                            <button className='flex justify-center items-center bg-[#218B7D] py-2 text-lg font-semibold text-white rounded-b-xl hover:bg-opacity-80 duration-300'>Consultar</button>
                        </div>
                    ))}
                    {i18n.language === 'port' && ideaPortDetail.paquetes.map(paquete =>(
                        <div onClick={() => handleConsultClick(paquete)} key={paquete.title} className='flex flex-col justify-between rounded-xl shadow-xl hover:scale-[1.01] duration-300 cursor-default my-5'>
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
                    {i18n.language === 'en' && ideaEnDetail.paquetes.map(paquete =>(
                        <div onClick={() => handleConsultClick(paquete)} key={paquete.title} className='flex flex-col justify-between rounded-xl shadow-xl hover:scale-[1.01] duration-300 cursor-default my-5'>
                            <div className='flex flex-col w-[26rem] h-[25rem]'>
                                <img src={paquete.image} alt="" className='rounded-t-xl h-[17rem]'/>
                                <div className='pt-5 h-32 px-2 bg-gray-100'>
                                    <h2 className='text-xl text-[#218B7D] font-semibold'>{paquete.title}</h2>
                                    <p className='text-sm opacity-80'>{paquete.description}</p>
                                </div>
                            </div>
                            <button className='flex justify-center items-center bg-[#218B7D] py-2 text-lg font-semibold text-white rounded-b-xl hover:bg-opacity-80 duration-300'>More info</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default DetailMendoza;