import FadeInSection from "./FadeInSection";

const TEAM = [
  {
    name:    "Mr. Upali Ratnayake",
    role:    "Founder & Chief Valuer",
    initials: "UR",
    bio:     "Over 25 years of experience in automotive engineering and vehicle valuation. Founded Upali Engineering Works to provide reliable, impartial valuations across Sri Lanka.",
    color:   "bg-navy text-white",
  },
  {
    name:    "Mr. Sameera Ratnayake",
    role:    "Senior Vehicle Valuer",
    initials: "KS",
    bio:     "Specialist in commercial vehicles, heavy machinery, and fleet valuations. Trusted by several leading banks and logistics companies.",
    color:   "bg-navy-light text-white",
  },
  {
    name:    "Mrs. Nirosha Fernando",
    role:    "Branch Manager — Colombo",
    initials: "NF",
    bio:     "Manages day-to-day operations of the Colombo head office. Ensures every client receives prompt, professional service.",
    color:   "bg-amber text-white",
  },
  {
    name:    "Mr. Ruwan Dissanayake",
    role:    "Technical Specialist",
    initials: "RD",
    bio:     "Expert in imported and reconditioned vehicles. Assists with complex valuations involving modifications or special equipment.",
    color:   "bg-slate-600 text-white",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-white scroll-mt-20"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight"
            >
              The People Behind Your Valuation
            </h2>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <FadeInSection key={member.name} delay={i * 80}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden h-full flex flex-col">

                {/* Photo placeholder — replace with <img> when you have real photos */}
                <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                  <div className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center text-2xl font-bold`}
                    aria-label={`Placeholder photo for ${member.name}`}
                  >
                    {member.initials}
                  </div>
                  <p className="absolute bottom-2 text-xs text-slate-400">
                    Replace with real photo
                  </p>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-navy text-base">{member.name}</h3>
                  <p className="text-amber text-xs font-semibold uppercase tracking-wide mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>

              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
