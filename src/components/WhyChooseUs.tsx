import FadeInSection from "./FadeInSection";

const STATS = [
  { value: "25+",    label: "Years of Experience" },
  { value: "5,000+", label: "Vehicles Valued" },
  { value: "20+",    label: "Banks & Insurers Trust Us" },
  { value: "4",      label: "Branches Across Sri Lanka" },
];

const TRUST_POINTS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certified & Experienced Valuers",
    desc:  "All valuations are conducted by qualified professionals with years of hands-on experience in automotive engineering.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Accepted by All Major Banks & Insurers",
    desc:  "Our certificates are recognised and accepted by all leading banks, finance companies, and insurance providers in Sri Lanka.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast Turnaround — Reports in 24 Hours",
    desc:  "We understand your time is valuable. Most valuations are completed and certified within one working day.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Court-Admissible Reports",
    desc:  "Our valuation reports are prepared to the legal standard required for use in courts and official proceedings.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Island-Wide Coverage",
    desc:  "With branches in Colombo, Kandy, Galle, and Jaffna, we are conveniently accessible from anywhere in Sri Lanka.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Transparent & Impartial",
    desc:  "Our valuations are independent and objective — giving you, your bank, or your insurer complete confidence in the result.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-navy scroll-mt-20"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <FadeInSection>
          <div className="text-center mb-14">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
            >
              Trusted by Thousands Across Sri Lanka
            </h2>
          </div>
        </FadeInSection>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 80}>
              <div className="bg-white/8 border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/12 transition-colors duration-200">
                <p className="text-3xl sm:text-4xl font-extrabold text-amber mb-1">
                  {s.value}
                </p>
                <p className="text-slate-300 text-sm font-medium">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* ── Trust points ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_POINTS.map((tp, i) => (
            <FadeInSection key={tp.title} delay={i * 60}>
              <div className="flex gap-4 bg-white/6 border border-white/8 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-200 h-full">
                <div className="w-11 h-11 rounded-xl bg-amber/10 text-amber flex items-center justify-center flex-shrink-0">
                  {tp.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{tp.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tp.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
