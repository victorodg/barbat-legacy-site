import { Ornament } from "./Ornament";
import { useReveal } from "@/hooks/use-reveal";

const APP_STORE = "https://apps.apple.com/br/app/barbat-barbearia/id6468892274";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=br.com.starapp.barbatbarbearia&hl=pt";

const servicos = [
  {
    title: "Corte",
    text: "Cortes clássicos, modernos e sob medida, executados com precisão por barbeiros experientes.",
  },
  {
    title: "Barba",
    text: "Modelagem, aparo e navalha com toalha quente — o ritual completo do cuidado masculino.",
  },
  {
    title: "Combo Corte + Barba",
    text: "A experiência Barbat completa: cabelo e barba no ponto, com todo o cuidado da casa.",
  },
];

export function StoreButtons({ dark = false }: { dark?: boolean }) {
  const base =
    "inline-flex items-center gap-3 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors";
  const style = dark
    ? "bg-[color:var(--brand-cream)] text-[color:var(--brand-brown)] hover:bg-[color:var(--brand-gold)]"
    : "bg-[color:var(--brand-brown)] text-[color:var(--brand-cream)] hover:bg-[color:var(--brand-green)]";
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 12.04c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.63 1.1-4.58 1.1-.94 0-2.4-1.07-3.94-1.04-2.03.03-3.9 1.18-4.94 3-2.11 3.66-.54 9.06 1.51 12.03 1 1.45 2.19 3.08 3.74 3.02 1.5-.06 2.07-.97 3.89-.97 1.8 0 2.33.97 3.92.94 1.62-.03 2.64-1.48 3.63-2.94 1.15-1.69 1.62-3.33 1.65-3.42-.04-.02-3.15-1.21-3.18-4.81zM14.04 3.36c.83-1.01 1.39-2.41 1.24-3.81-1.19.05-2.63.8-3.49 1.8-.77.89-1.44 2.31-1.26 3.69 1.33.1 2.68-.68 3.51-1.68z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-widest opacity-80">Baixar na</div>
          <div className="text-base">App Store</div>
        </div>
      </a>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.6 1.4c-.4.4-.6.9-.6 1.6v18c0 .7.2 1.2.6 1.6l10.4-10.6L3.6 1.4zm12 8.4L5.5.9C5.2.8 4.9.8 4.6.9l10.5 10.6 1.5-1.7zM20.4 10.4l-3.2-1.9-1.8 2 1.8 2 3.2-1.9c1-.6 1-1.6 0-2.2zM4.6 23.1c.3.1.6.1.9 0l10.1-8.9-1.5-1.5L4.6 23.1z" />
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-widest opacity-80">Disponível no</div>
          <div className="text-base">Google Play</div>
        </div>
      </a>
    </div>
  );
}

export function Servicos() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[color:var(--background)]">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold)] mb-4">
            O ofício
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[color:var(--brand-brown)]">
            Nossos <span className="italic">serviços</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6" />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <article
              key={s.title}
              className="group relative bg-[color:var(--brand-cream)] p-10 text-center border border-[color:var(--brand-gold)]/30 hover:border-[color:var(--brand-gold)] transition-colors"
            >
              <div className="absolute inset-x-6 top-6 h-px bg-[color:var(--brand-gold)]/40" />
              <div className="absolute inset-x-6 bottom-6 h-px bg-[color:var(--brand-gold)]/40" />
              <h3 className="font-display text-3xl text-[color:var(--brand-brown)] mb-4">
                {s.title}
              </h3>
              <Ornament className="mx-auto w-28 mb-4" />
              <p className="text-sm text-[color:var(--brand-brown)]/75 leading-relaxed">
                {s.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="italic text-[color:var(--brand-brown)]/80 mb-6">
            Consulte preços e agende diretamente pelo nosso app.
          </p>
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
