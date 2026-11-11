import { Ornament } from "./Ornament";
import { StoreButtons } from "./Servicos";
import { useReveal } from "@/hooks/use-reveal";

export function AppSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="app"
      className="relative py-24 md:py-32 bg-[color:var(--brand-green)] text-[color:var(--brand-cream)] overflow-hidden"
    >
      <img
        src="/barbat-brasao-verde.png"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] opacity-20 pointer-events-none"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div ref={ref} className="fade-up">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold-light)] mb-4">
            App Barbat
          </p>
          <h2 className="font-display text-4xl md:text-6xl">
            Seu horário a{" "}
            <span className="italic text-[color:var(--brand-gold-light)]">um toque</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6 mb-8" />
          <p className="mx-auto max-w-xl text-lg text-[color:var(--brand-cream)]/85">
            Veja serviços e preços e marque seu horário quando quiser, sem precisar ligar nem
            esperar resposta.
          </p>
          <div className="mt-10">
            <StoreButtons dark />
          </div>
        </div>
      </div>
    </section>
  );
}
