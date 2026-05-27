import FadeInSection from "./FadeInSection";

const BRANCHES = [
  {
    name:    "Colombo Branch (Head Office)",
    contact: "Mr. Kamal Perera",
    phone:   "+94 11 234 5678",
    phoneTel: "+94112345678",
    address: "123 Galle Road, Colombo 03",
    mapsUrl: "https://maps.google.com/?q=Galle+Road+Colombo+03",
    hours: [
      "Mon – Fri: 8:00 am – 6:00 pm",
      "Saturday:  8:00 am – 2:00 pm",
      "Sunday:    Closed",
    ],
    badge: "HQ",
  },
  {
    name:    "Kandy Branch",
    contact: "Mrs. Ayesha Fernando",
    phone:   "+94 81 234 5678",
    phoneTel: "+94812345678",
    address: "456 Peradeniya Road, Kandy",
    mapsUrl: "https://maps.google.com/?q=Peradeniya+Road+Kandy",
    hours: [
      "Mon – Fri: 8:00 am – 6:00 pm",
      "Saturday:  8:00 am – 2:00 pm",
      "Sunday:    Closed",
    ],
    badge: null,
  },
  {
    name:    "Galle Branch",
    contact: "Mr. Pradeep Jayasinghe",
    phone:   "+94 91 234 5678",
    phoneTel: "+94912345678",
    address: "789 Matara Road, Galle",
    mapsUrl: "https://maps.google.com/?q=Matara+Road+Galle",
    hours: [
      "Mon – Fri: 8:00 am – 6:00 pm",
      "Saturday:  8:00 am – 2:00 pm",
      "Sunday:    Closed",
    ],
    badge: null,
  },
  {
    name:    "Jaffna Branch",
    contact: "Mr. Siva Krishnamurthy",
    phone:   "+94 21 234 5678",
    phoneTel: "+94212345678",
    address: "321 Hospital Road, Jaffna",
    mapsUrl: "https://maps.google.com/?q=Hospital+Road+Jaffna",
    hours: [
      "Mon – Fri: 8:00 am – 5:00 pm",
      "Saturday:  8:00 am – 1:00 pm",
      "Sunday:    Closed",
    ],
    badge: null,
  },
];

export default function Branches() {
  return (
    <section
      id="branches"
      className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-slate-50 scroll-mt-20"
      aria-labelledby="branches-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Our Branches
            </p>
            <h2
              id="branches-heading"
              className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight"
            >
              Find Us Near You
            </h2>
            <p className="text-slate-500 mt-3">
              Visit any branch for a valuation, spare parts, or any enquiry.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {BRANCHES.map((branch, i) => (
            <FadeInSection key={branch.name} delay={i * 80}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden h-full flex flex-col">

                {/* Card header */}
                <div className="bg-navy px-5 py-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-white text-sm leading-snug">
                      {branch.name}
                    </h3>
                    {branch.badge && (
                      <span className="flex-shrink-0 bg-amber text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                        {branch.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs mt-1">{branch.contact}</p>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1 gap-4">

                  {/* Phone — opens the phone dialler on mobile */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/10 text-amber flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${branch.phoneTel}`}
                        className="text-navy font-semibold text-sm hover:text-amber transition-colors duration-150"
                        aria-label={`Call ${branch.name}: ${branch.phone}`}
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address — links to Google Maps */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/10 text-amber flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                        Address
                      </p>
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy text-sm hover:text-amber underline underline-offset-2 decoration-dotted transition-colors duration-150"
                        aria-label={`Open ${branch.address} in Google Maps`}
                      >
                        {branch.address}
                      </a>
                    </div>
                  </div>

                  {/* Opening hours */}
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-amber/10 text-amber flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
                        Opening Hours
                      </p>
                      <ul className="space-y-0.5">
                        {branch.hours.map((h) => (
                          <li key={h} className="text-slate-600 text-xs leading-relaxed">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Maps button */}
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 text-slate-600 text-xs font-medium hover:border-navy hover:text-navy hover:bg-slate-50 transition-colors duration-150"
                    aria-label={`Get directions to ${branch.name}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Open in Google Maps
                  </a>

                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
