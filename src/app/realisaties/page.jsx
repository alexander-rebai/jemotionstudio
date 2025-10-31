"use client";

import { useState, useEffect } from "react";
import DotText from "@/components/DotText";
import ArrowButton from "@/components/ArrowButton";
import ImageItem from "@/components/ImageItem";

export default function Page() {
  const images = [
    "/images/realisaties/imgg.jpg",
    "/images/realisaties/img2.jpg",
    "/images/realisaties/img3.jpg",
    "/images/realisaties/img4.jpg",
    "/images/realisaties/img5.jpg",
    "/images/realisaties/img6.jpg",
    "/images/realisaties/img7.jpg",
    "/images/realisaties/img8.jpg",
    "/images/realisaties/img9.jpg",
    "/images/realisaties/img10.jpg",
    "/images/realisaties/img11.jpg",
    "/images/realisaties/img12.jpg",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const isOpen = selectedImageIndex !== null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => 
          prev === 0 ? images.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => 
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  function handlePrevious() {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function handleNext() {
    setSelectedImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <>
      <div className="flex lg:pr-[64] lg:pl-[64] pl-[16] pr-[16] max-lg:flex-col container mx-auto">
        <div className="lg:pt-[260] pt-[184] max-w-[933] ">
          <DotText text={"Eerdere projecten"} />
          <h1>
            Onze realisaties zeggen meer dan{" "}
            <span className="italic">woorden</span>
          </h1>
        </div>
        <div className="lg:pt-[388] pt-[36] 2xl:max-w-[100%] 2xl:w-[50%] 2xl:flex 2xl:justify-center">
          <p className="lg:max-w-[310] max-w-[280] neue-montreal-text md:text-[14px] text-[12px] lg:leading-[22px] leading-[160%] lg:flex lg:justify-center">
            Laat je inspireren door de projecten die we al mochten realiseren,
            van energiezuinige upgrades tot volledige totaalrenovaties met oog
            voor detail en hoogwaardige afwerking.
          </p>
        </div>
      </div>
      <div className="lg:pt-[158] lg:pl-[64] lg:pr-[64] pl-[16] pr-[16] pt-[100] container mx-auto">
        <h4 className="text-textLight">
          Elke woning is uniek, elke klant heeft een eigen verhaal.
        </h4>
        <hr className="lg:mt-[48] mt-[28] text-line" />
        <div className="lg:pt-[64] pt-[36] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-[24] gap-[16]">
          {images.map((image, index) => (
            <ImageItem 
              image={image} 
              key={index} 
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
        <p className="mt-4 text-white">Totaalproject Destelbergen |<span className="text-textLight"> energetische renovatie</span></p>
        <div className="lg:pt-[76] pt-[54] lg:pb-[140] pb-[100] flex justify-center">
          <ArrowButton text="bekijk meer" width="215px" />
        </div>
      </div>

      {/* Lightbox Modal with Navigation */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition z-10"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close"
          >
            ×
          </button>
          
          {/* Previous Button */}
          <button
            className="absolute left-4 text-white text-5xl hover:text-gray-300 transition z-10 p-4"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-5xl hover:text-gray-300 transition z-10 p-4"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <img
            src={images[selectedImageIndex]}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
