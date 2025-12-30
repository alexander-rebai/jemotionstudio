"use client";

import ArrowButton from "@/components/ArrowButton";
import { useState } from "react";

const team = [
  {
    name: "Joyce",
    role: "Kinesitherapeut & Osteopaat I.O.",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Met jarenlange ervaring in de kinesitherapie en een passie voor osteopathie, helpt Joyce je om de oorzaak van je klachten te vinden. Ze gelooft in een holistische aanpak waarbij lichaam en geest samenkomen.",
  },
  {
    name: "Elien",
    role: "Kinesitherapeut & Sportrevalidatie",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Elien is gespecialiseerd in sportrevalidatie en begeleidt atleten en recreatieve sporters bij hun herstel. Haar hands-on aanpak en persoonlijke begeleiding zorgen voor duurzame resultaten.",
  },
];

const services = [
  {
    title: "Kinesitherapie",
    description:
      "Gerichte oefentherapie en manuele technieken voor het behandelen van bewegingsklachten, blessures en postoperatief herstel.",
  },
  {
    title: "Osteopathie I.O.",
    description:
      "Holistische behandeling van het lichaam waarbij we zoeken naar de oorzaak van klachten. Zachte manuele technieken voor herstel.",
  },
  {
    title: "Sportrevalidatie",
    description:
      "Gespecialiseerde begeleiding voor sporters bij blessures en terugkeer naar sport. Van recreant tot topsporter.",
  },
  {
    title: "Preventie & Advies",
    description:
      "Ergonomisch advies, houdingsanalyse en preventieve oefenprogramma's. Investeer in je gezondheid.",
  },
];

const stats = [
  { label: "Jaar ervaring", value: "15+" },
  { label: "Tevreden patienten", value: "2000+" },
];

