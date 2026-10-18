import React, { useRef, useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface MomLetterCardProps {
  onRedeem: () => void;
}

export const MomLetterCard: React.FC<MomLetterCardProps> = ({ onRedeem }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -5;
    const rY = ((x - centerX) / centerX) * 5;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* 3D Perspective Container */}
      <div
        className="w-full select-none"
        style={{ perspective: '1400px' }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full rounded-3xl bg-[#faf7f2] shadow-[0_20px_60px_-15px_rgba(75,60,45,0.18)] border border-[#ebd89c]/80 overflow-hidden transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          {/* Subtle gold glare reflection */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 235, 175, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`,
            }}
          />

          {/* Double Gold Foil Decorative Borders */}
          <div className="absolute inset-3 sm:inset-4 border border-[#e5d4a7]/60 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-[#d4af37]/25 rounded-xl pointer-events-none" />

          {/* Botanical corner watermark flourishes */}
          <div className="absolute top-4 left-4 w-12 h-12 opacity-35 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="#c5a868" strokeWidth="2">
              <path d="M 10 10 Q 50 15 80 50 Q 85 85 90 90" strokeLinecap="round" />
              <path d="M 25 12 Q 35 30 20 45" />
              <path d="M 45 18 Q 60 35 48 55" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 opacity-35 pointer-events-none scale-x-[-1]">
            <svg viewBox="0 0 100 100" fill="none" stroke="#c5a868" strokeWidth="2">
              <path d="M 10 10 Q 50 15 80 50 Q 85 85 90 90" strokeLinecap="round" />
              <path d="M 25 12 Q 35 30 20 45" />
              <path d="M 45 18 Q 60 35 48 55" />
            </svg>
          </div>

          {/* Inner Card Content */}
          <div className="relative z-10 px-6 sm:px-12 py-8 sm:py-12 flex flex-col items-center text-center">
            {/* Top Golden Wax Seal */}
            <div className="relative mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ebd99c] via-[#c5a868] to-[#9c7827] p-1 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-dashed border-[#fff8e7]/80 flex flex-col items-center justify-center bg-gradient-to-br from-[#cbaf69] to-[#9e7a2b]">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white/90 drop-shadow-xs" />
                </div>
              </div>
            </div>

            {/* Subtitle / Header */}
            <span className="font-serif-luxury italic text-sm sm:text-base text-amber-900/80 tracking-widest uppercase">
              Para la mejor mamá del mundo
            </span>

            {/* Main Title */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-semibold tracking-tight mt-1 mb-2">
              ¡Feliz día, Mamá!
            </h1>

            {/* Gold foil divider */}
            <div className="flex items-center justify-center gap-3 w-48 mx-auto my-3">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c5a868]" />
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c5a868]" />
            </div>

            {/* The Heartfelt Beautiful Letter */}
            <div className="space-y-4 my-3 max-w-lg mx-auto text-stone-700">
              {/* Main highlighted quote */}
              <p className="font-serif-luxury italic text-xl sm:text-2xl text-amber-950 font-medium leading-relaxed">
                “Este regalito es para que puedas descansar y recargar energías, te merecés todo lo mejor.”
              </p>

              {/* Emotional paragraphs */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Gracias por ser nuestro refugio seguro, por cada abrazo que calma cualquier tormenta y por entregarte siempre con un amor infinito que todo lo ilumina.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Sabemos cuánto hacés por nosotros todos los días, y por eso hoy queremos que el tiempo se detenga solo para vos: que te olvides del reloj, respires hondo y disfrutes de una tarde de relajación profunda, masajes y mimos pensados pura y exclusivamente para que vuelvas a conectar con tu paz interior.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Que cada aroma, caricia y momento de tranquilidad te devuelvan un pedacito de todo el amor inmenso que nos regalás a diario.
              </p>

              {/* Signature */}
              <div className="pt-4 pb-2">
                <p className="font-serif-luxury italic text-lg sm:text-xl text-stone-800 font-medium">
                  Te amamos con todo el corazón,
                </p>
                <p className="font-sans-luxury font-bold text-sm sm:text-base tracking-[0.2em] text-amber-900 uppercase mt-1">
                  Agus y Benja ❤️
                </p>
              </div>
            </div>

            {/* Elegant Gift Card Notification Tag */}
            <div className="mt-4 pt-4 border-t border-stone-200/80 w-full flex items-center justify-center gap-2 text-xs text-stone-500">
              <Gift className="w-4 h-4 text-amber-700" />
              <span className="font-medium">
                Tu Gift Card física/digital está lista para canjear aquí abajo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
