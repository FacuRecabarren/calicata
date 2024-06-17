import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GiMountains } from "react-icons/gi";


const TravelAr = () => {

    const { t, i18n } = useTranslation()
    const [selectedTheme, setSelectedTheme] = useState(null);


    useEffect(() => {
        window.scrollTo(0, 0);
        const selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
            i18n.changeLanguage(selectedLanguage);
        }
    }, []); // Run only once on component mount

    const temas = [
        {
            id: 1,
            name: "Argentina",
            icono: <GiMountains />
        },
        {
            id: 2,
            name: <span>Mendoza</span>,
            icono: <GiMountains />
        },
    ]

    const ideasByLanguage = {
        'en': [
            {
                id: 1,
                image: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1711846168/night-lights-road-tower-wallpaper-preview_qvifcn.jpg',
                description: "Travel in Argentina",
                target: 1,
                link: "travelargentina"
            },
            {
                id: 2,
                image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709926535/foto-de-la-bodega-1024x683-1_v4pg0y.jpg',
                description: "Mendoza",
                target: 2,
                link: "mendoza"
            },
        ],
        'es': [
            {
                id: 1,
                image: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1711846168/night-lights-road-tower-wallpaper-preview_qvifcn.jpg',
                description: "Viajá por Argentina",
                target: 1,
                link: "travelargentina"
            },
            {
                id: 2,
                image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709926535/foto-de-la-bodega-1024x683-1_v4pg0y.jpg',
                description: "Mendoza",
                target: 2,
                link: "mendoza"
            },
        ],
        'port': [
            {
                id: 1,
                image: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1711846168/night-lights-road-tower-wallpaper-preview_qvifcn.jpg',
                description: "Viajar na Argentina",
                target: 1,
                link: "travelargentina"
            },
            {
                id: 2,
                image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709926535/foto-de-la-bodega-1024x683-1_v4pg0y.jpg',
                description: "Mendoza",
                target: 2,
                link: "mendoza"
            },
        ],
    };

    const ideas = ideasByLanguage[i18n.language] || ideasByLanguage['en'];

    const handleThemeClick = (theme) => {
        setSelectedTheme(theme);
      };
      
  return (
    <div>
        <div className='h-[30rem] relative flex flex-col justify-center items-center gap-2'>
            <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1718402170/emilio-lujan-OKWAtnEfN4M-unsplash_1_rhldia.jpg" alt="" className='w-full h-full object-cover object-center absolute top-0 -z-10 brightness-75'/>
            <h1 id='title' className='text-5xl lg:text-7xl text-[#ffffff] font-extrabold'>{t("argentina")}</h1>
            <p className='hidden lg:block absolute bottom-5 left-10 text-[#FCCC71] text-xl cursor-default uppercase'><Link to="/" className='z-50 text-white hover:text-[#bcbec7] duration-300 hover:underline'>{t("home")}</Link> / {t("events")}</p>
        </div>
        <section className='py-10 px-20 flex flex-col justify-center items-center gap-10 shadow-xl'>
            <Carousel
            opts={{
                align: "start",
            }}
            className="lg:w-[50rem] w-full h-full flex justify-center items-center gap-10"
            >
                <CarouselContent className='m-0'>
                    {temas.map((tema) => (
                    <CarouselItem key={tema.id} className="basis-1/2 p-0 w-[10rem]">
                        <Card className='bg-white flex justify-center items-center shadow-none border-none rounded-none'>
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
                <CarouselPrevious className='lg:ml-28 text-[#ffffff] w-10 h-10 bg-[#218B7D] shadow-xl border-[#218B7D] hover:bg-[#218b7d58] duration-300'/>
                <CarouselNext className='lg:mr-28 text-[#ffffff] w-10 h-10 bg-[#218B7D] shadow-xl border-none border-[#218B7D] hover:bg-[#218b7d58] duration-300'/>
            </Carousel>
            {selectedTheme !== null && (
                <button onClick={() => setSelectedTheme(null)} className='bg-[#218B7D] py-2 px-4 rounded-xl text-white font-bold hover:bg-[#218b7d58] duration-300'>{t("filter")}</button>
            )}
        </section>
        {selectedTheme === null && (
            <section className='flex justify-center items-center gap-5 flex-wrap py-10 px-10 bg-[#fe914d43]'>
                {ideas.map(idea => (
                    <div key={idea.id} className='group/item relative flex justify-center items-center lg:hover:scale-105 duration-500'>
                        <img src={idea.image} alt="" className='w-[20rem] h-[20rem] object-cover object-top shadow-lg group/edit lg:group-hover/item:grayscale duration-500'/>
                        <h3 className='absolute top-0 bg-[#218B7D] w-full text-center py-2 text-lg font-semibold text-white'>{idea.description}</h3>
                        <a href={`/argentina/${idea.link}`} className='cursor-alias invisible lg:group/edit group-hover/item:visible absolute flex flex-col justify-center items-center gap-2 bg-opacity-60 bg-[#218B7D] p-10 rounded-full'>
                            <p className='flex justify-center items-center gap-2 font-bold text-white'>{t("consult")}</p>
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
                <div key={idea.id} className='group/item relative flex justify-center items-center lg:hover:scale-105 duration-500'>
                    <img src={idea.image} alt="" className='w-[20rem] h-[30rem] object-cover object-top shadow-lg group/edit lg:group-hover/item:grayscale duration-500'/>
                    <h3 className='absolute top-0 bg-[#218B7D] w-full text-center py-2 text-lg font-semibold text-white'>{idea.description}</h3>
                    <a href={`/argentina/${idea.link}`} className='cursor-alias invisible group/edit lg:group-hover/item:visible absolute flex flex-col justify-center items-center gap-2 bg-opacity-60 bg-[#218B7D] p-10 rounded-full'>
                        <p className='flex justify-center items-center gap-2 font-bold text-white'>{t("consult")}</p>
                    </a>
                </div>
              ))}
          </section>
        )}
    </div>
  )
}

export default TravelAr