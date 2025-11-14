"use client";

import AccordionItem from "@/components/AccordionItem";
import ArrowButton from "@/components/ArrowButton";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";
import DotText from "@/components/DotText";
import IconBox from "@/components/IconBox";
import ReviewItem from "@/components/ReviewItem";
import SliderSlide from "@/components/SliderSlide";
import IntroVideo from "@/components/IntroVideo";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState, useEffect } from "react";

export default function Page() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const sliderRef = useRef();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(120);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro should be shown after component mounts
    const hasShown = document.documentElement.getAttribute("data-intro-shown");
    if (hasShown === "true") {
      setShouldShowIntro(false);
    }
  }, []);

  const slides = [
    {
      title: "Energetische renovaties",
      subtitle: "Perfecte isolatie begint aan de buitenkant",
      image: "/images/home/slider-1.png",
    },
    {
      title: "Duurzame technieken",
      subtitle: "Minder warmteverlies, meer comfort en stijl",
      image: "/images/home/slider-2.png",
    },
    {
      title: "Totaal oplossingen",
      subtitle: "Volledige ontzorging van A tot Z",
      image: "/images/home/slider-3.png"  ,
    },
  ];

  const faqs = [
    {
      title: "Waarom Renovise?",
      highlight: "Omdat wij de sleutel bieden tot een zorgeloze renovatie.",
      content:
        "Duidelijke afspraken, één aanspreekpunt en vakmannen die weten wat ze doen.\n\nDaarom werken we anders: samen bekijken we de mogelijkheden,begeleiden we elk detail en maken we van jouw renovatie een zorgeloostraject.",
    },
    {
      title: "Zijn jullie aannemers of coördineren jullie alleen?",
      highlight: "Wij zijn aannemer én coördineren alles.",
      content:
        "Als hoofdaannemer nemen we de volledige verantwoordelijkheid voor jullie project: van planning tot oplevering. Voor de uitvoering werken we met ons netwerk van vakspecialisten – van dakwerker tot installateur – maar jullie hoeven maar één nummer te onthouden: het onze.",
    },
    {
      title: "Heb ik een architect nodig?",
      highlight: "Soms wel, soms niet.",
      content:
        "Bij grote ingrepen is een architect wettelijk verplicht, bij kleinere zaken niet. We bekijken samen wat voor jouw project nodig is en regelen de juiste begeleiding.",
    },
    {
      title: "Welke garanties krijg ik?",
      highlight: "De standaard wettelijke garanties op materialen en plaatsing.",
      content:
        "Heldere afspraken die we nakomen en vakmensen die weten wat ze doen.",
    },
  ];

  const iconBoxes = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="42"
          viewBox="0 0 45 42"
          fill="none"
        >
          <path
            d="M7.86667 26.8H26.8V25.4667H7.86667V26.8ZM7.86667 18H36.4V16.6667H7.86667V18ZM7.86667 9.2H36.4V7.86667H7.86667V9.2ZM0 41.0667V3.46667C0 2.45778 0.325555 1.62778 0.976666 0.976668C1.62778 0.325557 2.45778 0 3.46667 0H40.8C41.8089 0 42.6389 0.325557 43.29 0.976668C43.9411 1.62778 44.2667 2.45778 44.2667 3.46667V31.2C44.2667 32.2089 43.9411 33.0389 43.29 33.69C42.6389 34.3411 41.8089 34.6667 40.8 34.6667H6.4L0 41.0667ZM5.86667 33.3333H40.8C41.3333 33.3333 41.8222 33.1111 42.2667 32.6667C42.7111 32.2222 42.9333 31.7333 42.9333 31.2V3.46667C42.9333 2.93333 42.7111 2.44444 42.2667 2C41.8222 1.55556 41.3333 1.33333 40.8 1.33333H3.46667C2.93333 1.33333 2.44444 1.55556 2 2C1.55556 2.44444 1.33333 2.93333 1.33333 3.46667V37.9333L5.86667 33.3333Z"
            fill="#AED800"
          />
        </svg>
      ),
      title: "Eén aanspreekpunt",
      text: "Eén vast aanspreekpunt tijdens het hele traject",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="45"
          viewBox="0 0 51 45"
          fill="none"
        >
          <path
            d="M25.7587 42.8667C26.2032 42.8667 26.6476 42.7778 27.0921 42.6C27.5365 42.4222 27.9143 42.1778 28.2254 41.8667L47.2921 22.7333C47.9143 22.1111 48.4254 21.4889 48.8254 20.8667C49.2254 20.2444 49.4254 19.5167 49.4254 18.6833C49.4254 17.8536 49.2254 17.0433 48.8254 16.2527C48.4254 15.462 47.9143 14.7333 47.2921 14.0667L36.6254 3.33333C35.9143 2.71111 35.239 2.23333 34.5994 1.9C33.9598 1.56667 33.2352 1.4 32.4254 1.4C31.3143 1.4 30.3587 1.7 29.5587 2.3C28.7587 2.9 27.981 3.6 27.2254 4.4L25.1587 6.46667L30.1587 11.2C30.6921 11.7778 31.1365 12.4111 31.4921 13.1C31.8476 13.7889 32.0254 14.5111 32.0254 15.2667C32.0254 16.4222 31.6365 17.3889 30.8587 18.1667C30.081 18.9444 29.117 19.3333 27.9667 19.3333C27.3894 19.3333 26.8216 19.2444 26.2634 19.0667C25.7047 18.8889 25.181 18.5556 24.6921 18.0667L19.0921 12.4L8.95873 22.5333C8.64762 22.8889 8.40317 23.2831 8.2254 23.716C8.04762 24.1484 7.95873 24.5836 7.95873 25.0213C7.95873 25.8071 8.20873 26.4333 8.70873 26.9C9.20873 27.3667 9.8514 27.6 10.6367 27.6C11.0736 27.6 11.5032 27.5111 11.9254 27.3333C12.3476 27.1556 12.7365 26.9111 13.0921 26.6L20.2254 19.5333L21.1587 20.4667L13.9587 27.6C13.6032 27.9556 13.3476 28.3484 13.1921 28.7787C13.0365 29.2084 12.9587 29.6407 12.9587 30.0753C12.9587 30.8109 13.2158 31.4378 13.7301 31.956C14.2443 32.4742 14.8772 32.7333 15.6287 32.7333C16.071 32.7333 16.5143 32.6444 16.9587 32.4667C17.4032 32.2889 17.781 32.0444 18.0921 31.7333L26.0254 23.7333L27.0254 24.7333L19.0254 32.6C18.7143 32.9556 18.4698 33.3611 18.2921 33.8167C18.1143 34.2722 18.0254 34.7167 18.0254 35.15C18.0254 35.8833 18.2825 36.5082 18.7967 37.0247C19.311 37.5416 19.9438 37.8 20.6954 37.8C21.1376 37.8 21.581 37.7111 22.0254 37.5333C22.4698 37.3556 22.8476 37.1111 23.1587 36.8L31.0921 28.8L32.0921 29.8L24.1587 37.6667C23.8476 38.0222 23.6032 38.4427 23.4254 38.928C23.2476 39.4133 23.1587 39.8571 23.1587 40.2593C23.1587 41.0642 23.4143 41.7 23.9254 42.1667C24.4365 42.6333 25.0476 42.8667 25.7587 42.8667ZM25.7587 44.0667C24.4698 44.0667 23.4143 43.5778 22.5921 42.6C21.7698 41.6222 21.4921 40.4444 21.7587 39.0667C20.2921 39.2444 19.0476 38.8667 18.0254 37.9333C17.0032 37 16.5587 35.7082 16.6921 34.058C15.0032 34.1527 13.6698 33.7333 12.6921 32.8C11.7143 31.8667 11.3587 30.6 11.6254 29C10.2476 29.2222 9.06984 28.9667 8.09206 28.2333C7.11429 27.5 6.6254 26.4291 6.6254 25.0207C6.6254 24.4291 6.73651 23.8333 6.95873 23.2333C7.18095 22.6333 7.53651 22.0889 8.0254 21.6L19.0921 10.5333L25.4921 16.9333C25.8476 17.2444 26.2143 17.4889 26.5921 17.6667C26.9698 17.8444 27.4174 17.9333 27.9347 17.9333C28.621 17.9333 29.2298 17.6778 29.7614 17.1667C30.293 16.6556 30.5587 16.0158 30.5587 15.2473C30.5587 14.7331 30.4587 14.2744 30.2587 13.8713C30.0587 13.4682 29.8254 13.1111 29.5587 12.8L20.0921 3.33333C19.381 2.66667 18.691 2.17778 18.0221 1.86667C17.3532 1.55556 16.6098 1.4 15.7921 1.4C14.9698 1.4 14.2587 1.56667 13.6587 1.9C13.0587 2.23333 12.4254 2.71111 11.7587 3.33333L3.21073 11.8187C2.55384 12.4729 2.04762 13.2667 1.69206 14.2C1.33651 15.1333 1.20317 16.1111 1.29206 17.1333C1.38095 17.5778 1.49206 17.9667 1.6254 18.3C1.75873 18.6333 1.89206 18.9778 2.0254 19.3333L0.892064 20.4C0.696952 20.0138 0.525841 19.5393 0.37873 18.9767C0.232064 18.4144 0.114286 17.8 0.0253968 17.1333C-0.0634921 15.8889 0.0809524 14.7222 0.45873 13.6333C0.836508 12.5444 1.44762 11.6 2.29206 10.8L10.7587 2.33333C11.4698 1.57778 12.2365 1.01111 13.0587 0.633333C13.881 0.255556 14.8254 0.0666667 15.8921 0.0666667C16.9587 0.0666667 17.8921 0.255556 18.6921 0.633333C19.4921 1.01111 20.2698 1.57778 21.0254 2.33333L24.1587 5.46667L27.2921 2.26667C28.0032 1.51111 28.7587 0.944444 29.5587 0.566667C30.3587 0.188889 31.2921 0 32.3587 0C33.4254 0 34.3587 0.188889 35.1587 0.566667C35.9587 0.944444 36.7365 1.51111 37.4921 2.26667L48.2254 13C48.981 13.7556 49.581 14.5889 50.0254 15.5C50.4698 16.4111 50.6921 17.4 50.6921 18.4667C50.6921 19.5333 50.4698 20.4667 50.0254 21.2667C49.581 22.0667 48.981 22.8444 48.2254 23.6L29.1587 42.7333C28.6254 43.2667 28.0803 43.6222 27.5234 43.8C26.967 43.9778 26.3787 44.0667 25.7587 44.0667Z"
            fill="#AED800"
          />
        </svg>
      ),
      title: "Betrouwbare partners",
      text: "Vaste werkmensen en partners",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="32"
          viewBox="0 0 51 32"
          fill="none"
        >
          <path
            d="M25.0827 24C27.3831 24 29.3333 23.1947 30.9333 21.584C32.5333 19.9738 33.3333 18.0182 33.3333 15.7173C33.3333 13.4169 32.528 11.4667 30.9173 9.86667C29.3071 8.26667 27.3516 7.46667 25.0507 7.46667C22.7502 7.46667 20.8 8.272 19.2 9.88267C17.6 11.4929 16.8 13.4484 16.8 15.7493C16.8 18.0498 17.6053 20 19.216 21.6C20.8262 23.2 22.7818 24 25.0827 24ZM25.0667 22.1333C23.2889 22.1333 21.7778 21.5111 20.5333 20.2667C19.2889 19.0222 18.6667 17.5111 18.6667 15.7333C18.6667 13.9556 19.2889 12.4444 20.5333 11.2C21.7778 9.95556 23.2889 9.33333 25.0667 9.33333C26.8444 9.33333 28.3556 9.95556 29.6 11.2C30.8444 12.4444 31.4667 13.9556 31.4667 15.7333C31.4667 17.5111 30.8444 19.0222 29.6 20.2667C28.3556 21.5111 26.8444 22.1333 25.0667 22.1333ZM25.076 31.4667C19.6653 31.4667 14.7333 30.0333 10.28 27.1667C5.82667 24.3 2.4 20.4889 0 15.7333C2.4 10.9778 5.82356 7.16667 10.2707 4.3C14.7178 1.43333 19.6467 0 25.0573 0C30.468 0 35.4 1.43333 39.8533 4.3C44.3067 7.16667 47.7333 10.9778 50.1333 15.7333C47.7333 20.4889 44.3098 24.3 39.8627 27.1667C35.4156 30.0333 30.4867 31.4667 25.076 31.4667ZM25.0667 30.1333C30.0444 30.1333 34.6444 28.8444 38.8667 26.2667C43.0889 23.6889 46.3333 20.1778 48.6 15.7333C46.3333 11.2889 43.0889 7.77778 38.8667 5.2C34.6444 2.62222 30.0444 1.33333 25.0667 1.33333C20.0889 1.33333 15.4889 2.62222 11.2667 5.2C7.04445 7.77778 3.8 11.2889 1.53333 15.7333C3.8 20.1778 7.04445 23.6889 11.2667 26.2667C15.4889 28.8444 20.0889 30.1333 25.0667 30.1333Z"
            fill="#AED800"
          />
        </svg>
      ),
      title: "Transparante planning",
      text: "Je bent altijd op de hoogte wat er gebeurt en wanneer",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="44"
          viewBox="0 0 35 44"
          fill="none"
        >
          <path
            d="M14.5333 28.8667L26.8 16.5333L25.8667 15.6L14.5333 27L8.73333 21.2L7.8 22.1333L14.5333 28.8667ZM17.3333 43.8667C12.4 42.3556 8.27778 39.348 4.96667 34.844C1.65556 30.3396 0 25.236 0 19.5333V6.66667L17.3333 0L34.6667 6.66667V19.5333C34.6667 25.236 33.0111 30.3396 29.7 34.844C26.3889 39.348 22.2667 42.3556 17.3333 43.8667ZM17.3333 42.4667C21.9556 41.0333 25.7778 38.1667 28.8 33.8667C31.8222 29.5667 33.3333 24.7889 33.3333 19.5333V7.53333L17.3333 1.46667L1.33333 7.53333V19.5333C1.33333 24.7889 2.84444 29.5667 5.86667 33.8667C8.88889 38.1667 12.7111 41.0333 17.3333 42.4667Z"
            fill="#AED800"
          />
        </svg>
      ),
      title: "Garantie & nazorg",
      text: "Zekerheid en steeds bereikbaar",
    },
  ];

  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoadingReviews(true);
        const response = await fetch("/api/reviews");
        
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setAverageRating(data.averageRating || 4.9);
          setTotalReviews(data.totalReviews || 0);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Keep empty array on error - component will handle gracefully
      } finally {
        setIsLoadingReviews(false);
      }
    }

    fetchReviews();
  }, []);

  const logos = [
    "/images/logos/slider-logo-1.png",
    "/images/logos/slider-logo-2.png",
    "/images/logos/slider-logo-3.png",
    "/images/logos/slider-logo-4.png",
    "/images/logos/slider-logo-5.png",
  ];

  const infiniteLogos = [...logos, ...logos, ...logos];

  const chunk = (arr, size = 2) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  const activateAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const nextSlide = () => {
    sliderRef.current.splide.go("+1");
  };

  const prevSlide = () => {
    sliderRef.current.splide.go("-1");
  };

  return (
    <div>
      {shouldShowIntro && <IntroVideo onComplete={() => setShouldShowIntro(false)} />}
      {/* hero  */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center md:items-start justify-center home-hero md:px-16">
        {/* Background Image */}
        <img
          src="/images/home/main-hero.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Overlay for better text readability (optional) */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="lg:mt-[100px] text-start flex flex-col items-start justify-center z-20 relative px-4 md:px-0 pr-0">
          <h1 className="md:!text-[90px] !text-[48px]">
            Renoveren
          </h1>
          <h1 className="mb-4 md:!text-[90px] !text-[48px]">met één vertrouwde <span className="italic">partner.</span></h1>
          <p className="neue-montreal-text text-[14px] md:text-sm mb-8 leading-[160%] md:leading-[22px]">
            Renoveren is meer dan een frisse look: het gaat om comfort, <br className="hidden md:block" />
            vertrouwen én slim investeren in je woning.
          </p>
          <ArrowButton text="Start jouw renovatie" href="#contact-form" />
        </div>

        <div
          className="absolute max-md:w-full max-md:justify-center bottom-[25px] md:bottom-[42px] md:right-16 flex gap-4 items-center z-20 cursor-pointer"
          onClick={() => {
            const el = document.querySelector("#section-2");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="neue-montreal-text text-xs uppercase">
            Scroll Down
          </span>
          <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
            >
              <path
                d="M0.192615 4.59217C0.186104 4.59822 0.136321 4.78388 0.0820258 5.0047C0.0277307 5.22555 -0.00839533 5.40862 0.00168847 5.41157C0.0118026 5.41448 0.175778 5.43734 0.366098 5.46232C0.748284 5.51252 1.19451 5.63404 1.47359 5.7639C2.34334 6.16867 2.91924 6.89489 3.06892 7.7757L3.10705 8L3.49126 8L3.8755 8L3.91199 7.79671C4.15104 6.4648 5.21641 5.59647 6.81074 5.43403C6.91485 5.42343 7 5.41076 7 5.40588C7 5.36096 6.80811 4.61665 6.7929 4.60257C6.78191 4.59239 6.68431 4.59996 6.57606 4.61942C5.3773 4.8348 4.40183 5.4515 3.99397 6.25178L3.89613 6.44374L3.88847 2.49618L3.8836 1.69758e-07L3.10601 1.35768e-07L3.10114 2.50261L3.09345 6.44086L2.96209 6.1985C2.62133 5.56977 1.95289 5.072 1.05567 4.77886C0.800065 4.69533 0.217324 4.56928 0.192615 4.59217Z"
                fill="#1A1A1A"
              />
            </svg>
          </div>
        </div>
      </section>
      <section
        className="bg-bgBlack-300 px-4 sm:px-16 py-[85px] lg:h-[105vh]"
        id="section-2"
      >
        <h3 className="text-center mb-[85px]">
          Slim georganiseerd. 
          <br className="block md:hidden" />
          <span className="hidden md:inline">{" "}</span>
          Vakkundig uitgevoerd.
        </h3>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch relative">
          <div className="w-full lg:flex-1 flex items-center lg:pr-[38px]">
            <img
              src="/images/home/image-1.png"
              alt=""
              className="w-full h-full lg:min-h-[412px] lg:object-cover"
            />
          </div>
          <div className="w-full lg:flex-1 lg:pl-[38px] justify-center flex flex-col mt-12 md:mt-0">
            <DotText text={"over ons"} />
            <p className="text-[16px] md:text-[21px] mb-6 md:mb-[36px] text-justify">
              Renovise is jouw ervaren aannemer in renovatie en
              energieoplossingen.
              <span className="block my-6"></span>
              We nemen het hele traject uit handen, van gerichte deelrenovaties
              tot complete totaaloplossingen. We zorgen voor de volledige
              coördinatie: planning, opvolging én vakkundige uitvoering door
              betrouwbare vakmensen.
              <span className="block my-6"></span>
              <span className="text-textLight">
                Met Renovise heb je één aanspreekpunt dat zorgt voor een vlot en
                zorgeloos traject. Het resultaat: een comfortabele,
                energiezuinige en toekomstbestendige woning die in waarde
                stijgt.
              </span>
            </p>
            <ArrowButton text="Ontdek meer over ons" href="/over-ons" />
          </div>
        </div>
      </section>
      {/* slide section */}
      <section
        id="slider-section"
        className="pb-[100px] md:pb-[160px] px-4 sm:pl-16 pr-0 w-full bg-bgBlack-300 overflow-x-hidden"
      >
        <DotText text="onze diensten" />
        <h2 className="mb-6 md:mb-8">Wat we voor jou doen</h2>
        <div className="w-full h-px bg-line mb-9 md:mb-[60px]"></div>
        <Splide
          ref={sliderRef}
          hasTrack={false}
          options={{
            perPage: 1,
            type: "slider",
            pagination: false,
            perMove: 1,
            padding: {
              right: "437px",
            },

            breakpoints: {
              1280: {
                padding: {
                  right: "342px",
                },
              },
              1024: {
                gap: "1rem",
                padding: {
                  right: "48px",
                },
              },
            },
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12 md:gap-[72px]">
            <div className="w-full flex flex-col items-start min-w-[300px]">
              <p className="neue-montreal-text leading-[140%] md:leading-[26px] text-[14px] md:text-[18px] text-textLight mb-6 md:mb-12">
                Van gerichte ingrepen of upgrades tot volledige transformaties:
                ontdek welke oplossing past bij jouw plannen.
              </p>
              <ArrowButton
                text="Bekijk alle mogelijkheden"
                href="/renovatie"
              />
              <div id="desktop-buttons" className="splide__arrows mt-auto">
                <button
                  className="splide__arrow splide__arrow--prev bg-transparent"
                  style={{ position: "static", transform: "unset" }}
                >
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M9.18433 14.5873C9.19645 14.6012 9.56776 14.7079 10.0094 14.8242C10.4511 14.9406 10.8173 15.018 10.8231 14.9964C10.829 14.9747 10.8747 14.6233 10.9246 14.2155C11.025 13.3965 11.2681 12.4403 11.5278 11.8423C12.3373 9.97855 13.7898 8.74449 15.5514 8.42374L16 8.34204V7.51873L16 6.69535L15.5934 6.61716C12.9296 6.10492 11.1929 3.82198 10.8681 0.405558C10.8469 0.182467 10.8215 0 10.8118 0C10.7219 0 9.23329 0.411202 9.20514 0.443776C9.18478 0.467331 9.19992 0.67647 9.23884 0.908449C9.6696 3.47722 10.903 5.5675 12.5036 6.4415L12.8875 6.65116L4.99237 6.66757L0 6.678L0 8.34426L5.00521 8.3547L12.8817 8.37118L12.397 8.65267C11.1395 9.38287 10.144 10.8152 9.55772 12.7378C9.39065 13.2856 9.13857 14.5343 9.18433 14.5873Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className="splide__arrow splide__arrow--next"
                  style={{ position: "static", transform: "unset" }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M9.18433 14.5873C9.19645 14.6012 9.56776 14.7079 10.0094 14.8242C10.4511 14.9406 10.8173 15.018 10.8231 14.9964C10.829 14.9747 10.8747 14.6233 10.9246 14.2155C11.025 13.3965 11.2681 12.4403 11.5278 11.8423C12.3373 9.97855 13.7898 8.74449 15.5514 8.42374L16 8.34204V7.51873L16 6.69535L15.5934 6.61716C12.9296 6.10492 11.1929 3.82198 10.8681 0.405558C10.8469 0.182467 10.8215 0 10.8118 0C10.7219 0 9.23329 0.411202 9.20514 0.443776C9.18478 0.467331 9.19992 0.67647 9.23884 0.908449C9.6696 3.47722 10.903 5.5675 12.5036 6.4415L12.8875 6.65116L4.99237 6.66757L0 6.678L0 8.34426L5.00521 8.3547L12.8817 8.37118L12.397 8.65267C11.1395 9.38287 10.144 10.8152 9.55772 12.7378C9.39065 13.2856 9.13857 14.5343 9.18433 14.5873Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-full lg:max-w-[calc(991px)]">
              <SplideTrack>
                {slides.map((slide, index) => (
                  <SplideSlide key={index}>
                    <SliderSlide
                      subtitle={slide.subtitle}
                      title={slide.title}
                      image={slide.image}
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
          </div>

          <div id="mobile-buttons" className="splide__arrows mt-[28px]">
            <button
              className="splide__arrow splide__arrow--prev bg-transparent"
              style={{ position: "static", transform: "unset" }}
              onClick={() => prevSlide()}
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M9.18433 14.5873C9.19645 14.6012 9.56776 14.7079 10.0094 14.8242C10.4511 14.9406 10.8173 15.018 10.8231 14.9964C10.829 14.9747 10.8747 14.6233 10.9246 14.2155C11.025 13.3965 11.2681 12.4403 11.5278 11.8423C12.3373 9.97855 13.7898 8.74449 15.5514 8.42374L16 8.34204V7.51873L16 6.69535L15.5934 6.61716C12.9296 6.10492 11.1929 3.82198 10.8681 0.405558C10.8469 0.182467 10.8215 0 10.8118 0C10.7219 0 9.23329 0.411202 9.20514 0.443776C9.18478 0.467331 9.19992 0.67647 9.23884 0.908449C9.6696 3.47722 10.903 5.5675 12.5036 6.4415L12.8875 6.65116L4.99237 6.66757L0 6.678L0 8.34426L5.00521 8.3547L12.8817 8.37118L12.397 8.65267C11.1395 9.38287 10.144 10.8152 9.55772 12.7378C9.39065 13.2856 9.13857 14.5343 9.18433 14.5873Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <button
              className="splide__arrow splide__arrow--next"
              style={{ position: "static", transform: "unset" }}
              onClick={() => nextSlide()}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M9.18433 14.5873C9.19645 14.6012 9.56776 14.7079 10.0094 14.8242C10.4511 14.9406 10.8173 15.018 10.8231 14.9964C10.829 14.9747 10.8747 14.6233 10.9246 14.2155C11.025 13.3965 11.2681 12.4403 11.5278 11.8423C12.3373 9.97855 13.7898 8.74449 15.5514 8.42374L16 8.34204V7.51873L16 6.69535L15.5934 6.61716C12.9296 6.10492 11.1929 3.82198 10.8681 0.405558C10.8469 0.182467 10.8215 0 10.8118 0C10.7219 0 9.23329 0.411202 9.20514 0.443776C9.18478 0.467331 9.19992 0.67647 9.23884 0.908449C9.6696 3.47722 10.903 5.5675 12.5036 6.4415L12.8875 6.65116L4.99237 6.66757L0 6.678L0 8.34426L5.00521 8.3547L12.8817 8.37118L12.397 8.65267C11.1395 9.38287 10.144 10.8152 9.55772 12.7378C9.39065 13.2856 9.13857 14.5343 9.18433 14.5873Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </Splide>
      </section>
      {/* faqs section */}
      <section className="pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] px-4 md:px-16 bg-bgBlack-100">
        <div className="container mx-auto flex flex-col items-center">
          <DotText text="FAQs" />
          <h2 className="text-center mb-[80px]">Veelgestelde vragen</h2>

          <div className="w-full mb-16 lg:mb-[120px]">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
                highlight={faq.highlight}
                active={activeAccordion === index}
                setActiveAccordion={() => activateAccordion(index)}
              />
            ))}
          </div>

          <div className="grid-cols-2 grid lg:grid-cols-4 gap-6 lg:gap-4 justify-items-center w-full">
            {iconBoxes.map((box, index) => (
              <IconBox
                key={index}
                icon={box.icon}
                title={box.title}
                text={box.text}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-bgBlack-300 px-4 sm:px-16 py-[100px] md:py-[140px] container mx-auto overflow-x-hidden">
        <div className="flex flex-col items-center">
          <DotText text="Google Reviews" />
          <h2 className="mb-12 lg:mb-16">Wat onze klanten zeggen</h2>
          {isLoadingReviews ? (
            <div className="flex items-center justify-center py-12 w-full">
              <div className="w-full bg-white text-black py-9 px-[24px] lg:px-[60px] flex flex-col items-center">
                <p className="neue-montreal-text text-sm text-textLight">
                  Reviews laden...
                </p>
              </div>
            </div>
          ) : reviews.length > 0 ? (
            <Splide
              hasTrack={false}
              options={{
                perPage: 1,
                perMove: 1,
                type: "slider",
                pagination: false,
                gap: "2px",
              }}
            >
              <div className="flex flex-col">
                <div className="w-full bg-white text-black py-9 px-[24px] lg:px-[60px] flex flex-col lg:flex-row mb-7 lg:mb-16">
                  <div className="lg:py-[24px] flex items-center justify-center gap-9 w-full lg:w-fit lg:pr-[54px] max-lg:pb-6 max-lg:border-b max-lg:border-b-lineLight">
                    <div className="flex flex-col items-center max-md:max-w-[120px]">
                      <h3>{averageRating.toFixed(0)}/5</h3>
                      <p className="neue-montreal-text text-xs leading-[20px] text-center mb-8">
                        Laat jij ook een review achter?
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M3.77218 13.0439C3.01562 13.5003 2.08225 12.8231 2.28138 11.9623L2.96733 8.99688C3.0508 8.63602 2.92797 8.25857 2.64811 8.01594L0.346317 6.02034C-0.321212 5.44162 0.0347376 4.34492 0.9149 4.26852L3.96122 4.00408C4.3304 3.97203 4.65159 3.73846 4.79585 3.39713L5.97356 0.610567C6.31771 -0.2037 7.47164 -0.2037 7.81578 0.610567L8.9935 3.39713C9.13776 3.73846 9.45895 3.97203 9.82813 4.00408L12.8744 4.26852C13.7546 4.34492 14.1106 5.44162 13.443 6.02034L11.1412 8.01594C10.8614 8.25857 10.7385 8.63602 10.822 8.99688L11.508 11.9623C11.7071 12.8231 10.7737 13.5003 10.0172 13.0439L7.41121 11.4719C7.09352 11.2803 6.69583 11.2803 6.37814 11.4719L3.77218 13.0439Z"
                              fill="#F5CA0F"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-8 h-full">
                      <img
                        src="/images/logos/google-full.png"
                        className="h-9 w-full min-w-[100px]"
                      />
                      <img
                        src="/images/logos/google-small.png"
                        className="h-[42px]"
                      />
                    </div>
                  </div>

                  {/* slides */}
                  <div className="lg:max-w-[700px] xl:max-w-[900px]">
                    <SplideTrack>
                      {chunk(reviews, 2).map((pair, idx) => (
                        <SplideSlide
                          key={idx}
                          className="flex flex-col lg:flex-row"
                        >
                          {pair.map((review, i) => (
                            <ReviewItem
                              key={`${idx}-${i}`}
                              name={review.name}
                              text={review.text}
                              date={review.date}
                              image={review.image}
                              rating={review.rating}
                            />
                          ))}
                        </SplideSlide>
                      ))}
                    </SplideTrack>
                  </div>
                </div>

                <div className="splide__arrows flex justify-center gap-4">
                  <button
                    className="splide__arrow splide__arrow--prev bg-transparent"
                    style={{ position: "static", transform: "unset" }}
                  >
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M9.18433 14.5873C9.19645 14.6012 9.56776 14.7079 10.0094 14.8242C10.4511 14.9406 10.8173 15.018 10.8231 14.9964C10.829 14.9747 10.8747 14.6233 10.9246 14.2155C11.025 13.3965 11.2681 12.4403 11.5278 11.8423C12.3373 9.97855 13.7898 8.74449 15.5514 8.42374L16 8.34204V7.51873L16 6.69535L15.5934 6.61716C12.9296 6.10492 11.1929 3.82198 10.8681 0.405558C10.8469 0.182467 10.8215 0 10.8118 0C10.7219 0 9.23329 0.411202 9.20514 0.443776C9.18478 0.467331 9.19992 0.67647 9.23884 0.908449C9.6696 3.47722 10.903 5.5675 12.5036 6.4415L12.8875 6.65116L4.99237 6.66757L0 6.678L0 8.34426L5.00521 8.3547L12.8817 8.37118L12.397 8.65267C11.1395 9.38287 10.144 10.8152 9.55772 12.7378C9.39065 13.2856 9.13857 14.5343 9.18433 14.5873Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                  <button
                    className="splide__arrow splide__arrow--next"
                    style={{ position: "static", transform: "unset" }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M9.18433 14.5873C9.19645 14.6012 9.56776 14.7079 10.0094 14.8242C10.4511 14.9406 10.8173 15.018 10.8231 14.9964C10.829 14.9747 10.8747 14.6233 10.9246 14.2155C11.025 13.3965 11.2681 12.4403 11.5278 11.8423C12.3373 9.97855 13.7898 8.74449 15.5514 8.42374L16 8.34204V7.51873L16 6.69535L15.5934 6.61716C12.9296 6.10492 11.1929 3.82198 10.8681 0.405558C10.8469 0.182467 10.8215 0 10.8118 0C10.7219 0 9.23329 0.411202 9.20514 0.443776C9.18478 0.467331 9.19992 0.67647 9.23884 0.908449C9.6696 3.47722 10.903 5.5675 12.5036 6.4415L12.8875 6.65116L4.99237 6.66757L0 6.678L0 8.34426L5.00521 8.3547L12.8817 8.37118L12.397 8.65267C11.1395 9.38287 10.144 10.8152 9.55772 12.7378C9.39065 13.2856 9.13857 14.5343 9.18433 14.5873Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </Splide>
          ) : (
            <div className="flex items-center justify-center py-12 w-full">
              <div className="w-full bg-white text-black py-9 px-[24px] lg:px-[60px] flex flex-col items-center">
                <p className="neue-montreal-text text-sm text-textLight">
                  Geen reviews beschikbaar
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* white section */}
      <section className="bg-white text-black">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full px-4 pb-12 pt-[100px] lg:pb-[120px] lg:px-16 lg:pt-[76px]">
            <DotText text="Onze troeven" />
            <h2 className="mb-12 lg:mb-[60px]">Jij droomt, wij realiseren</h2>
            <div className="w-full h-px bg-lineLight mb-12 lg:mb-[120px]"></div>
            <p className="neue-montreal-text text-[14px] md:text-[18px] leading-[26px] max-w-[450px]">
              Wij garanderen dat jouw investering loont: met heldere afspraken,
              vakkundige uitvoering en een team dat jouw belangen voorop stelt.
            </p>
          </div>
          <div className="w-full">
            <img
              src="/images/home/image-2.png"
              alt="Jij droomt, wij realiseren"
              className="w-full h-full md:h-[610px]"
            />
          </div>
        </div>
      </section>

      {/* logos section */}
      <section className="bg-[#1F1F1F]">
        <div className="w-full h-full bg-[url('/images/home/arrows-bg-mobile.png')] md:bg-[url('/images/home/arrows-bg.png')] bg-no-repeat bg-top bg-cover">
          <div>
            <div className="flex items-center justify-center min-h-[30vh] md:min-h-[50vh]"/>
            {/* logos slider */}
            <div className="pb-12 md:pb-[64px]">
              <Splide
                hasTrack={false}
                options={{
                  type: "loop",
                  autoplay: true,
                  interval: 2000,
                  speed: 2000,
                  pauseOnHover: false,
                  arrows: false,
                  pagination: false,
                  perPage: 5,
                  perMove: 1,
                  padding: {
                    left: "2px",
                  },
                  breakpoints: {
                    1280: { perPage: 3 },
                  },
                }}
              >
                <SplideTrack>
                  {infiniteLogos.map((logo, i) => (
                    <SplideSlide key={i}>
                      <div className="border-r border-r-line px-9 lg:px-[96px] flex items-center justify-center h-full w-full">
                        <img
                          src={logo}
                          alt=""
                          className="max-h-16 w-full min-h-9 object-contain"
                        />
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      {/* form section */}
      <div
        className="pb-0 pt-[100px] md:py-[140px]"
        id="contact-form"
      >
        <div className="flex flex-col lg:flex-row lg:gap-[150px]">
          <div className="w-full px-4 md:px-16">
            <DotText text={"contact opnemen"} />
            <h2 className="mb-6 lg:mb-[60px]">Vertel ons jouw plannen</h2>
            <div className="mb-6 lg:mb-12 w-full h-px bg-line"></div>
            <div className="mb-7 lg:mb-[42px] neue-montreal-text text-xs md:text-[16px] leading-[22px] text-textLight">
              Of je nu klaar bent om een ​​nieuw project te starten of gewoon
              ideeën wilt verkennen, we horen graag van je.
            </div>
            <div className="max-lg:pb-9">
              <Contacts />
            </div>
          </div>
          <div className="w-full max-lg:bg-[#151515] px-4 md:px-16 max-lg:pt-[60px] max-lg:pb-[100px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
