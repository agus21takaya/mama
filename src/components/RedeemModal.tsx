import React, { useState } from 'react';
import {
  X,
  Check,
  Copy,
  Download,
  MapPin,
  MessageCircle,
  Sparkles,
  Heart,
  Eye,
} from 'lucide-react';
import { downloadAttachedGiftCard } from './GiftCardCanvas.ts';

interface RedeemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RedeemModal: React.FC<RedeemModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const copyCode = () => {
    navigator.clipboard.writeText('GIFTF1094');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadAgain = async () => {
    setIsDownloading(true);
    try {
      await downloadAttachedGiftCard();
    } finally {
      setIsDownloading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola ZIA Estética & Spa! Tengo mi Gift Card especial del Día de la Madre (Código: GIFTF1094) a nombre de Mamá (regalo de Agus y Benja) para el servicio ZIA BIENESTAR. Quisiera coordinar mi turno de relajación. ¡Muchas gracias!`
  );

  const whatsappUrl = `https://wa.me/5493518677856?text=${whatsappMessage}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Av.+Hipolito+Yrigoyen+175,+Cordoba,+Argentina`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#faf8f5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-stone-800 via-stone-900 to-amber-950 text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>¡Tu regalo está listo!</span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold">
            ¡Gift Card Descargada!
          </h3>
          <p className="font-serif-luxury italic text-stone-300 text-sm sm:text-base mt-1">
            Se guardó la tarjeta original en tu dispositivo
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Visual Preview of the exact attached gift card */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100">
            <img
              src="/attached_gift_card.svg"
              alt="Gift Card ZIA Bienestar para Mamá"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1">
              <Eye className="w-3 h-3 text-amber-300" />
              <span>Tarjeta oficial descargada</span>
            </div>
          </div>

          {/* Code and Expiry details */}
          <div className="bg-[#f3ece2] rounded-xl p-4 border border-[#ebd89c]/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold block">
                Código de Canje
              </span>
              <span className="font-sans-luxury font-extrabold text-xl tracking-widest text-stone-900">
                GIFTF1094
              </span>
            </div>

            <button
              onClick={copyCode}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-900 text-white transition-colors flex items-center gap-1.5 text-xs cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-300" />
                  <span>Copiar código</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Action Links: WhatsApp & Map */}
          <div className="space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 transition-all text-left shadow-xs cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-950 text-sm">
                    Agendar turno por WhatsApp
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-200/60 px-2 py-0.5 rounded-full">
                    3518677856
                  </span>
                </div>
                <p className="text-xs text-emerald-800">
                  Contactá directamente para elegir el día y hora que prefieras.
                </p>
              </div>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 border border-stone-200 transition-all text-left shadow-xs cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-stone-900 text-sm">
                  Ubicación del Spa
                </span>
                <p className="text-xs text-stone-600">
                  Av. Hipólito Yrigoyen 175, Córdoba Capital.
                </p>
              </div>
            </a>
          </div>

          {/* Re-download button */}
          <div className="pt-1">
            <button
              onClick={handleDownloadAgain}
              disabled={isDownloading}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-stone-600" />
              <span>{isDownloading ? 'Descargando...' : 'Volver a descargar la imagen'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
