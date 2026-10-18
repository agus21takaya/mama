import React from 'react';
import { Heart, Sparkles, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { spaAudio } from './AmbientSound.ts';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen }) => {
  const triggerOpen = () => {
    // Play celebratory audio chime
    spaAudio.playChime();

    // Trigger gentle celebratory confetti
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#ebd99c', '#f5e6d3', '#e09f8d', '#ffffff'],
    });

    onOpen();
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-md transition-opacity duration-500">
      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Ambient glow behind envelope */}
        <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/20 via-rose-200/20 to-amber-100/20 rounded-3xl blur-2xl pointer-events-none" />

        {/* Envelope Shell */}
        <div className="relative w-full bg-[#dfd6c8] rounded-2xl shadow-2xl border border-[#ebd89c]/60 p-6 sm:p-10 flex flex-col items-center text-center overflow-hidden">
          {/* Envelope fold aesthetics */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#cfc3b2] to-transparent pointer-events-none opacity-40" />

          {/* Stamp top right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-dashed border-[#b39e87] px-3 py-2 rounded-sm rotate-2 bg-[#f4ece1] shadow-xs">
            <span className="font-serif-luxury text-[10px] tracking-widest text-[#8c735d] uppercase block">
              ZIA SPA
            </span>
            <span className="font-serif-luxury italic text-xs text-amber-900 font-semibold">
              Especial Mamá
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-stone-600 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Un regalo muy especial</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 font-semibold tracking-wide">
            Para Vos, Mamá
          </h2>

          <p className="font-serif-luxury italic text-base sm:text-xl text-stone-700 mt-2">
            De: Agus y Benja
          </p>

          <p className="text-xs sm:text-sm text-stone-600 max-w-xs mt-3 leading-relaxed">
            Preparamos un momento único para que descanses, disfrutes y recargues energías.
          </p>

          {/* Golden Wax Seal Button */}
          <div className="relative mt-8 group cursor-pointer" onClick={triggerOpen}>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#ebd99c] via-[#c5a868] to-[#99782d] p-1 shadow-lg group-hover:scale-105 group-hover:shadow-amber-500/20 transition-all duration-300 flex items-center justify-center">
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#fcf4d9]/70 flex flex-col items-center justify-center text-center p-1 bg-gradient-to-br from-[#c8ab65] to-[#a07c2c]">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white/80 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] uppercase tracking-wider text-amber-100 font-bold mt-0.5">
                  Abrir
                </span>
              </div>
            </div>

            {/* Ripple pulse ring */}
            <span className="absolute -inset-2 rounded-full border border-amber-400/50 animate-ping pointer-events-none" />
          </div>

          {/* Button CTA */}
          <button
            onClick={triggerOpen}
            className="mt-8 px-6 py-2.5 bg-stone-800 hover:bg-stone-900 text-[#fbf6ec] rounded-full text-xs sm:text-sm tracking-wider uppercase font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <MailOpen className="w-4 h-4 text-amber-300" />
            <span>Tocar para abrir la carta</span>
          </button>
        </div>
      </div>
    </div>
  );
};
