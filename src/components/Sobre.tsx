import { Award, Scissors, Sparkles, Car } from "lucide-react";
import { Ornament } from "./Ornament";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    icon: Award,
    title: "Desde 1971",
    text: "Mais de cinco décadas de barbearia clássica, com o ofício passado de pai para filho.",
  },
  {
    icon: Scissors,
    title: "Barbeiros experientes",
    text: "Técnica apurada e atenção a cada detalhe, do primeiro corte ao acabamento.",
  },
  {
    icon: Sparkles,
    title: "Produtos de qualidade",
    text: "Produtos selecionados para cuidar do cabelo e da barba durante e depois do atendimento.",
  },
  {
    icon: Car,
    title: "Estacionamento gratuito",
    text: "Venha de carro sem se preocupar com vaga: o estacionamento é por nossa conta.",
  },
];

export function Sobre() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold-deep)] mb-4">
            Sobre a Barbat
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[color:var(--brand-brown)]">
            Tradição de família, <span className="italic">cuidado de verdade</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6" />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-white/60 border border-[color:var(--brand-gold)]/30 p-6 rounded-sm hover:bg-white transition-colors"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)] mb-4 group-hover:bg-[color:var(--brand-green)] group-hover:text-[color:var(--brand-cream)] transition-colors">
                <it.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-[color:var(--brand-brown)] mb-2">
                {it.title}
              </h3>
              <p className="text-sm text-[color:var(--brand-brown)]/80 leading-relaxed">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
