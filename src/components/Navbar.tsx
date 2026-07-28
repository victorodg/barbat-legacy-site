import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
  { href: "#localizacao", label: "Localização" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--brand-green)]/95 backdrop-blur shadow-lg shadow-black/20"
          : "bg-[color:var(--brand-green)]/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img src={"/barbat-logo-verde.png"} alt="Barbearia Barbat" className="h-12 md:h-14 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest text-[color:var(--brand-cream)] hover:text-[color:var(--brand-gold)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#app"
              className="inline-flex items-center rounded-sm border border-[color:var(--brand-gold)] bg-[color:var(--brand-green-dark)] px-5 py-2.5 text-sm font-medium tracking-wide text-[color:var(--brand-cream)] hover:bg-[color:var(--brand-gold)] hover:text-[color:var(--brand-brown)] transition-colors"
            >
              Agendar pelo App
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-[color:var(--brand-cream)] p-2"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 space-y-3 border-t border-white/10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-[color:var(--brand-cream)] uppercase tracking-widest text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#app"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-[color:var(--brand-gold)] px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-brown)] hover:bg-[color:var(--brand-cream)] transition-colors"
            >
              Agendar pelo App
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
