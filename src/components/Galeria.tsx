import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Ornament } from "./Ornament";
import { useReveal } from "@/hooks/use-reveal";

type Foto = { nome: string; alt: string; legenda: string };

// Arquivos em public/fotos/<nome>.webp (960px) e <nome>-480.webp (miniatura).
const fotos: Foto[] = [
  {
    nome: "salao",
    alt: "Salão da Barbat com a fileira de cadeiras de couro, paredes verdes e piso de madeira",
    legenda: "O salão",
  },
  {
    nome: "fachada",
    alt: "Fachada da Barbat com o letreiro, o poste de barbeiro e a porta de madeira",
    legenda: "Nossa fachada",
  },
  {
    nome: "cadeira",
    alt: "Cadeira de barbeiro de couro marrom com a capa verde da Barbat pendurada no braço",
    legenda: "Cadeiras clássicas de couro",
  },
  {
    nome: "bancada",
    alt: "Bancada de trabalho com máquinas, tesouras, pentes e produtos diante do espelho",
    legenda: "A bancada de trabalho",
  },
  {
    nome: "placa",
    alt: "Placa espelhada com o logo Barbat no apoio de pés de uma cadeira",
    legenda: "Detalhes com a nossa marca",
  },
  {
    nome: "cerveja",
    alt: "Garrafa da cerveja Barbat American Lager sobre um balcão de madeira",
    legenda: "Barbat American Lager",
  },
  {
    nome: "bone",
    alt: "Boné verde com o logo da Barbearia Barbat bordado",
    legenda: "Boné Barbat",
  },
  {
    nome: "reuzel",
    alt: "Adesivo de revendedor oficial Reuzel na vitrine da barbearia",
    legenda: "Revendedor oficial Reuzel",
  },
];

const src = (f: Foto) => `/fotos/${f.nome}.webp`;
const srcMini = (f: Foto) => `/fotos/${f.nome}-480.webp`;

export function Galeria() {
  const ref = useReveal<HTMLDivElement>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [aberta, setAberta] = useState<number | null>(null);

  const abrir = (i: number) => {
    setAberta(i);
    dialogRef.current?.showModal();
  };
  const fechar = () => dialogRef.current?.close();
  const mover = (passo: number) =>
    setAberta((i) => (i === null ? i : (i + passo + fotos.length) % fotos.length));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    const onClose = () => setAberta(null);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, []);

  const atual = aberta === null ? null : fotos[aberta];

  return (
    <section
      id="galeria"
      className="py-24 md:py-32 bg-[color:var(--brand-brown)] text-[color:var(--brand-cream)]"
    >
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

        <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {fotos.map((f, i) => (
            <li key={f.nome}>
              <button
                type="button"
                onClick={() => abrir(i)}
                className="group relative block w-full overflow-hidden rounded-sm shadow-lg shadow-black/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
                aria-label={`Ampliar foto: ${f.legenda}`}
              >
                <img
                  src={srcMini(f)}
                  alt={f.alt}
                  width={480}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={atual ? atual.legenda : "Foto ampliada"}
        onClick={(e) => e.target === e.currentTarget && fechar()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 outline-none backdrop:bg-black/90"
      >
        {atual && (
          <figure className="relative flex max-h-[92vh] w-[min(92vw,960px)] flex-col items-center">
            <img
              src={src(atual)}
              alt={atual.alt}
              className="max-h-[82vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-3 text-center text-[color:var(--brand-cream)]">
              {atual.legenda}{" "}
              <span className="text-[color:var(--brand-cream)]/60">
                · {aberta! + 1} de {fotos.length}
              </span>
            </figcaption>
            <button
              type="button"
              onClick={fechar}
              aria-label="Fechar"
              className="absolute right-2 top-2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-[41vh] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Próxima foto"
              className="absolute right-2 top-[41vh] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
