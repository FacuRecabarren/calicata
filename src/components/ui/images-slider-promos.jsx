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
              <a href={promos[currentIndex].link} className="cursor-pointer flex justify-center items-center gap-2 bg-[#FCCC71] py-2 px-4 font-bold rounded-xl text-black hover:text-[#FCCC71] hover:bg-transparent border-4 border-[#FCCC71] duration-500">{t("ask")}<FaExternalLinkAlt/></a>
            </div>
        </AnimatePresence>
      )}
      {areImagesLoaded && children}
    </div>
  );
};