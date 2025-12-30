"use client";

import ArrowButton from "@/components/ArrowButton";

const team = [
  {
    name: "Joyce",
    role: "Kinesitherapeut & Osteopaat I.O.",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Met jarenlange ervaring in de kinesitherapie en een passie voor osteopathie, helpt Joyce je om de oorzaak van je klachten te vinden. Ze gelooft in een holistische aanpak waarbij lichaam en geest samenkomen.",
    specialties: [
      "Osteopathie",
      "Chronische klachten",
      "Holistische behandeling",
      "Manuele therapie",
    ],
    education: [
      "Master Kinesitherapie - UGent",
      "Postgraduaat Osteopathie I.O.",
      "Bijscholing Dry Needling",
    ],
  },
  {
    name: "Elien",
    role: "Kinesitherapeut & Sportrevalidatie",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Elien is gespecialiseerd in sportrevalidatie en begeleidt atleten en recreatieve sporters bij hun herstel. Haar hands-on aanpak en persoonlijke begeleiding zorgen voor duurzame resultaten.",
    specialties: [
      "Sportrevalidatie",
      "Return-to-sport",
      "Blessurepreventie",
      "Functionele training",
    ],
    education: [
      "Master Kinesitherapie - KU Leuven",
      "Postgraduaat Sportrevalidatie",
      "FIFA Medical Certificate",
    ],
  },
];

const values = [
  {
    number: "01",
    title: "Persoonlijke aanpak",
    description:
      "Elke patient is uniek. We nemen de tijd om naar je te luisteren en stellen een behandelplan op maat samen.",
  },
  {
    number: "02",
    title: "Holistische visie",
    description:
      "We kijken verder dan de klacht alleen. Lichaam, geest en leefstijl vormen samen het plaatje.",
  },
  {
    number: "03",
    title: "Evidence-based",
    description:
      "Onze behandelingen zijn gebaseerd op de nieuwste wetenschappelijke inzichten en bewezen technieken.",
  },
  {
    number: "04",
    title: "Transparante communicatie",
    description:
      "We leggen uit wat we doen en waarom. Je weet altijd waar je aan toe bent.",
  },
];

export default function Page() {
  return (
    <div className="bg-cream">
      {/* Simple Page Header */}
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-rust">Over ons</p>
          <h1 className="mt-2 text-charcoal">
            Maak kennis met Joyce en Elien
          </h1>
          <p className="mt-6 max-w-2xl text-charcoal-light">
            Twee gedreven therapeuten met een gedeelde visie: persoonlijke zorg
            die werkt. Samen brengen we jarenlange ervaring en complementaire
            specialisaties.
          </p>
        </div>
      </section>

      {/* Team Section - Detailed Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-cream rounded-2xl p-8"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    alt={person.name}
                    src={person.imageUrl}
                    className="aspect-square w-32 sm:w-40 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-charcoal">
                      {person.name}
                    </h2>
                    <p className="text-sm text-rust mt-1">{person.role}</p>
                    <p className="mt-4 text-sm leading-6 text-charcoal-light">
                      {person.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Specialties */}
                  <div>
                    <h4 className="text-sm font-medium text-charcoal">
                      Specialisaties
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {person.specialties.map((specialty, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-charcoal-light"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-sm font-medium text-charcoal">
                      Opleiding
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {person.education.map((edu, i) => (
                        <li key={i} className="text-sm text-charcoal-light">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Simple text layout */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <div>
              <p className="text-sm font-medium text-rust">Ons verhaal</p>
              <h2 className="mt-2 text-charcoal">
                Van collega's naar eigen praktijk
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-light">
                <p>
                  Joyce en Elien leerden elkaar kennen als collega's in een
                  kinesitherapiepraktijk. Hun gedeelde passie voor persoonlijke
                  zorg en holistische behandelingen bracht hen samen.
                </p>
                <p>
                  Na jaren van samenwerken besloten ze hun droom waar te maken:
                  een eigen praktijk waar de patient centraal staat. Een plek
                  waar je niet alleen behandeld wordt, maar ook gehoord.
                </p>
                <p>
                  Vandaag combineren ze hun expertise in kinesitherapie,
                  osteopathie en sportrevalidatie. Met een hands-on aanpak en
                  oprechte aandacht voor elke patient.
                </p>
              </div>

              {/* Stats inline */}
              <div className="mt-10 flex gap-12">
                <div>
                  <p className="text-3xl font-semibold text-charcoal">15+</p>
                  <p className="text-sm text-charcoal-light">Jaar ervaring</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-charcoal">2000+</p>
                  <p className="text-sm text-charcoal-light">Tevreden patienten</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                alt="Praktijk sfeerbeeld"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Numbered list style */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            {/* Header */}
            <div className="lg:col-span-1">
              <p className="text-sm font-medium text-rust">Onze aanpak</p>
              <h2 className="mt-2 text-charcoal">Waar wij voor staan</h2>
              <p className="mt-6 text-charcoal-light">
                Onze behandelingen zijn gebaseerd op enkele kernwaarden die ons
                onderscheiden.
              </p>
            </div>

            {/* Values list */}
            <div className="mt-10 lg:mt-0 lg:col-span-2">
              <div className="space-y-8">
                {values.map((value) => (
                  <div
                    key={value.number}
                    className="flex gap-6 pb-8 border-b border-charcoal/10 last:border-0"
                  >
                    <span className="text-2xl font-light text-rust">
                      {value.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-charcoal">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal-light">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-medium text-white">
                Klaar om kennis te maken?
              </h3>
              <p className="mt-2 text-white/70">
                Neem contact op voor een afspraak.
              </p>
            </div>
            <ArrowButton
              text="Maak een afspraak"
              href="/contact"
              background="#7A3321"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
