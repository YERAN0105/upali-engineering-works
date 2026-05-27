/* ─── Partner logos ─────────────────────────────────────────────────────────
   To add a real logo:
     1. Save the image in public/logos/  (PNG or SVG, ideally with a white or
        transparent background)
     2. Add  img: "/logos/your-file.png"  to the matching entry below
   Entries without `img` keep showing a text badge as a placeholder.
──────────────────────────────────────────────────────────────────────────── */
const LOGOS: { name: string; category: string; img?: string }[] = [
  { name: "Bank of Ceylon",       category: "bank"      },
  { name: "People's Bank",        category: "bank",     img: "/logos/peoples-bank-logo.png" },
  { name: "Commercial Bank",      category: "bank"      },
  { name: "Sampath Bank",         category: "bank"      },
  { name: "Hatton National Bank", category: "bank"      },
  { name: "Nations Trust Bank",   category: "bank"      },
  { name: "Ceylinco Insurance",   category: "insurance" },
  { name: "AIA Insurance",        category: "insurance" },
  { name: "Fairfirst Insurance",  category: "insurance" },
  { name: "Sri Lanka Insurance",  category: "insurance" },
  { name: "People's Leasing",     category: "leasing"   },
  { name: "Commercial Leasing",   category: "leasing"   },
];

const ACCENT: Record<string, string> = {
  bank:      "border-blue-200  text-slate-600",
  insurance: "border-green-200 text-slate-600",
  leasing:   "border-amber-200 text-slate-600",
};

function LogoCard({ name, category, img }: { name: string; category: string; img?: string }) {
  return (
    <div
      className={`
        flex items-center justify-center
        h-12 px-5 mx-4
        rounded border bg-white select-none
        ${ACCENT[category]}
      `}
    >
      {img ? (
        <img
          src={img}
          alt={name}
          className="h-8 max-w-[120px] object-contain"
        />
      ) : (
        <span className="text-sm font-medium whitespace-nowrap" aria-hidden="true">
          {name}
        </span>
      )}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section aria-label="Trusted partners" className="bg-slate-50 border-y border-slate-100 py-5 overflow-hidden">
      <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Trusted &amp; accepted by
      </p>

      {/* marquee track — list is duplicated so the loop is seamless */}
      <div className="marquee-outer">
        <div className="marquee-track">
          {LOGOS.map((l) => (
            <LogoCard key={l.name}          name={l.name} category={l.category} img={l.img} />
          ))}
          {/* duplicate for seamless loop */}
          {LOGOS.map((l) => (
            <LogoCard key={l.name + "-dup"} name={l.name} category={l.category} img={l.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
