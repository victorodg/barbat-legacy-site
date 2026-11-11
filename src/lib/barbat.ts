// Dados da barbearia usados em várias partes do site (e no Google).
// Altere aqui uma vez só que tudo se atualiza.

/** Endereço público do site. Troque aqui se um domínio próprio for configurado na Vercel. */
export const SITE_URL = "https://barbat-barbearia.vercel.app";

export const WHATSAPP_NUMERO = "5511988718260";
export const WHATSAPP_EXIBICAO = "(11) 98871-8260";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}`;
export const WHATSAPP_AGENDAR = `${WHATSAPP_LINK}?text=${encodeURIComponent(
  "Olá, gostaria de agendar um horário na Barbat",
)}`;

export const INSTAGRAM_USUARIO = "barbeariabarbat";
export const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_USUARIO}`;

export const APP_STORE = "https://apps.apple.com/br/app/barbat-barbearia/id6468892274";
export const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=br.com.starapp.barbatbarbearia&hl=pt";

export const ENDERECO = {
  rua: "Av. Nova Cantareira, 2768 — Lj 07",
  bairro: "Tucuruvi",
  cidade: "São Paulo",
  estado: "SP",
  cep: "02341-000",
};

export const HORARIOS = [
  {
    dias: "Segunda a sexta",
    texto: "10h às 20h",
    schemaDias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    abre: "10:00",
    fecha: "20:00",
  },
  { dias: "Sábado", texto: "9h às 19h", schemaDias: ["Saturday"], abre: "09:00", fecha: "19:00" },
  { dias: "Domingo", texto: "Fechado", schemaDias: [], abre: "", fecha: "" },
];
