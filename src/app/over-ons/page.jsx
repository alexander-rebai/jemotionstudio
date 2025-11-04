"use client";

import AboutAccordionItem from "@/components/AboutAccordionItem";
import AboutIconBox from "@/components/AboutIconBox";
import ArrowButton from "@/components/ArrowButton";
import DotText from "@/components/DotText";
import { useState } from "react";

export default function Page() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const activateAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Renovaties met passie én expertise",
      content:
        "Onze passie begint bij jouw verhaal. We starten met een persoonlijk gesprek, luisteren naar je wensen en vertalen die naar een renovatietraject op maat met oog voor esthetiek, energie-efficiëntie én wooncomfort.",
    },
    {
      title: "Heldere communicatie & begeleiding",
      content:
        "Bij Renovise sta jij altijd centraal. We houden je tijdens elke fase van de renovatie op de hoogte en zorgen voor duidelijke afspraken. Zo weet je precies waar je aan toe bent en kan je rekenen op transparante communicatie en een vlotte opvolging.",
    },
    {
      title: "Garantie en duurzame samenwerking",
      content:
        "Wij bouwen aan langdurige relaties, niet aan snelle projecten. Met kwaliteitsmaterialen, ervaren vakmannen en waterdichte garanties bieden we je zekerheid op lange termijn. Zo geniet je niet alleen vandaag, maar ook morgen van een zorgeloze renovatie.",
    },
    {
      title: "Expertise & coördinatie op maat",
      content:
        "Een renovatie vraagt om meer dan alleen vakmanschap: het vraagt om een totaalaanpak. Onze experts coördineren elk aspect van je project.",
    },
  ];

  const iconBoxData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="w-[42px] h-[42px] lg:w-16 lg:h-16"
        >
          <g clipPath="url(#clip0_411_1963)">
            <path
              d="M6 44V16C6 14.4087 6.63214 12.8826 7.75736 11.7574C8.88258 10.6321 10.4087 10 12 10H16V38H12C10.4087 38 8.88258 38.6321 7.75736 39.7574C6.63214 40.8826 6 42.4087 6 44ZM6 44C6 45.5913 6.63214 47.1174 7.75736 48.2426C8.88258 49.3679 10.4087 50 12 50H58V16H16"
              stroke="#AFD802"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 24V40"
              stroke="#AFD802"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 24V40"
              stroke="#AFD802"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 28H48"
              stroke="#AFD802"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 36H48"
              stroke="#AFD802"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_411_1963">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Stapsgewijze handleiding",
      content:
        "We denken met je mee en breken jouw renovatieproject stap voor stap open, van eerste advies tot betrouwbare uitvoering.",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="w-[42px] h-[42px] lg:w-16 lg:h-16"
        >
          <mask
            id="mask0_411_1971"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="64"
            height="64"
          >
            <rect width="64" height="64" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_411_1971)">
            <path
              d="M32.3994 52.6674C32.8438 52.6674 33.2882 52.5786 33.7327 52.4008C34.1771 52.223 34.5549 51.9786 34.866 51.6674L53.9327 32.5341C54.5549 31.9119 55.066 31.2897 55.466 30.6674C55.866 30.0452 56.066 29.3174 56.066 28.4841C56.066 27.6543 55.866 26.8441 55.466 26.0534C55.066 25.2628 54.5549 24.5341 53.9327 23.8674L43.266 13.1341C42.5549 12.5119 41.8796 12.0341 41.24 11.7008C40.6005 11.3674 39.8758 11.2008 39.066 11.2008C37.9549 11.2008 36.9994 11.5008 36.1994 12.1008C35.3994 12.7008 34.6216 13.4008 33.866 14.2008L31.7994 16.2674L36.7994 21.0008C37.3327 21.5786 37.7771 22.2119 38.1327 22.9008C38.4882 23.5897 38.666 24.3119 38.666 25.0674C38.666 26.223 38.2771 27.1897 37.4994 27.9674C36.7216 28.7452 35.7576 29.1341 34.6074 29.1341C34.03 29.1341 33.4622 29.0452 32.904 28.8674C32.3454 28.6897 31.8216 28.3563 31.3327 27.8674L25.7327 22.2008L15.5994 32.3341C15.2882 32.6897 15.0438 33.0839 14.866 33.5168C14.6882 33.9492 14.5994 34.3843 14.5994 34.8221C14.5994 35.6079 14.8494 36.2341 15.3494 36.7008C15.8494 37.1674 16.492 37.4008 17.2774 37.4008C17.7142 37.4008 18.1438 37.3119 18.566 37.1341C18.9882 36.9563 19.3771 36.7119 19.7327 36.4008L26.866 29.3341L27.7994 30.2674L20.5994 37.4008C20.2438 37.7563 19.9882 38.1492 19.8327 38.5795C19.6771 39.0092 19.5994 39.4415 19.5994 39.8761C19.5994 40.6117 19.8565 41.2386 20.3707 41.7568C20.8849 42.275 21.5178 42.5341 22.2694 42.5341C22.7116 42.5341 23.1549 42.4452 23.5994 42.2675C24.0438 42.0897 24.4216 41.8452 24.7327 41.5341L32.666 33.5341L33.666 34.5341L25.666 42.4008C25.3549 42.7563 25.1105 43.1619 24.9327 43.6175C24.7549 44.073 24.666 44.5174 24.666 44.9508C24.666 45.6841 24.9231 46.309 25.4374 46.8255C25.9516 47.3423 26.5845 47.6008 27.336 47.6008C27.7782 47.6008 28.2216 47.5119 28.666 47.3341C29.1105 47.1563 29.4882 46.9119 29.7994 46.6008L37.7327 38.6008L38.7327 39.6008L30.7994 47.4674C30.4882 47.823 30.2438 48.2435 30.066 48.7288C29.8882 49.2141 29.7994 49.6579 29.7994 50.0601C29.7994 50.865 30.0549 51.5008 30.566 51.9674C31.0771 52.4341 31.6882 52.6674 32.3994 52.6674ZM32.3994 53.8675C31.1105 53.8675 30.0549 53.3786 29.2327 52.4008C28.4105 51.423 28.1327 50.2452 28.3994 48.8675C26.9327 49.0452 25.6882 48.6674 24.666 47.7341C23.6438 46.8008 23.1994 45.509 23.3327 43.8588C21.6438 43.9534 20.3105 43.5341 19.3327 42.6008C18.3549 41.6674 17.9994 40.4008 18.266 38.8008C16.8882 39.023 15.7105 38.7675 14.7327 38.0341C13.7549 37.3008 13.266 36.2299 13.266 34.8214C13.266 34.2299 13.3771 33.6341 13.5994 33.0341C13.8216 32.4341 14.1771 31.8897 14.666 31.4008L25.7327 20.3341L32.1327 26.7341C32.4882 27.0452 32.8549 27.2897 33.2327 27.4674C33.6105 27.6452 34.058 27.7341 34.5754 27.7341C35.2616 27.7341 35.8705 27.4786 36.402 26.9674C36.9336 26.4563 37.1994 25.8166 37.1994 25.0481C37.1994 24.5339 37.0994 24.0752 36.8994 23.6721C36.6994 23.269 36.466 22.9119 36.1994 22.6008L26.7327 13.1341C26.0216 12.4674 25.3316 11.9786 24.6627 11.6674C23.9938 11.3563 23.2505 11.2008 22.4327 11.2008C21.6105 11.2008 20.8994 11.3674 20.2994 11.7008C19.6994 12.0341 19.066 12.5119 18.3994 13.1341L9.85136 21.6195C9.19447 22.2737 8.68824 23.0674 8.33269 24.0008C7.97713 24.9341 7.8438 25.9119 7.93269 26.9341C8.02158 27.3786 8.13269 27.7674 8.26602 28.1008C8.39936 28.4341 8.53269 28.7786 8.66602 29.1341L7.53269 30.2008C7.33758 29.8146 7.16647 29.3401 7.01936 28.7775C6.87269 28.2152 6.75491 27.6008 6.66602 26.9341C6.57713 25.6897 6.72158 24.523 7.09936 23.4341C7.47713 22.3452 8.08824 21.4008 8.93269 20.6008L17.3994 12.1341C18.1105 11.3786 18.8771 10.8119 19.6994 10.4341C20.5216 10.0563 21.466 9.86745 22.5327 9.86745C23.5994 9.86745 24.5327 10.0563 25.3327 10.4341C26.1327 10.8119 26.9105 11.3786 27.666 12.1341L30.7994 15.2674L33.9327 12.0674C34.6438 11.3119 35.3994 10.7452 36.1994 10.3674C36.9994 9.98967 37.9327 9.80078 38.9994 9.80078C40.066 9.80078 40.9994 9.98967 41.7994 10.3674C42.5994 10.7452 43.3771 11.3119 44.1327 12.0674L54.866 22.8008C55.6216 23.5563 56.2216 24.3897 56.666 25.3008C57.1105 26.2119 57.3327 27.2008 57.3327 28.2674C57.3327 29.3341 57.1105 30.2674 56.666 31.0674C56.2216 31.8674 55.6216 32.6452 54.866 33.4008L35.7994 52.5341C35.266 53.0675 34.7209 53.423 34.164 53.6008C33.6076 53.7786 33.0194 53.8675 32.3994 53.8675Z"
              fill="#AED800"
            />
          </g>
        </svg>
      ),
      title: "Bewezen expertise",
      content:
        "Onze ervaring met energie, comfort en partnerschappen maakt het verschil — zodat jij in vertrouwen kan bouwen aan de toekomst.",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="w-[42px] h-[42px] lg:w-16 lg:h-16"
        >
          <mask
            id="mask0_411_1975"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="64"
            height="64"
          >
            <rect width="64" height="64" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_411_1975)">
            <path
              d="M17.7339 36.6672H36.6672V35.3339H17.7339V36.6672ZM17.7339 27.8672H46.2672V26.5339H17.7339V27.8672ZM17.7339 19.0672H46.2672V17.7339H17.7339V19.0672ZM9.86719 50.9339V13.3339C9.86719 12.325 10.1927 11.495 10.8439 10.8439C11.495 10.1927 12.325 9.86719 13.3339 9.86719H50.6672C51.6761 9.86719 52.5061 10.1927 53.1572 10.8439C53.8083 11.495 54.1339 12.325 54.1339 13.3339V41.0672C54.1339 42.0761 53.8083 42.9061 53.1572 43.5572C52.5061 44.2083 51.6761 44.5339 50.6672 44.5339H16.2672L9.86719 50.9339ZM15.7339 43.2005H50.6672C51.2005 43.2005 51.6894 42.9783 52.1339 42.5339C52.5783 42.0894 52.8005 41.6005 52.8005 41.0672V13.3339C52.8005 12.8005 52.5783 12.3116 52.1339 11.8672C51.6894 11.4227 51.2005 11.2005 50.6672 11.2005H13.3339C12.8005 11.2005 12.3116 11.4227 11.8672 11.8672C11.4227 12.3116 11.2005 12.8005 11.2005 13.3339V47.8005L15.7339 43.2005Z"
              fill="#AED800"
            />
          </g>
        </svg>
      ),
      title: "Naadloos begin",
      content:
        "Eén gesprek opent de deur naar een zorgeloos traject, met professioneel advies en begeleiding.",
    },
  ];

  return (
    <div className="bg-bgBlack-100">
      <section className="pt-[56px] md:pt-[115px] px-4 lg:px-0 bg-bgBlack-300">
        <div className="lg:px-16 flex flex-col items-start justify-center text-start py-16 md:py-[86px] pr-0">
          <h1 className="mb-7 lg:mb-[42px] max-w-[1000px] md:!text-[90px] !text-[48px]">
            Renoveren
            <br />
            met onze <span className="italic">persoonlijke touch</span>
          </h1>
          <p className="text-xs leading-[160%] md:text-sm md:leading-[22px] neue-montreal-text">
            Renovise. Waar advies, stijl en vakmanschap samenkomen.
          </p>
        </div>
      </section>
      {/* image section  */}
      <section className="px-4 md:px-16 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-bgBlack-300 z-0"></div>
        <img
          src="/images/over-ons/image-1.png"
          alt="Over ons"
          className="w-full relative z-10"
        />
      </section>
      {/* accordion section  */}
      <section className="lg:px-16 py-[22px] lg:pt-[36px] lg:pb-[116px] px-4">
        {accordionData.map((item, index) => (
          <AboutAccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeAccordion === index}
            setActiveAccordion={() => activateAccordion(index)}
            isLast={index === accordionData.length - 1}
          />
        ))}
      </section>
      {/* assets section  */}
      <section className="px-4 lg:px-16 py-[100px] lg:py-[140px] bg-[url('/images/over-ons/arrows-bg-green.png')] bg-no-repeat bg-top bg-bgBlack-300 xl:bg-size-[90%_auto] bg-[190%_auto]">
        <div className="container mx-auto">
          <div className="flex max-lg:justify-center">
            <DotText text="Wat ons écht onderscheidt" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-[54px] lg:gap-4">
            <div className="w-full flex flex-col items-center lg:items-start text-center">
              <h2 className="mb-6 lg:mb-[120px]">Onze troeven</h2>
              <ArrowButton text="Ontdek onze realisaties" href="/realisaties" />
            </div>
            <div className="w-full flex flex-col gap-[50px] lg:gap-[42px] max-lg:items-center">
              {iconBoxData.map((item, index) => (
                <AboutIconBox
                  key={index}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
