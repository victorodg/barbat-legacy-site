import { MessageCircle } from "lucide-react";
import { WHATSAPP_AGENDAR } from "@/lib/barbat";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_AGENDAR}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      {/* Pulsa só 3 vezes para chamar atenção, e nunca para quem desativou animações */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]/40 motion-safe:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_3]"
      />
    </a>
  );
}
