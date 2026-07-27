import { Award, Scissors, Sparkles, Car } from "lucide-react";
import fachada from "@/assets/fachada.webp.asset.json";
import { Ornament } from "./Ornament";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Award, title: "Tradição desde 1971", text: "Mais de 50 anos aperfeiçoando a arte da barbearia clássica." },
  { icon: Scissors, title: "Profissionais especializados", text: "Barbeiros experientes, técnica apurada e cuidado com cada detalhe." },
  { icon: Sparkles, title: "Produtos premium", text: "Linha selecionada de produtos para barba e cabelo de alta qualidade." },
  { icon: Car, title: "Estacionamento gratuito", text: "Conforto e comodidade da chegada à saída da barbearia." },
];

export function Sobre() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold)] mb-4">
            Sobre a Barbat
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[color:var(--brand-brown)]">
            Uma experiência <span className="italic">além do corte</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <div
                key={it.title}
                className="group bg-white/60 border border-[color:var(--brand-gold)]/30 p-6 rounded-sm hover:bg-white transition-colors"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--brand-green)]/10 text-[color:var(--brand-gold)] mb-4 group-hover:bg-[color:var(--brand-green)] transition-colors">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-[color:var(--brand-brown)] mb-2">
                  {it.title}
                </h3>
                <p className="text-sm text-[color:var(--brand-brown)]/75 leading-relaxed">
                  {it.text}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-[color:var(--brand-gold)]/50 rounded-sm" />
            <img
              src={fachada.url}
              alt="Fachada da Barbearia Barbat"
              className="relative w-full h-[520px] object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
