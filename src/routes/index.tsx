import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { AppSection } from "@/components/AppSection";
import { Localizacao } from "@/components/Localizacao";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ENDERECO, HORARIOS, INSTAGRAM_LINK, SITE_URL, WHATSAPP_NUMERO } from "@/lib/barbat";

const TITULO = "Barbearia Barbat — Tradição desde 1971 · Tucuruvi, SP";
const DESCRICAO =
  "Barbearia de pai para filho desde 1971 no Tucuruvi, zona norte de São Paulo. Corte, barba e estacionamento gratuito. Agende pelo app ou pelo WhatsApp.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Ficha da barbearia no formato que o Google entende (schema.org).
// Ajuda a aparecer com endereço, horário e telefone nas buscas locais.
const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Barbearia Barbat",
  slogan: "De pai para filho, de geração em geração",
  foundingDate: "1971",
  image: OG_IMAGE,
  logo: `${SITE_URL}/barbat-logo-verde.png`,
  ...(SITE_URL ? { url: SITE_URL, "@id": `${SITE_URL}/#barbearia` } : {}),
  telephone: `+${WHATSAPP_NUMERO}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Nova Cantareira, 2768 - Loja 07",
    addressLocality: ENDERECO.cidade,
    addressRegion: ENDERECO.estado,
    postalCode: ENDERECO.cep,
    addressCountry: "BR",
  },
  areaServed: `${ENDERECO.bairro}, ${ENDERECO.cidade}`,
  openingHoursSpecification: HORARIOS.filter((h) => h.schemaDias.length).map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.schemaDias,
    opens: h.abre,
    closes: h.fecha,
  })),
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Estacionamento gratuito", value: true },
  ],
  sameAs: [INSTAGRAM_LINK],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: "Barbearia Barbat — De pai para filho, desde 1971" },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Barbeiro aparando a barba de um cliente na Barbat" },
      ...(SITE_URL ? [{ property: "og:url", content: SITE_URL }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: SITE_URL ? [{ rel: "canonical", href: SITE_URL }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(dadosEstruturados),
      },
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
        <AppSection />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
