"use client";

import ArrowButton from "@/components/ArrowButton";
import { useState } from "react";

const faq = [
  {
    question: "Hoe lang duurt een behandeling?",
    answer:
      "Een standaard behandeling duurt 30 tot 45 minuten. Bij een eerste consultatie rekenen we iets meer tijd voor een uitgebreide intake.",
  },
  {
    question: "Heb ik een verwijzing nodig?",
    answer:
      "Voor kinesitherapie heb je een voorschrift van je huisarts nodig om terugbetaling te krijgen van je mutualiteit. Voor osteopathie is geen verwijzing nodig.",
  },
  {
    question: "Wordt de behandeling terugbetaald?",
    answer:
      "Kinesitherapie wordt gedeeltelijk terugbetaald door je mutualiteit. Voor osteopathie hangt de terugbetaling af van je aanvullende verzekering.",
  },
  {
    question: "Kan ik dezelfde dag nog terecht?",
    answer:
      "Wij proberen altijd zo snel mogelijk een afspraak te voorzien. Bij acute klachten doen we ons best om je dezelfde of volgende dag te zien.",
  },
];

export default function Page() {
  const [formData, setFormData] = useState({
    naam: "",
    telefoon: "",
    email: "",
    dienst: "",
    bericht: "",
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op."
    );
    setFormData({
      naam: "",
      telefoon: "",
      email: "",
      dienst: "",
      bericht: "",
    });
  };

  return (
    <div className="bg-cream">
      {/* Contact Form & Info Section - directly at top */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="max-w-xl">
              <p className="text-sm font-medium text-rust">Contact</p>
              <h1 className="mt-2 text-charcoal">Maak een afspraak</h1>
              <p className="mt-6 text-base leading-7 text-charcoal-light">
                Klaar om te werken aan je herstel? Neem contact op of boek
                direct een afspraak. We reageren binnen 24 uur.
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
                    <span className="sr-only">E-mail</span>
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@praktijk.be"
                      className="text-charcoal-light hover:text-charcoal transition-colors"
                    >
                      info@praktijk.be
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
                    <span className="font-medium text-charcoal">
                      Openingsuren
                    </span>
                    <br />
                    Maandag - Vrijdag: 8:00 - 19:00
                    <br />
                    Zaterdag: 9:00 - 13:00
                  </dd>
                </div>
              </dl>

              {/* Parking info */}
              <div className="mt-10 p-6 bg-white rounded-2xl">
                <h3 className="text-base font-medium text-charcoal">
                  Bereikbaarheid
                </h3>
                <p className="mt-2 text-sm text-charcoal-light">
                  Onze praktijk is gemakkelijk bereikbaar met de auto en het
                  openbaar vervoer. Gratis parking beschikbaar voor de deur.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl h-fit"
            >
              <h3 className="text-lg font-medium text-charcoal mb-6">
                Stuur ons een bericht
              </h3>
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-sm font-medium text-charcoal"
                  >
                    Naam *
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
                    placeholder="Uw naam"
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
                    placeholder="+32 ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal"
                  >
                    E-mail *
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
                    placeholder="uw@email.be"
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
                    <option value="andere">Andere</option>
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
              <p className="mt-4 text-xs text-charcoal-light">
                * Verplichte velden. We reageren binnen 24 uur.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-sm font-medium text-rust">
              Veelgestelde vragen
            </p>
            <h2 className="mt-2 text-charcoal">Praktische informatie</h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl lg:mx-0">
            <dl className="space-y-4">
              {faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-2xl overflow-hidden"
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="text-base font-medium text-charcoal">
                        {item.question}
                      </span>
                      <span className="ml-6 flex-shrink-0">
                        <svg
                          className={`h-5 w-5 text-rust transition-transform duration-200 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  {openFaq === index && (
                    <dd className="px-6 pb-5 text-sm text-charcoal-light">
                      {item.answer}
                    </dd>
                  )}
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
                Liever telefonisch?
              </h3>
              <p className="mt-2 text-white/70">
                Bel ons gerust voor een afspraak.
              </p>
            </div>
            <a
              href="tel:+3291234567"
              className="group flex items-center justify-center gap-2 px-7 h-[52px] bg-rust hover:bg-rust-dark text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors"
            >
              <svg
                className="h-5 w-5"
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
              +32 9 123 45 67
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
