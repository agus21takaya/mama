/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Heart,
  Download,
  Volume2,
  Gift,
} from 'lucide-react';
import { MomLetterCard } from './components/MomLetterCard.tsx';
import { Envelope } from './components/Envelope.tsx';
import { RedeemModal } from './components/RedeemModal.tsx';
import { downloadAttachedGiftCard } from './components/GiftCardCanvas.ts';
import { spaAudio } from './components/AmbientSound.ts';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  /**
   * Main CTA: "Click acá para canjear gift card"
   * Downloads the EXACT gift card voucher attached by the user,
   * fires celebratory confetti, plays a soft harp chime, and opens the redemption modal.
   */
  const handleRedeemGiftCard = async () => {
    // 1. Play relaxing audio chime
    spaAudio.playChime();

    // 2. Fire celebratory rose & gold confetti
    confetti({
      particleCount: 100,
      spread: 85,
      origin: { y: 0.65 },
      colors: ['#c5a868', '#f3e5ab', '#e09f8d', '#d4af37', '#ffffff'],
    });

    // 3. Download the exact attached gift card image
    setIsDownloading(true);
    try {
      await downloadAttachedGiftCard();
      showToast('¡Descargando tu Gift Card oficial!');
    } catch {
      showToast('Descarga iniciada.');
    } finally {
      setIsDownloading(false);
    }

    // 4. Open redemption details modal
    setIsRedeemModalOpen(true);
  };

  const handlePlayMusic = () => {
    spaAudio.playChime();
    showToast('Sonido de relax spa ✨');
  };

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-stone-800 flex flex-col justify-between selection:bg-amber-200 selection:text-amber-900 font-sans-luxury relative overflow-x-hidden">
      {/* Background Soft Warm Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-amber-100/60 via-rose-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-stone-900/90 backdrop-blur-md text-[#fcf9f2] px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-xl border border-amber-400/30 flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Initial Envelope Experience Modal */}
      <Envelope
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Header: Intimate & Loving, without promotional marketing */}
      <header className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300/60 flex items-center justify-center shadow-xs">
            <Heart className="w-4 h-4 text-amber-800 fill-amber-700/30" />
          </div>
          <div>
            <span className="font-serif-luxury text-lg sm:text-xl font-semibold tracking-wide text-stone-900">
              Con Amor Para Mamá
            </span>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 block">
              De Agus y Benja
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Ambient chime button */}
          <button
            onClick={handlePlayMusic}
            className="p-2.5 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors shadow-xs cursor-pointer"
            title="Tocar melodía relajante"
            aria-label="Tocar sonido de relax"
          >
            <Volume2 className="w-4 h-4 text-amber-900" />
          </button>

          {/* Re-open envelope button */}
          <button
            onClick={() => setIsEnvelopeOpen(false)}
            className="px-3 py-1.5 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 text-xs font-medium transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Gift className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">Sobre</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col items-center justify-center">
        {/* The Beautiful On-Screen Keepsake Letter Card (Not downloaded) */}
        <section className="w-full mb-8">
          <MomLetterCard onRedeem={handleRedeemGiftCard} />
        </section>

        {/* PRIMARY CALL TO ACTION BUTTON REQUESTED BY USER */}
        <section className="w-full flex flex-col items-center gap-3 mb-8">
          <div className="relative group">
            {/* Breathing golden pulse effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 rounded-full blur-md opacity-80 group-hover:opacity-100 transition duration-300 animate-pulse" />

            <button
              onClick={handleRedeemGiftCard}
              disabled={isDownloading}
              className="relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#2a241f] via-[#3a322c] to-[#1f1a16] hover:from-black hover:to-stone-900 text-[#fffbf2] font-semibold text-sm sm:text-lg tracking-wider uppercase shadow-2xl transition-all duration-300 flex items-center gap-3 cursor-pointer border border-[#ebd89c]/50 hover:scale-[1.02]"
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-bounce" />
              <span>Click acá para canjear gift card</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
            </button>
          </div>

          <p className="text-xs text-stone-500 tracking-wide text-center max-w-md">
            Al hacer clic se descarga la tarjeta original en tu teléfono o computadora para presentarla o agendar tu día de relax.
          </p>
        </section>
      </main>

      {/* Discreet Loving Footer */}
      <footer className="w-full border-t border-stone-200/80 bg-[#ede8df]/60 py-4 px-4 text-center text-xs text-stone-500">
        <p className="font-serif-luxury italic text-sm text-stone-700">
          “Para que puedas descansar y recargar energías, te merecés todo lo mejor.”
        </p>
        <p className="text-[11px] mt-0.5 text-stone-500">
          Con todo nuestro amor · Agus y Benja ❤️
        </p>
      </footer>

      {/* Redemption Modal (Shows the exact attached card preview & WhatsApp booking) */}
      <RedeemModal
        isOpen={isRedeemModalOpen}
        onClose={() => setIsRedeemModalOpen(false)}
      />
    </div>
  );
}
