"use client";

import DotText from "@/components/DotText";
import ArrowButton from "@/components/ArrowButton";
import ImageItem from "@/components/ImageItem";

export default function Page() {
  const images = [
    "/images/realisaties/imgg.png",
    "/images/realisaties/img2.png",
    "/images/realisaties/img3.png",
    "/images/realisaties/img4.png",
    "/images/realisaties/img5.png",
    "/images/realisaties/img6.png",
    "/images/realisaties/img7.png",
    "/images/realisaties/img8.png",
    "/images/realisaties/img9.png",
    "/images/realisaties/img10.png",
    "/images/realisaties/img11.png",
    "/images/realisaties/img12.png",
  ];
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
            <ImageItem image={image} key={index} />
          ))}
        </div>
        <div className="lg:pt-[76] pt-[54] lg:pb-[140] pb-[100] flex justify-center">
          <ArrowButton text="bekijk meer" width="215px" />
        </div>
      </div>
    </>
  );
}
