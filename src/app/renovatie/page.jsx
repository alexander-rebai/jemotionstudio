"use client";

import ArrowButton from "@/components/ArrowButton";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";
import DotText from "@/components/DotText";
import ServiceItem from "@/components/ServiceItem";

export default function Page() {
  const services = [
    {
      title: "Energetische renovaties",
      highlight: "80% warmteverlies? Dat stopt aan de buitenkant.",
      text: "Oudere woningen verliezen het meeste warmte via dak, gevels en vensters. Een gerichte aanpak pakt dit bij de bron aan en levert onmiddellijk resultaat.",
      button: "Plan een adviesgesprek in",
      image: "/images/renovatie/image-2.png",
      list: {
        title: "Concrete voordelen",
        subtitle: "Eén investering. Jarenlang rendement.",
        items: [
          "Tot 40% lagere verwarmingskosten",
          "EPC-verbetering van 2-3 labels",
          "Einde aan tocht en koude zones",
          "Directe impact op verkoopprijs",
          "Geluidsreductie van buitenlawaai",
        ],
      },
    },

    {
      title: "Duurzame technieken",
      highlight: "Word jij ook zelfvoorzienend?",
      text: "Zonnepanelen, batterijen en warmtepompen worden steeds toegankelijker. Samen bekijken we wat de beste oplossing dat past bij jouw situatie.",
      button: "Vraag een offerte aan",
      image: "/images/renovatie/image-3.png",
      list: {
        title: "Wat het oplevert",
        subtitle: "Investeer nu. Bespaar jarenlang.",
        items: [
          "60-80% reductie in energiekosten",
          "Onafhankelijk van stijgende energieprijzen",
          "Verwarming én koeling in één systeem",
          "Slimme sturingssystemen (laden op goedkope momenten)",
        ],
      },
    },

    {
      title: "Totaal oplossingen",
      highlight: "Meerdere werken? Wij nemen de efficiëntste route.",
      text: "Transparante communicatie, vaste contactpersonen en topservice: dát is wat je van ons mag verwachten..",
      button: "Bespreek uw totaalrenovatie",
      image: "/images/renovatie/image-4.png",
      list: {
        title: "Eén aanspreekpunt, één strak plan, weg met zorgen.",
        subtitle: "",
        items: [
          "Een renovatie is geen klein project, daarom zorgen wij ervoor dat je er nooit alleen voor staat. We luisteren écht naar jouw wensen, denken proactief mee en zoeken altijd naar de slimste, meest duurzame aanpak. ",
        ],
      },
    },
  ];
  return (
    <div>
      <section className="min-h-[50vh] pt-[56px] md:pt-[115px] bg-[url('/images/renovatie/arrow-bg-green.png')] bg-no-repeat bg-top-right bg-bgBlack-300">
        <div className="container mx-auto py-[100px] flex flex-col items-center text-center lg:items-start lg:text-start px-4">
          <h1 className="max-w-[1000px] mb-7 lg:mb-[42px]">
            Duurzaam renoveren met oog voor{" "}
            <span className="italic">comfort.</span>
          </h1>
          <p className="leading-[22px] text-xs md:text-sm neue-montreal-text mb-[42px] lg:mb-12">
            Thuis begint bij een goed gevoel. Wij zorgen daarvoor.
          </p>
          <ArrowButton text="Ontdek de mogelijkheden" href="/renovatie" />
        </div>
      </section>
      <section className="bg-bgBlack-300 px-4 sm:px-16 py-[100px] md:py-[140px] container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[86px] h-full items-center relative">
          <div className="w-full lg:pr-[75px] lg:border-r lg:border-r-line">
            <img
              src="/images/renovatie/image-1.png"
              alt=""
              className="w-full h-full lg:min-h-[506px] lg:object-cover"
            />
          </div>
          <div className="bg-line w-full h-px block lg:hidden"></div>
          <div className="w-full lg:max-w-[40%] py-16 lg:py-[45px]">
            <h3 className="mb-6 lg:mb-12">Waarom renoveren?</h3>
            <p className="text-[16px] md:text-[24px] mb-[54px] md:mb-12">
              Een renovatie biedt direct tastbare voordelen: lagere
              energiekosten, aangenamer klimaat en een hogere verkoopwaarde. De
              vraag is niet óf het loont, maar hoe je het strategisch aanpakt
              <br />
              <br />
              <span className="text-textLight">
                Bij Renovise combineren we bouwkundige kennis met
                energie-expertise. Zo creëren we woningen die vandaag
                comfortabel zijn én morgen hun waarde behouden
              </span>
            </p>
            <ArrowButton text="Minder kosten. Meer comfort." href="/over-ons" />
          </div>
        </div>
      </section>

      {/* services section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center flex flex-col items-center">
            <DotText text="onze diensten" />
            <h2 className="mb-12 lg:mb-[60px]">Ontdek onze diensten</h2>
          </div>

          <div className="flex flex-col">
            {/* first item */}
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* img section */}
      <section className="py-[80px] lg:py-[140px] min-h-[70vh] lg:min-h-[50vh] px-4 lg:px-16 flex lg:items-center relative">
        <img
          src="/images/renovatie/image-5.png"
          alt=""
          className="absolute inset-0 w-full h-full z-[-1]"
        />
        <div className="container mx-auto w-full flex justify-center max-lg:items-start max-lg:text-center lg:justify-end">
          <div className="flex flex-col justify-center items-center lg:items-start max-w-[375px]">
            <h3 className="mb-5 lg:mb-12">
              Onze realisaties spreken voor zich.
            </h3>
            <ArrowButton text="Bekijk onze projecten" href="/realisaties" />
          </div>
        </div>
      </section>

      {/* form section */}
      <div className="container mx-auto pb-0 pt-[100px] md:py-[140px]" id="contact-form">
        <div className="flex flex-col lg:flex-row lg:gap-[150px]">
          <div className="w-full px-4 md:px-16">
            <DotText text={"contact opnemen"} />
            <h2 className="mb-12 lg:mb-[60px]">Vertel ons jouw plannen</h2>
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
