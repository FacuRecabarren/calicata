import React from 'react';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {

    const { t } = useTranslation()

    const OPTIONS = { loop: true }
    

    return (
        <div id='testimonios' className='pt-20 pb-10 px-5'>
            <div className="flex flex-col justify-center items-center gap-4 pb-10">
                <h2 className="text-[#023059] text-4xl font-extrabold">{t("reviews")}</h2>
                <h3 className="text-[#023059] opacity-80 font-semibold">{t("ratings")}</h3>
            </div>
            <EmblaCarousel options={OPTIONS}/>
        </div>
    );
};

export default Testimonial;