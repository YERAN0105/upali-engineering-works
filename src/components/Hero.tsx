export default function Hero() {
  return (
    <section
      className="relative bg-navy pt-16 lg:pt-20 overflow-hidden"
      aria-label="Hero — Upali Engineering Works"
    >
      {/* Subtle radial glow in the background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 40%, #1a4a8a 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text ── */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 text-amber text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" aria-hidden="true" />
              Trusted Since [Year] · Island-Wide Service
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Upali<br />
              <span className="text-amber">Engineering</span><br />
              Works
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sri Lanka&apos;s trusted vehicle valuation specialists —
              professional, certified reports for insurance, bank loans,
              leasing, transfers, and court purposes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#valuation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber text-white font-semibold text-base hover:bg-amber-dark transition-colors duration-200 shadow-lg shadow-amber/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Request a Valuation
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>

            {/* Quick trust badges */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                "All Major Banks",
                "All Insurers",
                "DMT Accepted",
                "Court Admissible",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium"
                >
                  <svg className="w-3.5 h-3.5 text-amber flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: placeholder hero image ── */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden bg-navy-light border border-white/10 shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Replace this block with an <img> or next/image once you have a real photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy-dark flex flex-col items-center justify-center text-white/40 p-8">
                <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-center leading-relaxed">
                  Replace with a photo of your shop exterior<br />
                  (e.g. <code className="text-xs bg-white/10 px-1 rounded">public/hero-image.jpg</code>)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="w-full overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 sm:h-14">
          <path fill="white" d="M0,40 C360,0 1080,80 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
