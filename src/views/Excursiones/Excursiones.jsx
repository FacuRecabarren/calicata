import { useState } from 'react'
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
import { GiTheaterCurtains } from "react-icons/gi";
import { FaHorse, FaWater } from "react-icons/fa";


const Excursiones = () => {

    const [selectedTheme, setSelectedTheme] = useState(null);

    const temas = [
        {
            id: 1,
            name: "Bodegas",
            icono: <PiWineFill/>
        },
        {
            id: 2,
            name: "Teatros",
            icono: <GiTheaterCurtains/>
        },
        {
            id: 3,
            name: "Cabalgatas",
            icono: <FaHorse/>
        },
        {
            id: 4,
            name: "Diques",
            icono: <FaWater/>
        },
        {
            id: 5,
            name: "Cerros",
            icono: <MdLandscape/>
        },
        {
            id: 6,
            name: "Museos",
            icono: <MdMuseum/>
        },
    ]

    const ideas = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709248914/WhatsApp_Image_2024-02-29_at_11.49.50_1_pqjupj.jpg',
            target: 'Bodegas'
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709248894/WhatsApp_Image_2024-02-29_at_11.49.50_wmcvrd.jpg',
            target: 'Cabalgatas'
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Ciudades'
        },
        {
            id: 4,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Naturaleza'
        },
        {
            id: 5,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Playa'
        },
        {
            id: 6,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171614/WhatsApp_Image_2024-02-28_at_12.50.22_x6rxtz.jpg',
            target: 'Playa'
        },
        {
            id: 7,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171617/WhatsApp_Image_2024-02-28_at_17.53.43_clgh2i.jpg',
            target: 'Playa'
        },
        {
            id: 8,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171614/WhatsApp_Image_2024-02-28_at_12.50.21_1_oxxukj.jpg',
            target: 'Playa'
        },
        {
            id: 9,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Familia'
        },
        {
            id: 10,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171617/WhatsApp_Image_2024-02-28_at_12.50.18_qfkosu.jpg',
            target: 'Familia'
        },
    ]

    const handleThemeClick = (theme) => {
        setSelectedTheme(theme);
    }

  return (
    <div>
        <div className='h-[30rem] relative flex flex-col justify-center items-center gap-2'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709250556/39-facts-about-mendoza-1688522494_te42ax.jpg" alt="" className='w-full h-full object-cover absolute top-0 -z-10'/>
            <h2 id='title' className='text-7xl text-[#FCCC71] font-extrabold'>EXCURSIONES</h2>
            <p className='text-[#ffffff] bg-[#218B7D] rounded-xl p-2 bg-opacity-45 font-lora italic font-bold text-xl'>Descubre las diferentes excrusiones que tenemos para ti</p>
        </div>
        <section className='py-10 px-20 h-[10rem] flex flex-col gap-10 shadow-xl'>
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full h-full flex justify-center items-center gap-10"
            >
                <CarouselContent className='m-0'>
                    {temas.map((tema) => (
                    <CarouselItem key={tema.id} className="md:basis-1/2 lg:basis-1/6 p-0 w-[10rem]">
                        <Card className='bg-white flex justify-center items-center shadow-none border-none rounded-none'>
                            <CardContent className="flex flex-col gap-2 items-center justify-center p-0 cursor-pointer hover:opacity-60 duration-300">
                            <span
                                key={tema.id}
                                className={`cursor-pointer ${
                                selectedTheme === tema.name ? "border-b-2 border-[#218B7D]" : "flex flex-col justify-center items-center gap-2"
                                } flex flex-col justify-center items-center gap-2`}
                                onClick={() => handleThemeClick(tema.name)}
                            >
                                <span className='text-xl text-white bg-[#218B7D] p-3 rounded-full'>{tema.icono}</span>
                                <h2 className='text-[#218B7D] font-bold'>{tema.name}</h2>
                            </span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='ml-28 text-[#ffffff] w-10 h-10 bg-[#218B7D] shadow-xl border-[#218B7D] hover:bg-[#218b7d58] duration-300'/>
                <CarouselNext className='mr-28 text-[#ffffff] w-10 h-10 bg-[#218B7D] shadow-xl border-none border-[#218B7D] hover:bg-[#218b7d58] duration-300'/>
            </Carousel>
        </section>
        {selectedTheme === null && (
            <section className='flex justify-center items-center gap-5 flex-wrap py-10 px-10 bg-[#fe914d43]'>
                {ideas.map(idea => (
                    <div key={idea.id} className='group/item relative flex justify-center items-center hover:scale-105 duration-500'>
                        <img src={idea.image} alt="" className='w-[20rem] h-[30rem] object-cover object-top shadow-lg group/edit group-hover/item:grayscale duration-500'/>
                        <a href="" className='cursor-alias invisible group/edit group-hover/item:visible absolute flex flex-col justify-center items-center gap-2 bg-opacity-60 bg-[#218B7D] p-10 rounded-full'>
                            <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708744509/WhatsApp_icon.png_yfozry.webp" alt="" className='w-12 h-12 '/>
                            <p className='flex justify-center items-center gap-2 font-bold text-white'>Consultar</p>
                        </a>
                    </div>
                ))}
            </section>
        )}
        {selectedTheme !== null && (
            <section className="flex justify-center items-center gap-5 flex-wrap py-10 px-10 bg-[#fe914d43]">
            {ideas
              .filter((idea) => selectedTheme === null || idea.target === selectedTheme)
              .map((idea) => (
                    <div key={idea.id} className='group/item relative flex justify-center items-center hover:scale-105 duration-500'>
                        <img src={idea.image} alt="" className='w-[20rem] h-[30rem] object-cover object-top shadow-lg group/edit group-hover/item:grayscale duration-500'/>
                        <a href="" className='cursor-alias invisible group/edit group-hover/item:visible absolute flex flex-col justify-center items-center gap-2 bg-opacity-60 bg-[#218B7D] p-10 rounded-full'>
                            <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708744509/WhatsApp_icon.png_yfozry.webp" alt="" className='w-12 h-12 '/>
                            <p className='flex justify-center items-center gap-2 font-bold text-white'>Consultar</p>
                        </a>
                    </div>
              ))}
          </section>
        )}
    </div>
  )
}

export default Excursiones