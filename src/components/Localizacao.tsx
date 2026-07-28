import { MapPin, Clock, MessageCircle, Instagram } from "lucide-react";
import { Ornament } from "./Ornament";
import { useReveal } from "@/hooks/use-reveal";

export function Localizacao() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="localizacao" className="py-24 md:py-32 bg-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-up text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-[color:var(--brand-gold)] mb-4">
            Visite-nos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[color:var(--brand-brown)]">
            Onde nos <span className="italic">encontrar</span>
          </h2>
          <Ornament className="mx-auto w-40 mt-6" />
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative min-h-[420px]">
            <div className="absolute -inset-3 border border-[color:var(--brand-gold)]/50" />
            <iframe
              title="Localização Barbat"
              src="https://www.google.com/maps?q=Av.%20Nova%20Cantareira%2C%202768%20-%20Tucuruvi%2C%20S%C3%A3o%20Paulo&output=embed"
              className="relative h-full w-full rounded-sm shadow-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div id="contato" className="bg-white p-8 md:p-10 border border-[color:var(--brand-gold)]/30 rounded-sm space-y-6">
            <InfoRow
              icon={MapPin}
              title="Endereço"
              lines={["Av. Nova Cantareira, 2768 — Lj 07", "Tucuruvi, São Paulo — SP"]}
            />
            <InfoRow
              icon={Clock}
              title="Horários"
              lines={["Seg–Sex: 10h às 20h", "Sábado: 9h às 19h"]}
            />
            <InfoRow
              icon={MessageCircle}
              title="WhatsApp"
              lines={[
                <a
                  key="w"
                  href="https://wa.me/5511988718260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--brand-green)] hover:text-[color:var(--brand-gold)] transition-colors"
                >
                  (11) 98871-8260
                </a>,
              ]}
            />
            <InfoRow
              icon={Instagram}
              title="Instagram"
              lines={[
                <a
                  key="i"
                  href="https://instagram.com/barbeariabarbat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--brand-green)] hover:text-[color:var(--brand-gold)] transition-colors"
                >
                  @barbeariabarbat
                </a>,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 grid h-11 w-11 place-items-center rounded-full bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-lg text-[color:var(--brand-brown)]">{title}</h3>
        <div className="text-sm text-[color:var(--brand-brown)]/80 leading-relaxed">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
