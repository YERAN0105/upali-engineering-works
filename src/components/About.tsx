import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section
      id="about"
      className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-white scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text content ── */}
          <FadeInSection delay={150} className="order-1 lg:order-2">
            <div>
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-5"
              >
                A Legacy of Trust in Vehicle Valuation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Established in [Year], <strong>Upali Engineering Works</strong> has
                grown to become one of Sri Lanka&apos;s most respected vehicle
                valuation and engineering service providers. With decades of combined
                experience, our certified valuers have assessed thousands of vehicles
                for individuals, banks, insurance companies, and courts across
                the island.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From our head office in Colombo to branches in Kandy, Galle, and
                Jaffna, we are conveniently located to serve every customer with
                accuracy, professionalism, and speed. Our valuation certificates are
                accepted by all major banks, financial institutions, insurance
                companies, and the Department of Motor Traffic (DMT).
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "25+", label: "Years of Experience" },
                  { value: "5,000+", label: "Vehicles Valued" },
                  { value: "20+", label: "Banks & Insurers" },
                  { value: "4", label: "Branches Nationwide" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                  >
                    <p className="text-2xl font-extrabold text-navy">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* ── Shop photo placeholder ── */}
          <FadeInSection className="order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Replace this block with your actual shop photo */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400 p-8 min-h-[280px]">
                <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-center text-slate-400">
                  Add your shop photo here<br />
                  <span className="text-xs">(public/about-shop.jpg)</span>
                </p>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
