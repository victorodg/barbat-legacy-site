import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { AppSection } from "@/components/AppSection";
import { Localizacao } from "@/components/Localizacao";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Barbat — Tradição desde 1971 · Tucuruvi, SP" },
      {
        name: "description",
        content:
          "Barbearia Barbat: tradição de pai para filho desde 1971. Cortes, barba e cuidado premium no Tucuruvi, São Paulo. Agende pelo WhatsApp ou pelo app.",
      },
      { property: "og:title", content: "Barbearia Barbat — Tradição desde 1971" },
      {
        property: "og:description",
        content:
          "A barbearia de pai para filho. Desde 1971 cuidando do visual de homens que se respeitam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <AppSection />
        <Galeria />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
