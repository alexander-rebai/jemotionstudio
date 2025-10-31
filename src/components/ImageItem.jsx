"use client";
import { useEffect, useState } from "react";
import ArrowButton from "./ArrowButton";

const ImageItem = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
     } else {
      document.body.style.overflow = 'auto';
      }
  }, [isOpen])

  return (
    <>
      <div className="relative w-full group lg:max-h-[387px] max-h-[195px] aspect-[310/387] 2xl:max-h-none">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition duration-300"
        />
        <div className="absolute inset-0 bg-[#add800] mix-blend-multiply transition duration-300 opacity-0 group-hover:opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <ArrowButton text="afbeelding bekijken" background="#FFFFFF" onclick={() => setIsOpen(true)} />
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <img
            src={image}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImageItem;
