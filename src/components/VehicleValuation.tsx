import FadeInSection from "./FadeInSection";
import ValuationForm from "./ValuationForm";

const PURPOSES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Insurance Claims & Policies",
    desc:
      "Accurate market-value assessments for motor insurance claims, policy underwriting, and total-loss settlements. Accepted by all leading Sri Lankan insurers.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Bank Loans & Leasing",
    desc:
      "Certified valuations for vehicle loans, finance lease agreements, and mortgage-backed lending. Trusted by all major banks and registered finance companies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Vehicle Ownership Transfers",
    desc:
      "Official valuation certificates required by the Department of Motor Traffic (DMT) for transferring vehicle ownership — fast, accurate, and properly documented.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Legal & Court Purposes",
    desc:
      "Court-admissible valuation reports for accident disputes, estate settlements, insurance litigation, or any other legal proceedings. Our reports are prepared to the required standard.",
  },
];

const VEHICLE_TYPES = [
  "Cars — Sedan, Hatchback, SUV, Crossover",
  "Vans & Minivans",
  "Lorries & Trucks",
  "Motorcycles & Scooters",
  "Three-Wheelers (Tuk-Tuk)",
  "Buses & Minibuses",
  "Heavy Machinery & Construction Equipment",
  "Other Commercial Vehicles",
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Submit Your Enquiry",
    desc: "Fill in the short form below with your name, contact number, and vehicle details.",
  },
  {
    step: "2",
    title: "We Call You Back",
    desc: "One of our team members will contact you within 24 hours to confirm details and book an inspection.",
  },
  {
    step: "3",
    title: "Vehicle Inspection",
    desc: "Bring your vehicle to the nearest branch, or request an on-site inspection at your location.",
  },
  {
    step: "4",
    title: "Receive Your Report",
    desc: "Get your certified valuation certificate, ready for submission to any bank, insurer, or court.",
  },
];

export default function VehicleValuation() {
  return (
    <section
      id="valuation"
      className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-slate-50 scroll-mt-20"
      aria-labelledby="valuation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Our Main Service
            </p>
            <h2
              id="valuation-heading"
              className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4"
            >
              Professional Vehicle Valuation Services
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Accurate, certified valuations accepted by all major Sri Lankan
              banks, insurance companies, and courts.
            </p>
          </div>
        </FadeInSection>

        {/* ── Purpose cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PURPOSES.map((p, i) => (
            <FadeInSection key={p.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-navy/8 text-navy flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* ── Vehicles covered + How it works ── */}
        <div className="grid lg:grid-cols-2 gap-10 mb-8">

          <FadeInSection>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm h-full">
              <h3 className="text-lg font-bold text-navy mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber/10 text-amber flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-5a1 1 0 00-.293-.707L17 5.586A1 1 0 0016.293 5H13a1 1 0 00-1 1v2H3V5a1 1 0 00-1-1H3z" />
                  </svg>
                </span>
                Vehicles We Value
              </h3>
              <ul className="space-y-2.5">
                {VEHICLE_TYPES.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm h-full">
              <h3 className="text-lg font-bold text-navy mb-6">How to Get a Valuation</h3>
              <ol className="space-y-5">
                {HOW_IT_WORKS.map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-semibold text-navy text-sm">{step.title}</p>
                      <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeInSection>
        </div>

        {/* ── Call-us nudge ── */}
        <FadeInSection>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-5 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-navy/8 text-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">Prefer to talk to someone?</p>
                <p className="text-slate-500 text-sm mt-0.5">
                  Simply call any of our branches — our staff will guide you through the process.
                </p>
              </div>
            </div>
            <a
              href="#branches"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              View Branch Numbers
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeInSection>

        {/* ── Enquiry form ── */}
        <FadeInSection>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-navy px-8 py-6">
              <h3 className="text-xl font-bold text-white">Request a Valuation</h3>
              <p className="text-slate-300 text-sm mt-1">
                Fill in your details below — we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <ValuationForm />
            </div>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
