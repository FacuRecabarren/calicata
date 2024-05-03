import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const PromosSlider = ({
  promos,
  children,
  autoplay = true,
  direction = "up",
 
}) => {

  console.log(promos);

  const { i18n } = useTranslation();

  const handleConsultClick = () => {
    
    let message;
     if(i18n.language === 'en'){
        message = `Hello, how are you? I would like to have more information about the package "${promos[currentIndex].description}"`;
    }else if(i18n.language === 'port'){
        message = `Olá, como você está? Gostaria de ter mais informações sobre o pacote "${promos[currentIndex].description}"`;
    } else if(i18n.language === 'es'){
        message = `Hola, ¿cómo están? Me gustaría tener más información sobre el paquete "${promos[currentIndex].description}"`;
    }
  
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/+5492612457513?text=${encodedMessage}`;

    window.location.href = whatsappLink;
};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === promos.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = promos.map((promo) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = promo.image;
        img.onload = () => resolve(promo.image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5500);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const { t } = useTranslation()

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div className="h-full w-full relative flex flex-col justify-center items-center">
      {areImagesLoaded && (
        <AnimatePresence className='w-full'>
            <motion.img
                key={currentIndex}
                src={loadedImages[currentIndex]}
                initial="initial"
                animate="visible"
                exit={direction === "up" ? "upExit" : "downExit"}
                variants={slideVariants}
                className="image h-full w-full absolute inset-0 object-cover brightness-[0.4]"
            />
            <div className=" text-white z-20 flex flex-col justify-center items-center gap-4 w-full">
              <p className="text-4xl font-black text-center">{promos[currentIndex].description}</p>
              <button onClick={handleConsultClick} className="cursor-pointer flex justify-center items-center gap-2 bg-[#FE904D] py-2 px-4 font-bold rounded-xl text-WHITE hover:text-white hover:bg-transparent border-4 border-[#FE904D] duration-500 ">{t("ask")}<FaExternalLinkAlt/></button>
            </div>
        </AnimatePresence>
      )}
      {areImagesLoaded && children}
    </div>
  );
};