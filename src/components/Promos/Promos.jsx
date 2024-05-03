import React from 'react';
import { PromosSlider } from "../ui/images-slider-promos";
import promos from '../../utils/promos.json'
import { motion } from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Promos = () => {

    useEffect(()=>{
        Aos.init({duration: 3000});
        Aos.refresh();
      },[])

    return (
        <div className='pt-10' data-aos='fade-up'>
             <section className="w-full h-[35rem] lg:flex justify-center">
           <PromosSlider promos={promos}>
               <motion.div
                 initial={{
                   opacity: 0,
                   y: -80,
                 }}
                 animate={{
                   opacity: 1,
                   y: 0,
                 }}
                 transition={{
                   duration: 1,
                 }}
                 className="z-50 flex flex-col justify-center items-center w-full"
               >
                 {/* Contenido adicional dentro del slider */}
               </motion.div>
             </PromosSlider>
         </section>
        </div>
    );
};

export default Promos;