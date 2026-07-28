import { Ornament } from "./Ornament";
import { useReveal } from "@/hooks/use-reveal";

const tiles: Array<{ kind: "image"; src: string; alt: string } | { kind: "brasao" }> = [
  { kind: "image", src: "/fachada.webp", alt: "Fachada da Barbat" },
  { kind: "brasao" },
  { kind: "image", src: "/vitrine.webp", alt: "Vitrine da Barbat" },
  { kind: "brasao" },
  { kind: "image", src: "/frase-efeito.webp", alt: "Ambiente Barbat" },
  { kind: "brasao" },
  { kind: "image", src: "/vitrine.webp", alt: "Vitrine" },
  { kind: "brasao" },
  { kind: "image", src: "/fachada.webp", alt: "Fachada" },
];

export function Galeria() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-[color:var(--brand-brown)] text-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold)] mb-4">
            Galeria
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            Nosso <span className="italic text-[color:var(--brand-gold)]">espaço</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6" />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((t, i) =>
            t.kind === "image" ? (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-sm shadow-lg shadow-black/30"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              <div
                key={i}
                className="aspect-square grid place-items-center rounded-sm bg-[color:var(--brand-green)] shadow-lg shadow-black/30"
              >
                <img src={"/barbat-brasao-verde.png"} alt="" className="w-2/3 opacity-90" />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
