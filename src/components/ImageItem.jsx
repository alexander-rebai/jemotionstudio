"use client";
import ArrowButton from "./ArrowButton";

const ImageItem = ({ image, onClick }) => {
  return (
    <div className="relative w-full group lg:max-h-[387px] max-h-[195px] aspect-[310/387] 2xl:max-h-none">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover transition duration-300"
      />
      <div className="absolute inset-0 bg-[#add800] mix-blend-multiply transition duration-300 opacity-0 group-hover:opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <ArrowButton text="afbeelding bekijken" background="#FFFFFF" onclick={onClick} />
      </div>
    </div>
  );
};

export default ImageItem;
