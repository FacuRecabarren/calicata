import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const TravelSlider = ({
  imagesTravel,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imagesTravel.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imagesTravel.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = imagesTravel.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
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
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {}, []);

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
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div className="w-full h-[30rem]">
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={"exit"}
            variants={slideVariants}
            className="image h-full -z-10 w-full absolute object-cover object-center rounded-xl"
          />
          <div className="z-10 flex flex-col justify-center items-center gap-4 w-full">
              <p className="text-2xl text-white font-bold text-center w-full bg-[#FE904D] py-2 rounded-t-xl shadow-xl">VIAJÁ CON NOSOTROS</p>
              <a href="/travel" className="w-[10rem] lg:w-[15rem] text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 right-0 py-4 px-8 font-bold rounded-br-xl rounded-tl-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500">Viajes</a>
              <a href="/events" className="w-[10rem] lg:w-[15rem] text-xl flex justify-center items-center gap-2 bg-[#FE904D] absolute bottom-0 left-0 py-4 px-8 font-bold rounded-bl-xl rounded-tr-xl text-white hover:text-white hover:bg-opacity-50 border-4 border-[#FE904D] duration-500">Eventos</a>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};