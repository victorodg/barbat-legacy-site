import { Ornament } from "./Ornament";
import { WHATSAPP_AGENDAR } from "@/lib/barbat";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/hero.webp"
        alt="Barbeiro aparando a barba de um cliente na Barbat"
        width={1920}
        height={1095}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-[color:var(--brand-cream)]">
        <p className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-xs text-[color:var(--brand-gold)] mb-6">
          Tucuruvi · São Paulo
        </p>
        <Ornament className="mx-auto w-48 mb-8" />
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[1.05] font-medium">
          Barbat
          <span className="block italic text-[color:var(--brand-gold)]">Barbearia</span>
        </h1>
        <Ornament className="mx-auto w-48 mt-8 mb-8" />
        <p className="mx-auto max-w-2xl font-display italic text-xl md:text-2xl text-[color:var(--brand-cream)]/90">
          De geração em geração, o mesmo cuidado desde 1971.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#app"
            className="inline-flex items-center justify-center rounded-sm bg-[color:var(--brand-green)] border border-[color:var(--brand-gold)] px-8 py-4 text-sm uppercase tracking-widest font-medium text-[color:var(--brand-cream)] hover:bg-[color:var(--brand-gold)] hover:text-[color:var(--brand-brown)] transition-colors"
          >
            Agendar pelo App
          </a>
          <a
            href={WHATSAPP_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-[color:var(--brand-cream)]/60 px-8 py-4 text-sm uppercase tracking-widest font-medium text-[color:var(--brand-cream)] hover:bg-[color:var(--brand-cream)] hover:text-[color:var(--brand-brown)] transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
