import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MdLandscape, MdMuseum } from "react-icons/md";
import { PiWineFill } from "react-icons/pi";
import { MdDirectionsBike } from "react-icons/md";
import { FaHorse, FaWater } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ideas from "./ideas.json"
import { RiGuideLine } from "react-icons/ri";


const Mendoza = () => {

    const { t, i18n } = useTranslation()
    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleConsultClick = (idea) => {
    
        const message = `Hola, ¿cómo están? Me gustaría tener más información sobre el paquete "${idea.description}"`;
      
        const encodedMessage = encodeURIComponent(message);
    
        const whatsappLink = `https://wa.me/+5492612457513?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    useEffect(() => {
        const selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
            i18n.changeLanguage(selectedLanguage);
        }
    }, []); // Run only once on component mount

    const temas = [
        {
            id: 1,
            name: <span>{t("wineries")}</span>,
            icono: <PiWineFill/>
        },
        {
            id: 2,
            name: <span>Tours</span>,
            icono: <RiGuideLine/>
        },
        {
            id: 3,
            name: <span>{t("trailRides")}</span>,
            icono: <FaHorse/>
        },
        // {
        //     id: 4,
        //     name: <span>{t("reservoirs")}</span>,
        //     icono: <FaWater/>
        // },
        // {
        //     id: 5,
        //     name: <span>{t("hills")}</span>,
        //     icono: <MdLandscape/>
        // },
        {
            id: 6,
            name: <span>{t("bike")}</span>,
            icono: <MdDirectionsBike/>
        },
    ]

    const handleThemeClick = (theme) => {
        setSelectedTheme(theme);
    }

  return (
    <div>
        <div className='h-[30rem] relative flex flex-col justify-center items-center gap-2 shadow-xl'>
            <video className='w-full h-full object-cover absolute top-0 -z-10' autoPlay muted loop>
                <source src='https://res.cloudinary.com/dreso9ye9/video/upload/v1710133486/youtube_Qtfmp2Ro_mU_1920x1080_h264_juy2ie.mp4' type="video/mp4"/>
            </video>
            <h2 id='title' className='text-5xl lg:text-7xl text-[#ffffff] font-extrabold'>MENDOZA</h2>
            <p className='mx-10 text-center lg:mx-0 text-[#ffffff] bg-[#000000] rounded-xl p-4 bg-opacity-80 font-lora italic font-bold text-base lg:text-xl'>{t("excursionsInsideInfo")}</p>
        </div>
        <section className='w-full py-20 px-5 lg:px-20 shadow-xl lg:shadow-none'>
            <div className='flex justify-center items-center gap-10'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710167985/Group_14_ntjim8.svg" alt="" className='w-[25rem] hidden lg:flex'/>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h2 className='text-3xl lg:text-4xl text-center font-bold text-[#218B7D]'>¿Por qué viajar con nosotros a Mendoza?</h2>
                    <p className='font-lora italic text-center opacity-80'>Trabajamos en crear momentos inolvidables, auténticas experiencias de viajes que se recuerden para siempre. Tours personalizados que incluyen lo mejor de cada región, teniendo en cuenta hasta el mínimo detalle.</p>
                </div>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710168796/Group_14_2_a6sydn.svg" alt="" className='w-[25rem] hidden lg:flex'/>
            </div>
        </section>
        <section className='py-20 lg:py-10 flex flex-col justify-center items-center gap-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h2 className='text-3xl lg:text-4xl px-5 text-center font-bold text-[#218B7D]'>Nuestras propuestas de viajes</h2>
                <p className='font-lora italic text-center opacity-80 w-full px-5 lg:w-[60rem]'>Siguiendo elevados protocolos para el cuidado del viajero y garantizando la devolución de los pagos de señas de viaje por fuerza mayor, simplemente lo invitamos a conocer nuestras experiencias únicas que aquí presentamos.</p>
            </div>
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full h-full flex flex-col justify-center items-center gap-10 bg-[#fccb713b] py-10 lg:shadow-xl"
            >
                <CarouselContent className='m-0'>
                    {temas.map((tema) => (
                    <CarouselItem key={tema.id} className="basis-1/2 md:basis-1/4 p-0 sm:w-[10rem] w-[3rem] flex justify-center items-center">
                        <Card className='bg-transparent flex justify-center items-center shadow-none border-none rounded-none'>
                            <CardContent className="flex flex-col gap-2 items-center justify-center p-0 cursor-pointer hover:opacity-60 duration-300">
                            <span
                                key={tema.id}
                                className={`cursor-pointer ${
                                selectedTheme === tema.id ? "border-b-2 border-[#218B7D]" : "flex flex-col justify-center items-center gap-2"
                                } flex flex-col justify-center items-center gap-2`}
                                onClick={() => handleThemeClick(tema.id)}
                            >
                                <p className='text-xl text-white bg-[#218B7D] w-10 h-10 flex justify-center items-center rounded-full'>{tema.icono}</p>
                                <h2 className='text-[#218B7D] font-bold'>{tema.name}</h2>
                            </span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='lg:ml-28 ml-20 text-[#ffffff] w-10 h-10 bg-[#218B7D] shadow-xl border-[#218B7D] hover:bg-[#218b7d58] duration-300'/>
                <CarouselNext className='lg:mr-28 mr-20 text-[#ffffff] w-10 h-10 bg-[#218B7D] shadow-xl border-none border-[#218B7D] hover:bg-[#218b7d58] duration-300'/>
                {selectedTheme !== null && (
                    <button onClick={() => setSelectedTheme(null)} className='bg-[#218B7D] py-2 px-4 rounded-xl text-white font-bold hover:bg-[#218b7d58] duration-300'>{t("filter")}</button>
                )}
            </Carousel>
        </section>
        {selectedTheme === null && (
            <section className='flex justify-center items-center gap-5 flex-wrap lg:py-10 py-0 px-5 lg:px-0 pb-10'>
                {ideas.map(idea => (
                    <Link to={`/mendoza/${idea.id}`} key={idea.id} className='group/item h-[20rem] w-[30rem] flex justify-center items-center hover:scale-[1.02] duration-300 relative rounded-xl shadow-xl'>
                        <img src={idea.image} alt="" className='absolute h-full w-full -z-10 object-cover rounded-xl filter brightness-[0.45]'/>
                        <h3 id='title' className='text-white font-bold text-center text-2xl w-full rounded-t-xl'>{idea.description.toUpperCase()}</h3>
                        <button className='cursor-alias invisible group/edit group-hover/item:visible absolute top-[60%] flex flex-col justify-center items-center gap-2 bg-opacity-60 z-10 bg-[#218B7D] py-2 px-4 rounded-full'>
                            <p className='flex justify-center items-center gap-2 font-bold text-white'>Más información</p>
                        </button>
                    </Link>
                ))}
            </section>
        )}
        {selectedTheme !== null && (
            <section className="flex justify-center items-center gap-5 flex-wrap lg:py-10 py-0 px-5 lg:px-0 pb-10">
            {ideas
              .filter((idea) => selectedTheme === null || idea.target === selectedTheme)
              .map((idea) => (
                <Link to={`/mendoza/${idea.id}`} key={idea.id} className='group/item h-[20rem] w-[30rem] flex justify-center items-center hover:scale-[1.02] duration-300 relative rounded-xl shadow-xl'>
                    <img src={idea.image} alt="" className='absolute h-full w-full -z-10 object-cover rounded-xl filter brightness-[0.45]'/>
                    <h3 id='title' className='text-white font-bold text-center text-2xl w-full rounded-t-xl'>{idea.description.toUpperCase()}</h3>
                    <button className='cursor-alias invisible group/edit group-hover/item:visible absolute top-[60%] flex flex-col justify-center items-center gap-2 bg-opacity-60 z-10 bg-[#218B7D] py-2 px-4 rounded-full'>
                        <p className='flex justify-center items-center gap-2 font-bold text-white'>Más información</p>
                    </button>
                </Link>
              ))}
          </section>
        )}
    </div>
  )
}

export default Mendoza