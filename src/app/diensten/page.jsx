"use client";

import ArrowButton from "@/components/ArrowButton";

const services = [
  {
    id: "kinesitherapie",
    title: "Kinesitherapie",
    subtitle: "Beweging als medicijn",
    description:
      "Gerichte oefentherapie en manuele technieken voor het behandelen van bewegingsklachten, blessures en postoperatief herstel.",
    longDescription:
      "Kinesitherapie vormt de basis van onze praktijk. Door middel van gerichte oefeningen, manuele technieken en een persoonlijk behandelplan werken we samen aan je herstel. Of het nu gaat om rugklachten, een sportblessure of revalidatie na een operatie.",
    whatToExpect: [
      "Uitgebreide intake en lichamelijk onderzoek",
      "Persoonlijk behandelplan op maat",
      "Manuele therapie en mobilisaties",
      "Oefenschema voor thuis",
      "Regelmatige evaluatie van je vooruitgang",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "osteopathie",
    title: "Osteopathie I.O.",
    subtitle: "Het lichaam als geheel",
    description:
      "Holistische behandeling van het lichaam waarbij we zoeken naar de oorzaak van klachten. Zachte manuele technieken voor herstel.",
    longDescription:
      "Osteopathie bekijkt je lichaam als een samenhangend geheel. We zoeken niet alleen naar waar de pijn zit, maar vooral naar waarom. Met zachte, manuele technieken behandelen we spieren, gewrichten en bindweefsel om het lichaam weer in balans te brengen.",
    whatToExpect: [
      "Holistische benadering van je klachten",
      "Uitgebreid onderzoek van het hele lichaam",
      "Zachte manuele technieken",
      "Aandacht voor houding en bewegingspatronen",
      "Advies voor preventie en zelfzorg",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sportrevalidatie",
    title: "Sportrevalidatie",
    subtitle: "Terug naar je sport",
    description:
      "Gespecialiseerde begeleiding voor sporters bij blessures en terugkeer naar sport. Van recreant tot topsporter.",
    longDescription:
      "Of je nu recreatief sport of op hoog niveau presteert, een blessure kan frustrerend zijn. Onze sportrevalidatie richt zich op een veilige en effectieve terugkeer naar je sport. Met aandacht voor de specifieke eisen van jouw sport.",
    whatToExpect: [
      "Sportspecifieke analyse en diagnose",
      "Gefaseerd revalidatieprogramma",
      "Functionele training en oefeningen",
      "Return-to-sport testen",
      "Blessurepreventie advies",
    ],
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "preventie",
    title: "Preventie & Advies",
    subtitle: "Voorkomen is beter dan genezen",
    description:
      "Ergonomisch advies, houdingsanalyse en preventieve oefenprogramma's. Investeer in je gezondheid.",
    longDescription:
      "De beste behandeling is voorkomen dat klachten ontstaan. Met preventieve screenings, ergonomisch advies en persoonlijke oefenprogramma's helpen we je om klachten voor te zijn. Ideaal voor wie veel zit, fysiek werk doet of sportblessures wil voorkomen.",
    whatToExpect: [
      "Houdingsanalyse en bewegingsscreening",
      "Ergonomisch werkplekadvies",
      "Preventief oefenprogramma",
      "Tips voor een gezonde leefstijl",
      "Periodieke check-ups",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Page() {
  return (
    <div className="bg-cream">
      {/* Simple Page Header */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-rust">Onze diensten</p>
          <h1 className="mt-2 text-charcoal">
            Specialistische zorg voor jouw beweging
          </h1>
          <p className="mt-6 max-w-2xl text-charcoal-light">
            Van acute klachten tot preventieve zorg. Wij bieden een breed
            scala aan behandelingen, altijd afgestemd op jouw specifieke
            situatie en doelen.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`${
            index % 2 === 0 ? "bg-white" : "bg-cream"
          } flex flex-col justify-center py-16 ${index >= 1 ? "min-h-screen" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  alt={service.title}
                  src={service.image}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-medium text-rust">
                  {service.subtitle}
                </p>
                <h2 className="mt-2 text-charcoal">{service.title}</h2>
                <p className="mt-6 text-base leading-7 text-charcoal-light">
                  {service.longDescription}
                </p>

                {/* What to expect */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-charcoal">
                    Wat kun je verwachten?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.whatToExpect.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 flex-none text-rust mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-charcoal-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <ArrowButton
                    text="Plan een afspraak"
                    href="/contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Simple CTA */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-medium text-white">
                Niet zeker welke behandeling?
              </h3>
              <p className="mt-2 text-white/70">
                Tijdens de intake bespreken we samen welke aanpak het beste past.
              </p>
            </div>
            <ArrowButton
              text="Neem contact op"
              href="/contact"
              background="#7A3321"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