export default function Page() {
  const [formData, setFormData] = useState({
    naam: "",
    telefoon: "",
    email: "",
    dienst: "",
    bericht: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.");
    setFormData({ naam: "", telefoon: "", email: "", dienst: "", bericht: "" });
  };

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-cream min-h-[calc(100vh-64px)] flex flex-col justify-center">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-rust/5 ring-1 ring-beige sm:-mr-80 lg:-mr-96"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            {/* Text content */}
            <div className="lg:col-span-1 lg:max-w-xl">
              <p className="text-sm font-medium text-rust">
                Praktijk voor beweging
              </p>
              <h1 className="mt-4 text-charcoal">
                Persoonlijke zorg voor jouw beweging
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
                Joyce en Elien helpen je bij bewegingsklachten, blessures en herstel.
                Met aandacht voor jou als persoon, in een moderne praktijk in Gent.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <ArrowButton text="Maak een afspraak" href="#contact" />
                <a
                  href="#over"
                  className="text-sm font-medium text-charcoal hover:text-rust transition-colors"
                >
                  Meer over ons <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Hero image */}
            <img
              alt="Kinesitherapie behandeling"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none"
            />
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-cream sm:h-32" />
      </section>

      {/* About/Story Section */}
      <section className="bg-white min-h-screen flex flex-col justify-center py-16" id="over">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Image with quote */}
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-charcoal px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  alt="Praktijk sfeerbeeld"
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  className="absolute inset-0 h-full w-full object-cover brightness-100 saturate-[0.9]"
                />
                <div className="absolute inset-0 bg-charcoal/70" />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="aspect-[1097/845] w-[68.5rem] bg-gradient-to-tr from-rust to-warm opacity-40"
                  />
                </div>
                <figure className="relative isolate">
                  <blockquote className="mt-6 text-xl font-medium leading-8 text-white">
                    <p className="text-white">
                      "Wij geloven dat goede zorg persoonlijk is. Daarom nemen we de tijd
                      om naar je te luisteren en samen te werken aan je herstel."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-6 text-white/80">
                    <strong className="font-medium text-white">Joyce & Elien</strong>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Story content */}
            <div>
              <div className="text-base leading-7 text-charcoal-light lg:max-w-lg">
                <p className="text-sm font-medium text-rust">Ons verhaal</p>
                <h2 className="mt-2 text-charcoal">
                  Van collega's naar eigen praktijk
                </h2>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Joyce en Elien leerden elkaar kennen als collega's in een kinesitherapiepraktijk.
                    Hun gedeelde passie voor persoonlijke zorg en holistische behandelingen
                    bracht hen samen.
                  </p>
                  <p className="mt-6">
                    Na jaren van samenwerken besloten ze hun droom waar te maken: een eigen praktijk
                    waar de patient centraal staat. Een plek waar je niet alleen behandeld wordt,
                    maar ook gehoord.
                  </p>
                  <p className="mt-6">
                    Vandaag combineren ze hun expertise in kinesitherapie, osteopathie en
                    sportrevalidatie. Met een hands-on aanpak en oprechte aandacht voor
                    elke patient.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm font-medium text-charcoal-light">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <a
                  href="#team"
                  className="text-sm font-medium text-rust hover:text-rust-dark transition-colors"
                >
                  Maak kennis met het team <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-cream min-h-screen flex flex-col justify-center py-16" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none xl:grid-cols-3">
            {/* Header */}
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-rust">Het team</p>
              <h2 className="mt-2 text-charcoal">
                Maak kennis met Joyce en Elien
              </h2>
              <p className="mt-6 text-base leading-7 text-charcoal-light">
                Twee gedreven therapeuten met een gedeelde visie: persoonlijke zorg
                die werkt. Samen brengen ze jarenlange ervaring en complementaire
                specialisaties.
              </p>
            </div>

            {/* Team members */}
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:col-span-2"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <div className="flex flex-col gap-6">
                    <img
                      alt={person.name}
                      src={person.imageUrl}
                      className="aspect-[4/5] w-full rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-charcoal">
                        {person.name}
                      </h3>
                      <p className="text-sm text-rust">{person.role}</p>
                      <p className="mt-4 text-sm leading-6 text-charcoal-light">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white min-h-screen flex flex-col justify-center py-16" id="diensten">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-sm font-medium text-rust">Onze diensten</p>
            <h2 className="mt-2 text-charcoal">
              Specialisaties
            </h2>
            <p className="mt-6 text-base leading-7 text-charcoal-light">
              Van acute klachten tot preventieve zorg. Wij bieden een breed scala
              aan behandelingen, altijd afgestemd op jouw specifieke situatie.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-cream p-8 rounded-2xl hover:bg-beige transition-colors duration-300"
                >
                  <dt className="text-lg font-medium text-charcoal">
                    {service.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-7 text-charcoal-light">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-medium text-white">
                Klaar om te starten?
              </h3>
              <p className="mt-2 text-white/70">
                Neem contact op voor een afspraak of stel je vraag.
              </p>
            </div>
            <ArrowButton
              text="Maak een afspraak"
              href="#contact"
              background="#7A3321"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white min-h-screen flex flex-col justify-center py-16" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="max-w-xl">
              <p className="text-sm font-medium text-rust">Contact</p>
              <h2 className="mt-2 text-charcoal">
                Maak een afspraak
              </h2>
              <p className="mt-6 text-base leading-7 text-charcoal-light">
                Klaar om te werken aan je herstel? Neem contact op of boek direct
                een afspraak. We reageren binnen 24 uur.
              </p>

              <dl className="mt-10 space-y-6 text-sm">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Adres</span>
                    <svg
                      className="h-6 w-6 text-rust"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </dt>
                  <dd className="text-charcoal-light">
                    Voorbeeldstraat 123
                    <br />
                    9000 Gent
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telefoon</span>
                    <svg
                      className="h-6 w-6 text-rust"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </dt>
                  <dd>
                    <a
                      href="tel:+3291234567"
                      className="text-charcoal-light hover:text-charcoal transition-colors"
                    >
                      +32 9 123 45 67
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Openingsuren</span>
                    <svg
                      className="h-6 w-6 text-rust"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </dt>
                  <dd className="text-charcoal-light">
                    Ma - Vr: 8:00 - 19:00
                    <br />
                    Za: 9:00 - 13:00
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-cream p-8 rounded-2xl">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Naam
                  </label>
                  <input
                    id="naam"
                    type="text"
                    value={formData.naam}
                    onChange={(e) =>
                      setFormData({ ...formData, naam: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefoon"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Telefoon
                  </label>
                  <input
                    id="telefoon"
                    type="tel"
                    value={formData.telefoon}
                    onChange={(e) =>
                      setFormData({ ...formData, telefoon: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="dienst"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Dienst
                  </label>
                  <select
                    id="dienst"
                    value={formData.dienst}
                    onChange={(e) =>
                      setFormData({ ...formData, dienst: e.target.value })
                    }
                    className="mt-2"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="kinesitherapie">Kinesitherapie</option>
                    <option value="osteopathie">Osteopathie I.O.</option>
                    <option value="sportrevalidatie">Sportrevalidatie</option>
                    <option value="preventie">Preventie & Advies</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="bericht"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="bericht"
                    value={formData.bericht}
                    onChange={(e) =>
                      setFormData({ ...formData, bericht: e.target.value })
                    }
                    placeholder="Beschrijf kort je klachten of vraag..."
                    rows={4}
                    className="mt-2 resize-none"
                  />
                </div>
              </div>
              <div className="mt-8">
                <ArrowButton text="Verstuur bericht" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
