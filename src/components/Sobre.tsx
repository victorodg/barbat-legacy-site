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
    title: "Revendedor Reuzel",
    text: "Somos revendedor oficial Reuzel: pomadas e produtos de qualidade para cabelo e barba.",
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

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <figure className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-[color:var(--brand-gold)]/50"
            />
            <img
              src="/fotos/quadros.webp"
              srcSet="/fotos/quadros-480.webp 480w, /fotos/quadros.webp 960w"
              sizes="(min-width: 768px) 28rem, 100vw"
              alt="Quadros na parede da Barbat: fotos antigas de um barbeiro cortando o cabelo de uma criança, um recorte de jornal e uma navalha antiga"
              width={960}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
            />
          </figure>
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl md:text-4xl text-[color:var(--brand-brown)]">
              Uma história que <span className="italic">está na parede</span>
            </h3>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[color:var(--brand-brown)]/85">
              <p>
                Desde 1971, o ofício da Barbat passa de pai para filho. As fotos antigas, o recorte
                de jornal e a velha navalha emoldurados no salão contam um pouco dessa história.
              </p>
              <p>
                Hoje a casa tem cadeiras clássicas, cerveja com a nossa marca e produtos Reuzel, mas
                o jeito de atender continua o mesmo: com calma, técnica e atenção a cada detalhe.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
