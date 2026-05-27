const QUICK_LINKS = [
  { label: "About",           href: "#about"       },
  { label: "Vehicle Valuation", href: "#valuation" },
  { label: "Spare Parts",     href: "#spare-parts" },
  { label: "Why Choose Us",   href: "#why-us"      },
  { label: "Our Team",        href: "#team"        },
  { label: "Branches",        href: "#branches"    },
  { label: "Contact",         href: "#contact"     },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-slate-300" role="contentinfo">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber" aria-hidden="true">
                  <circle cx="16" cy="16" r="4" fill="currentColor"/>
                  <path d="M16 2v4M16 26v4M2 16h4M26 16h4M5.64 5.64l2.83 2.83M23.53 23.53l2.83 2.83M23.53 8.47l2.83-2.83M5.64 26.36l2.83-2.83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Upali Engineering Works
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Sri Lanka&apos;s trusted vehicle valuation and engineering services
              provider. Branches in Colombo, Kandy, Galle, and Jaffna.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com/upaliengineering"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/14 transition-colors duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/94771234567`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/14 transition-colors duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="block text-xs text-slate-500 uppercase tracking-wide mb-0.5">Head Office</span>
                123 Galle Road, Colombo 03
              </li>
              <li>
                <span className="block text-xs text-slate-500 uppercase tracking-wide mb-0.5">Phone</span>
                <a href="tel:+94112345678" className="hover:text-white transition-colors duration-150">
                  +94 11 234 5678
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-500 uppercase tracking-wide mb-0.5">Email</span>
                <a href="mailto:info@upaliengineering.lk" className="hover:text-white transition-colors duration-150 break-all">
                  info@upaliengineering.lk
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-500 uppercase tracking-wide mb-0.5">Hours</span>
                Mon – Fri: 8am – 6pm<br />
                Saturday: 8am – 2pm
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © {year} Upali Engineering Works. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Professional Vehicle Valuations · Sri Lanka
          </p>
        </div>
      </div>

    </footer>
  );
}
