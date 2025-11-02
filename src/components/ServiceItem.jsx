import React from "react";
import ArrowButton from "./ArrowButton";
import DotText from "./DotText";

const ServiceItem = ({
  title,
  highlight,
  text,
  button,
  image,
  list,
  text2,
}) => {
  return (
    <div className="py-12 lg:py-[86px] grid lg:grid-cols-3 gap-9 lg:gap-[86px] border-t border-t-line">
      <div>
        <h3 className="mb-12 lg:mb-[60px]">{title}</h3>
        <p className="neue-montreal-text text-textLight lg:mb-[48px] md:leading-[26px] md:text-[18px] text-xs leading-[150%]">
          <span className="text-primary/60">{highlight}</span>
          <span className={`${text2 && "hidden md:block"}`}>
            <br />
            <br />
            {text}
          </span>
          <span className={`${text2 ? "block" : "hidden"}`}>
            <span className="block my-6"></span>
            {text2}
          </span>
        </p>
        <div className="max-lg:hidden">
          <ArrowButton text={button} href="#contact-form" />
        </div>
      </div>
      <div>
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="mx-auto text-justify">
        {list.subtitle && (
          <DotText text={list.subtitle} margin={"mb-4 lg:mb-6"} />
        )}
        <h6 className="mb-6 lg:mb-8">{list.title}</h6>
        <ul className="neue-montreal-text text-xs leading-[20px] md:text-sm text-textLight">
          {list.items.map((item, index) => (
            <li
              className="flex items-center gap-1.5 lg:gap-2 mb-[12px] lg:mb-4"
              key={index}
            >
              {list.items.length > 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_411_1316"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_411_1316)">
                    <path
                      d="M9.55156 17.9996L3.85156 12.2996L5.27656 10.8746L9.55156 15.1496L18.7266 5.97461L20.1516 7.39961L9.55156 17.9996Z"
                      fill="white"
                    />
                  </g>
                </svg>
              )}
              <p className="">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceItem;
