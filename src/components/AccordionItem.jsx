import { useState } from "react";
import ArrowButton from "./ArrowButton";

const AccordionItem = ({
  title,
  highlight,
  content,
  active = false,
  setActiveAccordion,
}) => {
  return (
    <div
      onClick={() => setActiveAccordion()}
      className="cursor-pointer relative grid lg:grid-cols-4 items-start justify-between gap-7 lg:gap-4 border-b border-b-line py-16 transition-all duration-150 ease-in-out"
    >
      {/* left side  */}
      <div
        className={`w-full ${
          active ? "max-h-[500px]" : "max-h-0 max-lg:hidden"
        } overflow-hidden transition-all duration-150 ease-in-out max-lg:order-2`}
      >
        <div className="flex gap-4 mb-[54px] lg:mb-[70px]">
          <div className="bg-primary w-0.5 h-[56px]"></div>
          <div className="flex flex-col justify-center gap-1">
            <h6>200+</h6>
            <p className="neue-montreal-text text-[10px]">
              huiseigenaren kozen al eerder voor Renovise{" "}
            </p>
          </div>
        </div>
        <ArrowButton text="Gratis offerte" background="#fff" />
      </div>
      {/* center side  */}
      <div className="w-full lg:text-center flex flex-col items-start lg:items-center lg:col-span-2 max-lg:order-1">
        <div className="flex items-center justify-between w-full">
          <h3 className={`${active ? "mb-0" : "mb-0"} w-full`}>{title}</h3>
          {/* close button  */}
          <div className="w-fit flex justify-end lg:hidden">
            <button
              className={`w-6 h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center  cursor-pointer hover:brightness-90 ${
                active ? "bg-white" : "bg-transparent border border-white"
              } transition duration-150`}
            >
              {active ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M0.790312 9.98063L0 9.19031L4.2 4.99031L0 0.790313L0.790312 0L4.99031 4.2L9.19031 0L9.98063 0.790313L5.78062 4.99031L9.98063 9.19031L9.19031 9.98063L4.99031 5.78062L0.790312 9.98063Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M5.8125 12.75V6.9375H0V5.8125H5.8125V0H6.9375V5.8125H12.75V6.9375H6.9375V12.75H5.8125Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <p
          className={`neue-montreal-text text-[12px] md:text-[16px] leading-[150%] md:leading-[24px] text-white/60 whitespace-break-spaces ${
            active
              ? "max-h-[500px] mt-[36px] lg:mt-[42px] lg:mb-[60px]"
              : "max-h-0"
          } overflow-hidden transition-all duration-150 ease-in-out`}
        >
          <span className="text-primary">{highlight}</span>
          <br />
          {content}
        </p>
      </div>
      {/* right side  */}
      <div className="w-full flex justify-end max-lg:hidden">
        <button
          className={`w-9 h-9 rounded-full flex items-center justify-center  cursor-pointer hover:brightness-90 ${
            active ? "bg-white" : "bg-transparent border border-white"
          } transition duration-150`}
        >
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M0.790312 9.98063L0 9.19031L4.2 4.99031L0 0.790313L0.790312 0L4.99031 4.2L9.19031 0L9.98063 0.790313L5.78062 4.99031L9.98063 9.19031L9.19031 9.98063L4.99031 5.78062L0.790312 9.98063Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.8125 12.75V6.9375H0V5.8125H5.8125V0H6.9375V5.8125H12.75V6.9375H6.9375V12.75H5.8125Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AccordionItem;
