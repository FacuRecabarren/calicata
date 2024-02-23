import React from 'react';
import EmblaCarousel from '../Carousel/EmblaCarousel';

const Testimonial = () => {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    

    return (
        <div className=' pt-28 pb-10'>
            <div className="flex flex-col justify-center items-center gap-4 pb-10">
                <h2 className="text-[#023059] text-4xl font-extrabold">Reseñas</h2>
                <h3 className="text-[#023059] opacity-80 font-semibold">Calificaciones de algunos de nuestros clientes</h3>
            </div>
            <EmblaCarousel options={OPTIONS}/>
        </div>
    );
};

export default Testimonial;