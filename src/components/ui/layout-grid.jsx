import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (card) => {
    setSelected(selected === card ? null : card);
  };

  return (
    <div className="w-full h-full grid grid-cols-2 gap-2">
      {cards.map((card, i) => (
        <div key={i} className="w-full h-full relative">
          <motion.div
            onClick={() => handleClick(card)}
            className="rounded-xl h-[18rem] w-full cursor-pointer hover:opacity-80 duration-300"
            layout
          >
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="relative">
              <motion.img
                src={selected}
                alt="selected"
                className="w-[45rem] h-[30rem]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              />
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-0 right-0 font-bold text-white bg-[#FE904D] py-3 px-4 rounded-bl-xl shadow-xl hover:bg-opacity-80 duration-300"
                onClick={() => setSelected(null)}
              >
                X
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card}
      onLoad={() => setLoaded(true)}
      className={`object-cover object-center absolute transition duration-500 h-[18rem] w-full rounded-xl ${
        loaded ? "blur-none" : "blur-md"
      }`}
      alt="thumbnail"
    />
  );
};
