import FadeInSection from "./FadeInSection";

export default function SpareParts() {
  return (
    <section
      id="spare-parts"
      className="pt-4 pb-20 bg-white scroll-mt-20"
      aria-labelledby="spare-parts-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="bg-navy rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 p-8 lg:p-10">

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Text */}
              <div className="text-center md:text-left flex-1">
                <h2
                  id="spare-parts-heading"
                  className="text-xl sm:text-2xl font-bold text-white mb-2"
                >
                  Vehicle Spare Parts Also Available
                </h2>
                <p className="text-slate-300 leading-relaxed max-w-2xl">
                  In addition to our valuation services, Upali Engineering Works
                  stocks a range of quality vehicle spare parts. Visit any of
                  our branches or contact us to check availability.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber text-white font-semibold text-sm hover:bg-amber-dark transition-colors duration-200 shadow-md shadow-black/20"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
