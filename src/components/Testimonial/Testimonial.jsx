import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel2 from '../Carousel2/Carousel2';

const Testimonial = () => {

    const { t } = useTranslation()

    const OPTIONS = { loop: true }
    

    return (
        <div id='testimonios' className='pt-20 pb-10 px-5'>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-[#218B7D] text-4xl font-extrabold">{t("reviews")}</h2>
                <h3 className="text-[#218B7D] opacity-80 font-semibold">{t("ratings")}</h3>
            </div>
            <Carousel2/>
        </div>
    );
};

export default Testimonial;