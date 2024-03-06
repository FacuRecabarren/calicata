import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export const AtractivosSlider2 = ({
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

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div className="w-full flex flex-col justify-center items-center rounded-xl">
      {areImagesLoaded && (
        <AnimatePresence className='w-full rounded-xl'>
            <motion.img
                key={currentIndex}
                src={loadedImages[currentIndex]}
                initial="initial"
                animate="visible"
                exit={"downExit"}
                variants={slideVariants}
                className="h-[26rem] w-full object-cover object-center rounded-xl shadow-xl"
            />
            <div className="text-white z-20 flex flex-col justify-center items-center gap-4 w-full absolute">
              <p className="text-lg font-semibold text-center bg-black bg-opacity-90 py-2 px-4 rounded-xl">{atractivos[currentIndex].title}</p>
              <button onClick={handleConsultClick} className="flex justify-center items-center gap-2 bg-[#FCCC71] py-2 px-4 font-bold rounded-xl text-black hover:bg-opacity-80 border-4 border-[#FCCC71] duration-500">Consultar <FaExternalLinkAlt/></button>
            </div>
        </AnimatePresence>
      )}
      {areImagesLoaded && children}
    </div>
  );
};