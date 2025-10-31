import React from "react";

const SliderSlide = ({ image, title, subtitle }) => {
  return (
    <div className="relative max-w-full max-h-[212px] h-[212px] lg:max-w-[530px] lg:max-h-[320px] lg:w-[530px] lg:h-[320px] overflow-hidden">
      <img
        src={`${image}`}
        alt=""
        className="object-cover w-full h-full max-w-full max-h-[212px] lg:max-w-[530px] lg:max-h-[320px]"
      />
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      <div className="absolute left-8 bottom-8 flex flex-col z-10">
        <h5 className="text-[24px] md:text-[32px] leading-[40px] md:leading-[70px] text-white">
          {title}
        </h5>

        <div className="flex items-center gap-2">
          <div className="dot"></div>
          <span className="neue-montreal-text text-[10px] md:text-xs uppercase text-white">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderSlide;
