"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",       href: "#about"      },
  { label: "Valuation",   href: "#valuation"  },
  { label: "Spare Parts", href: "#spare-parts" },
  { label: "Why Us",      href: "#why-us"     },
  { label: "Our Team",    href: "#team"       },
  { label: "Branches",    href: "#branches"   },
  { label: "Contact",     href: "#contact"    },
];

export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo + business name ── */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Upali Engineering Works – home">
            {/* Replace this SVG with your actual logo image */}
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy-light transition-colors duration-200">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber" aria-hidden="true">
                <circle cx="16" cy="16" r="4" fill="currentColor"/>
                <path
                  d="M16 2v4M16 26v4M2 16h4M26 16h4M5.64 5.64l2.83 2.83M23.53 23.53l2.83 2.83M23.53 8.47l2.83-2.83M5.64 26.36l2.83-2.83"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-navy text-base lg:text-lg tracking-tight block">
                Upali Engineering
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide block -mt-0.5">
                Works
              </span>
            </div>
          </a>

          {/* ── Desktop navigation ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#valuation"
              className="ml-3 px-4 py-2 rounded-lg bg-amber text-white text-sm font-semibold hover:bg-amber-dark transition-colors duration-150 shadow-sm"
            >
              Request Valuation
            </a>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-navy hover:bg-slate-100 transition-colors duration-150"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#valuation"
              onClick={closeMenu}
              className="mt-2 px-4 py-3 rounded-lg bg-amber text-white text-sm font-semibold text-center hover:bg-amber-dark transition-colors duration-150"
            >
              Request a Valuation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
