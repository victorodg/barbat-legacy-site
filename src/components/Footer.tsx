import { Instagram, MessageCircle } from "lucide-react";
import { Ornament } from "./Ornament";
import { INSTAGRAM_LINK, WHATSAPP_LINK } from "@/lib/barbat";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#app", label: "App" },
  { href: "#contato", label: "Contato" },
  { href: "#localizacao", label: "Localização" },
];

const iconLink =
  "grid h-11 w-11 place-items-center rounded-full border border-[color:var(--brand-cream)]/30 hover:bg-[color:var(--brand-gold)] hover:text-[color:var(--brand-brown)] hover:border-[color:var(--brand-gold)] transition-colors";

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-green)] text-[color:var(--brand-cream)] py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <img
          src="/barbat-logo.png"
          alt="Barbearia Barbat"
          width={368}
          height={184}
          loading="lazy"
          className="mx-auto h-16 w-auto"
        />
        <p className="mt-4 font-display italic text-lg text-[color:var(--brand-gold-light)]">
          De pai para filho, de geração em geração
        </p>
        <Ornament className="mx-auto w-40 mt-6 mb-8" />

        <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest hover:text-[color:var(--brand-gold-light)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Barbat"
            className={iconLink}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Barbat"
            className={iconLink}
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-[color:var(--brand-cream)]/75">
          © {new Date().getFullYear()} Barbat Barbearia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
