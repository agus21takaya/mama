import React from 'react';

interface BotanicalBouquetProps {
  className?: string;
  color?: string;
}

export const BotanicalBouquet: React.FC<BotanicalBouquetProps> = ({
  className = "w-44 h-44",
  color = "#c5a868",
}) => {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="35%" stopColor="#f3e5ab" />
          <stop offset="70%" stopColor="#aa820a" />
          <stop offset="100%" stopColor="#e5c158" />
        </linearGradient>
      </defs>

      {/* Main Stems */}
      <path
        d="M 100 160 Q 98 120 70 85"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 100 160 Q 100 110 100 50"
        stroke="url(#goldGradient)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 100 160 Q 105 115 135 80"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 100 160 Q 85 130 50 110"
        stroke="url(#goldGradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 100 160 Q 118 135 150 115"
        stroke="url(#goldGradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Center Flower */}
      <g transform="translate(100, 50)">
        {/* Flower petals */}
        <path
          d="M 0 -22 C -12 -12 -14 0 0 0 C 14 0 12 -12 0 -22 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.8"
          fill="rgba(243, 229, 171, 0.12)"
        />
        <path
          d="M -15 -12 C -20 -3 -10 6 0 0 C -6 -8 -10 -10 -15 -12 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.6"
          fill="rgba(243, 229, 171, 0.08)"
        />
        <path
          d="M 15 -12 C 20 -3 10 6 0 0 C 6 -8 10 -10 15 -12 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.6"
          fill="rgba(243, 229, 171, 0.08)"
        />
        <path
          d="M -10 -25 C 0 -32 10 -25 0 -18 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Center pistil */}
        <circle cx="0" cy="-6" r="2.5" fill="url(#goldGradient)" />
      </g>

      {/* Left Rose/Peony Bloom */}
      <g transform="translate(70, 85)">
        <path
          d="M 0 0 C -15 -10 -18 -25 -5 -30 C 8 -22 10 -10 0 0 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.7"
          fill="rgba(243, 229, 171, 0.1)"
        />
        <path
          d="M -12 -18 C -22 -18 -18 -5 -5 0"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M -5 -25 C 2 -32 12 -22 6 -12"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
        />
        <circle cx="-3" cy="-14" r="2" fill="url(#goldGradient)" />
      </g>

      {/* Right Bloom */}
      <g transform="translate(135, 80)">
        <path
          d="M 0 0 C 15 -10 18 -25 5 -30 C -8 -22 -10 -10 0 0 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.7"
          fill="rgba(243, 229, 171, 0.1)"
        />
        <path
          d="M 12 -18 C 22 -18 18 -5 5 0"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M 5 -25 C -2 -32 -12 -22 -6 -12"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
        />
        <circle cx="3" cy="-14" r="2" fill="url(#goldGradient)" />
      </g>

      {/* Delicate Eucalyptus & Olive Leaves */}
      {/* Left side leaves */}
      <path
        d="M 50 110 Q 35 105 32 90 Q 42 98 50 110"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        fill="rgba(243, 229, 171, 0.15)"
      />
      <path
        d="M 60 125 Q 40 128 35 118 Q 50 120 60 125"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        fill="rgba(243, 229, 171, 0.1)"
      />
      <path
        d="M 78 105 Q 60 98 58 85 Q 70 92 78 105"
        stroke="url(#goldGradient)"
        strokeWidth="1.4"
        fill="rgba(243, 229, 171, 0.1)"
      />
      <path
        d="M 85 75 Q 75 60 62 55 Q 70 70 85 75"
        stroke="url(#goldGradient)"
        strokeWidth="1.4"
        fill="rgba(243, 229, 171, 0.12)"
      />

      {/* Right side leaves */}
      <path
        d="M 150 115 Q 165 110 168 95 Q 158 103 150 115"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        fill="rgba(243, 229, 171, 0.15)"
      />
      <path
        d="M 140 130 Q 160 133 165 123 Q 150 125 140 130"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        fill="rgba(243, 229, 171, 0.1)"
      />
      <path
        d="M 122 105 Q 140 98 142 85 Q 130 92 122 105"
        stroke="url(#goldGradient)"
        strokeWidth="1.4"
        fill="rgba(243, 229, 171, 0.1)"
      />
      <path
        d="M 115 75 Q 125 60 138 55 Q 130 70 115 75"
        stroke="url(#goldGradient)"
        strokeWidth="1.4"
        fill="rgba(243, 229, 171, 0.12)"
      />

      {/* Small Berry Branches */}
      <circle cx="85" cy="40" r="2.5" fill="url(#goldGradient)" />
      <circle cx="92" cy="32" r="2.2" fill="url(#goldGradient)" />
      <circle cx="108" cy="33" r="2.2" fill="url(#goldGradient)" />
      <circle cx="115" cy="42" r="2.5" fill="url(#goldGradient)" />
      <path d="M 98 48 L 92 34" stroke="url(#goldGradient)" strokeWidth="1" />
      <path d="M 102 48 L 108 35" stroke="url(#goldGradient)" strokeWidth="1" />

      {/* Ribbon Bow tied around the bouquet */}
      <g transform="translate(100, 160)">
        {/* Left loop of the bow */}
        <path
          d="M 0 0 C -25 -18 -45 -10 -40 10 C -35 22 -15 15 0 2 Z"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="rgba(243, 229, 171, 0.2)"
        />
        {/* Left loop inner fold */}
        <path
          d="M -10 -2 C -24 -6 -32 2 -26 10"
          stroke="url(#goldGradient)"
          strokeWidth="1.3"
        />

        {/* Right loop of the bow */}
        <path
          d="M 0 0 C 25 -18 45 -10 40 10 C 35 22 15 15 0 2 Z"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="rgba(243, 229, 171, 0.2)"
        />
        {/* Right loop inner fold */}
        <path
          d="M 10 -2 C 24 -6 32 2 26 10"
          stroke="url(#goldGradient)"
          strokeWidth="1.3"
        />

        {/* Center knot */}
        <ellipse
          cx="0"
          cy="1"
          rx="6"
          ry="5"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="#d4af37"
        />

        {/* Flowing ribbon tails */}
        {/* Left ribbon tail */}
        <path
          d="M -3 5 Q -25 35 -35 65 Q -25 50 -15 45 Q -8 55 -5 65 Q -10 35 0 5"
          stroke="url(#goldGradient)"
          strokeWidth="1.8"
          fill="rgba(243, 229, 171, 0.15)"
        />
        {/* Right ribbon tail */}
        <path
          d="M 3 5 Q 30 35 42 68 Q 28 52 20 48 Q 22 58 18 68 Q 12 35 0 5"
          stroke="url(#goldGradient)"
          strokeWidth="1.8"
          fill="rgba(243, 229, 171, 0.15)"
        />

        {/* Stems extending below the knot */}
        <path d="M -4 6 L -6 25" stroke="url(#goldGradient)" strokeWidth="1.6" />
        <path d="M 0 6 L 1 28" stroke="url(#goldGradient)" strokeWidth="1.8" />
        <path d="M 4 6 L 7 24" stroke="url(#goldGradient)" strokeWidth="1.6" />
      </g>
    </svg>
  );
};
