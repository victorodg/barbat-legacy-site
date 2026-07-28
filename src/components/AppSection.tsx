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
        src={"/barbat-brasao-verde.png"}
        alt=""
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] opacity-20 pointer-events-none"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div ref={ref} className="fade-up">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold)] mb-4">
            App Barbat
          </p>
          <h2 className="font-display text-4xl md:text-6xl">
            Agende na <span className="italic text-[color:var(--brand-gold)]">palma da mão</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6 mb-8" />
          <p className="mx-auto max-w-xl text-lg text-[color:var(--brand-cream)]/85">
            Pelo app Barbat você consulta serviços, preços e agenda seu horário com facilidade.
          </p>
          <div className="mt-10">
            <StoreButtons dark />
          </div>
        </div>
      </div>
    </section>
  );
}
