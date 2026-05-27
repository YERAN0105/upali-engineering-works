import FadeInSection from "./FadeInSection";

const WHATSAPP_NUMBER = "94771234567"; // ← replace with your real WhatsApp number (no + or spaces)
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about a vehicle valuation."
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-navy scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeInSection>
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3"
            >
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-slate-300">
              Reach us on WhatsApp, email, or social media — we&apos;re here to help.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">

          {/* WhatsApp */}
          <FadeInSection delay={0}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/14 hover:-translate-y-0.5 transition-all duration-200 group"
              aria-label="Chat with us on WhatsApp"
            >
              {/* WhatsApp icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center mb-4 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">WhatsApp</h3>
              <p className="text-slate-400 text-xs">Chat with us instantly</p>
              <p className="text-amber text-xs font-semibold mt-1">+94 77 123 4567</p>
            </a>
          </FadeInSection>

          {/* Email */}
          <FadeInSection delay={80}>
            <a
              href="mailto:info@upaliengineering.lk"
              className="flex flex-col items-center text-center bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/14 hover:-translate-y-0.5 transition-all duration-200 group"
              aria-label="Send us an email"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber flex items-center justify-center mb-4 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">Email</h3>
              <p className="text-slate-400 text-xs">We reply within 24 hours</p>
              <p className="text-amber text-xs font-semibold mt-1 break-all">
                info@upaliengineering.lk
              </p>
            </a>
          </FadeInSection>

          {/* Facebook */}
          <FadeInSection delay={160}>
            <a
              href="https://facebook.com/upaliengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/14 hover:-translate-y-0.5 transition-all duration-200 group sm:col-span-2 lg:col-span-1"
              aria-label="Visit us on Facebook"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center mb-4 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">Facebook</h3>
              <p className="text-slate-400 text-xs">Follow us for updates</p>
              <p className="text-amber text-xs font-semibold mt-1">
                @upaliengineering
              </p>
            </a>
          </FadeInSection>

        </div>

        {/* Divider note */}
        <FadeInSection delay={200}>
          <p className="text-center text-slate-400 text-sm mt-10">
            Prefer to visit in person?{" "}
            <a href="#branches" className="text-amber underline underline-offset-2 hover:text-amber-light transition-colors">
              Find your nearest branch →
            </a>
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}
