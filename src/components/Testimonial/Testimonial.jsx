import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel2 from '../Carousel2/Carousel2';

const Testimonial = () => {

    const { t } = useTranslation()

    const OPTIONS = { loop: true }
    

    return (
        <div id='testimonios' className='py-20 mx-0 lg:mx-10 shadow-2xl border-8 border-double border-[#ffe5b6] bg-white bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709226938/felix-rostig-UmV2wrdas-Vbq8-unsplash_pnsqqd.webp)] bg-cover bg-center bg-fixed lg:rounded-t-[20rem] lg:rounded-b-[20rem]'>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-[#FCCC71] text-4xl font-extrabold">{t("reviews")}</h2>
                <h3 className="text-[#ffffff] font-lora opacity-80 font-semibold text-center">{t("ratings")}</h3>
            </div>
            <Carousel2/>
        </div>
    );
};

export default Testimonial;