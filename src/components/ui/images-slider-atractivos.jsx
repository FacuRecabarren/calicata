import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export const AtractivosSlider = ({
  atractivos,
  children,
  autoplay = true,
 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleConsultClick = (idea) => {
    
    const message = `Hola, ¿cómo están? Me gustaría tener más información sobre el paquete "${atractivos[currentIndex].msgWpp}"`;
  
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/+5492612457513?text=${encodedMessage}`;

    window.location.href = whatsappLink;
};

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === atractivos.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = atractivos.map((promo) => {
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
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .5,
      },
    },
    upExit: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    downExit: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div className="h-full flex flex-col justify-center items-center relative">
      {areImagesLoaded && (
        <AnimatePresence className='w-full h-full'>
            <motion.img
                key={currentIndex}
                src={loadedImages[currentIndex]}
                initial="initial"
                animate="visible"
                exit={"downExit"}
                variants={slideVariants}
                className="h-[25rem] w-full object-cover object-center shadow-xl"
            />
            <div className="text-white bg-black bg-opacity-80 py-5 px-5 z-10 flex bottom-0 justify-start items-center gap-4 w-full absolute">
              <p className="text-2xl font-extrabold text-center rounded-xl">{atractivos[currentIndex].title}</p>
              <button onClick={handleConsultClick} className="flex justify-center items-center gap-2 py-2 px-4 font-bold rounded-xl text-white hover:bg-opacity-80 border-4 border-white hover:bg-[#218B7D] duration-500">Ver detalles <FaExternalLinkAlt/></button>
            </div>
        </AnimatePresence>
      )}
      {areImagesLoaded && children}
    </div>
  );
};