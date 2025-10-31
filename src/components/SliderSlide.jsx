import React from "react";

const SliderSlide = ({ image, title, subtitle }) => {
  return (
    <div className="relative max-w-full max-h-[212px] h-[212px] lg:max-w-[530px] lg:max-h-[320px] lg:w-[530px] lg:h-[320px] overflow-hidden">
      <img
        src={`${image}`}
        alt=""
        className="object-cover w-full h-full max-w-full max-h-[212px] lg:max-w-[530px] lg:max-h-[320px]"
        style={{
          background:
            "linear-gradient(202.04deg, rgba(0, 0, 0, 0) 37.72%, rgba(0, 0, 0, 0.6) 83.59%)",
        }}
      />
      <div className="absolute left-8 bottom-8 flex flex-col">
        <h5 className="text-[24px] md:text-[32px] leading-[40px] md:leading-[70px]">
          {title}
        </h5>

        <div className="flex items-center gap-2">
          <div className="dot"></div>
          <span className="neue-montreal-text text-[10px] md:text-xs uppercase">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderSlide;
