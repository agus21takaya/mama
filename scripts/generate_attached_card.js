import fs from 'fs';
import { execSync } from 'child_process';

const svg = `
<svg width="1042" height="736" viewBox="0 0 1042 736" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Taupe background gradient -->
    <linearGradient id="taupeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b2a191" />
      <stop offset="50%" stop-color="#ab9a8a" />
      <stop offset="100%" stop-color="#a49383" />
    </linearGradient>

    <!-- Golden floral tint -->
    <linearGradient id="goldFloral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eedea9" />
      <stop offset="50%" stop-color="#dccb93" />
      <stop offset="100%" stop-color="#cbb577" />
    </linearGradient>

    <filter id="subtleGrain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.07 0" />
      <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1042" height="736" fill="url(#taupeBg)" />
  <rect width="1042" height="736" fill="#000000" opacity="0.03" />

  <!-- Top Left: ZIA Estética & Spa -->
  <g transform="translate(14, 130)">
    <text font-family="'Times New Roman', 'Playfair Display', serif" font-size="116" font-weight="400" fill="#ffffff" letter-spacing="4">ZIA</text>
    <text y="42" font-family="'Times New Roman', 'Playfair Display', serif" font-style="italic" font-size="28" fill="#ffffff" letter-spacing="1.5">Estética &amp; Spa</text>
  </g>

  <!-- Top Right: Este momento es tuyo. ¡Feliz día Má! -->
  <g transform="translate(1018, 92)" text-anchor="end">
    <text font-family="'Times New Roman', serif" font-style="italic" font-weight="bold" font-size="33" fill="#e4d6a7" letter-spacing="0.5">Este momento es tuyo.</text>
    <text y="38" font-family="'Times New Roman', serif" font-style="italic" font-weight="bold" font-size="33" fill="#e4d6a7" letter-spacing="0.5">¡Feliz día Má!</text>
  </g>

  <!-- Center Heading with Hearts: GRACIAS POR TODO MÁ TE AMAMOS -->
  <!-- Left Heart -->
  <g transform="translate(25, 230) scale(0.9)">
    <path d="M 16,5 C 16,0 10,-5 3,-5 C -5,-5 -8,2 -8,2 C -8,2 -11,-5 -19,-5 C -26,-5 -32,0 -32,5 C -32,15 -18,26 -8,32 C 2,26 16,15 16,5 Z" transform="translate(8, -12)" fill="none" stroke="#f4efe8" stroke-width="2" />
  </g>

  <!-- Right Heart -->
  <g transform="translate(980, 230) scale(0.9)">
    <path d="M 16,5 C 16,0 10,-5 3,-5 C -5,-5 -8,2 -8,2 C -8,2 -11,-5 -19,-5 C -26,-5 -32,0 -32,5 C -32,15 -18,26 -8,32 C 2,26 16,15 16,5 Z" transform="translate(8, -12)" fill="none" stroke="#f4efe8" stroke-width="2" />
  </g>

  <!-- Title -->
  <text x="525" y="246" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="25.5" fill="#ffffff" letter-spacing="3.5">
    GRACIAS POR TODO MÁ TE AMAMOS
  </text>

  <!-- The Golden Botanical Bouquet Illustration on the right -->
  <g transform="translate(790, 480)" stroke="url(#goldFloral)" fill="none">
    <!-- Bouquet Stems -->
    <path d="M -5 5 Q -10 -90 -45 -170" stroke-width="2.5" stroke-linecap="round" />
    <path d="M 0 5 Q 0 -110 0 -220" stroke-width="3" stroke-linecap="round" />
    <path d="M 5 5 Q 15 -90 55 -170" stroke-width="2.5" stroke-linecap="round" />
    <path d="M -5 5 Q -40 -60 -80 -95" stroke-width="2.2" stroke-linecap="round" />
    <path d="M 5 5 Q 40 -60 85 -95" stroke-width="2.2" stroke-linecap="round" />

    <!-- Center Top Bloom -->
    <path d="M 0 -225 C -25 -200 -30 -160 0 -150 C 30 -160 25 -200 0 -225 Z" stroke-width="2.6" fill="rgba(238,222,169,0.12)" />
    <path d="M -15 -210 C -30 -185 -5 -165 0 -150" stroke-width="2.2" />
    <path d="M 15 -210 C 30 -185 5 -165 0 -150" stroke-width="2.2" />

    <!-- Left Flower Bloom -->
    <path d="M -45 -170 C -75 -155 -70 -120 -40 -115 C -20 -125 -25 -155 -45 -170 Z" stroke-width="2.6" fill="rgba(238,222,169,0.12)" />
    <path d="M -65 -150 C -70 -130 -45 -120 -40 -115" stroke-width="2" />

    <!-- Right Flower Bloom -->
    <path d="M 55 -170 C 85 -155 80 -120 50 -115 C 30 -125 35 -155 55 -170 Z" stroke-width="2.6" fill="rgba(238,222,169,0.12)" />
    <path d="M 75 -150 C 80 -130 55 -120 50 -115" stroke-width="2" />

    <!-- Side Leaves and Berries -->
    <path d="M -80 -95 C -100 -115 -115 -95 -85 -85" stroke-width="2.2" fill="rgba(238,222,169,0.1)" />
    <path d="M 85 -95 C 105 -115 120 -95 90 -85" stroke-width="2.2" fill="rgba(238,222,169,0.1)" />
    <path d="M -50 -70 C -75 -80 -80 -60 -55 -55" stroke-width="2" fill="rgba(238,222,169,0.1)" />
    <path d="M 50 -70 C 75 -80 80 -60 55 -55" stroke-width="2" fill="rgba(238,222,169,0.1)" />

    <!-- Large Ribbon Bow in Center -->
    <!-- Left Loop -->
    <path d="M 0 0 C -45 -35 -90 -20 -80 20 C -70 45 -25 30 0 5 Z" stroke-width="3.5" fill="rgba(238,222,169,0.22)" />
    <!-- Right Loop -->
    <path d="M 0 0 C 45 -35 90 -20 80 20 C 70 45 25 30 0 5 Z" stroke-width="3.5" fill="rgba(238,222,169,0.22)" />
    <!-- Center Knot -->
    <ellipse cx="0" cy="3" rx="12" ry="10" stroke-width="3" fill="#dccb93" />
    <!-- Left Ribbon Tail -->
    <path d="M -5 10 C -40 70 -60 140 -85 200 C -55 160 -30 140 -10 30" stroke-width="3" fill="rgba(238,222,169,0.18)" />
    <!-- Right Ribbon Tail -->
    <path d="M 5 10 C 50 75 70 145 95 205 C 65 165 40 140 10 30" stroke-width="3" fill="rgba(238,222,169,0.18)" />
  </g>

  <!-- FORM LINES -->
  <!-- LINE 1: DE: AGUS Y BENJA -->
  <g transform="translate(10, 325)">
    <text y="-7" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="22" fill="#ffffff" letter-spacing="1">DE:</text>
    <line x1="110" y1="2" x2="980" y2="2" stroke="#dfd7cf" stroke-width="1.2" />
    <text x="500" y="-7" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="24.5" fill="#ffffff" letter-spacing="2.5">AGUS Y BENJA</text>
  </g>

  <!-- LINE 2: PARA: MAMA -->
  <g transform="translate(10, 405)">
    <text y="-7" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="22" fill="#ffffff" letter-spacing="1">PARA:</text>
    <line x1="110" y1="2" x2="980" y2="2" stroke="#dfd7cf" stroke-width="1.2" />
    <text x="510" y="-7" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="25" fill="#ffffff" letter-spacing="2.5">MAMA</text>
  </g>

  <!-- LINE 3: VÁLIDO POR: ZIA BIENESTAR -->
  <g transform="translate(10, 485)">
    <text y="-7" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="22" fill="#ffffff" letter-spacing="1">VÁLIDO POR:</text>
    <line x1="188" y1="2" x2="980" y2="2" stroke="#dfd7cf" stroke-width="1.2" />
    <text x="510" y="-7" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="24.5" fill="#ffffff" letter-spacing="2.5">ZIA BIENESTAR</text>
  </g>

  <!-- LINE 4: VENCIMIENTO: 10 / 12 / 2026 -->
  <g transform="translate(10, 565)">
    <text y="-7" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="22" fill="#ffffff" letter-spacing="1">VENCIMIENTO:</text>

    <!-- Day 10 -->
    <text x="216" y="-7" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="24" fill="#ffffff">10</text>
    <text x="264" y="-7" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-size="24" fill="#ffffff">/</text>
    <line x1="186" y1="2" x2="255" y2="2" stroke="#dfd7cf" stroke-width="1.2" />

    <!-- Month 12 -->
    <text x="296" y="-7" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="24" fill="#ffffff">12</text>
    <text x="345" y="-7" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-size="24" fill="#ffffff">/</text>
    <line x1="274" y1="2" x2="338" y2="2" stroke="#dfd7cf" stroke-width="1.2" />

    <!-- Year 2026 -->
    <text x="390" y="-7" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="bold" font-size="24" fill="#ffffff">2026</text>
    <line x1="360" y1="2" x2="980" y2="2" stroke="#dfd7cf" stroke-width="1.2" />
  </g>

  <!-- FOOTER -->
  <!-- Bottom Left: MÁS QUE UN REGALO, UNA EXPERIENCIA. -->
  <g transform="translate(10, 698)">
    <text font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="19" fill="#ffffff" letter-spacing="0.5">MÁS QUE UN REGALO,</text>
    <text y="24" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="19" fill="#ffffff" letter-spacing="0.5">UNA EXPERIENCIA.</text>
  </g>

  <!-- Bottom Right: AV. HIPOLITO YRIGOYEN 175, CÓRDOBA. AGENDA TU TURNO 3518677856 GIFTF1094 -->
  <g transform="translate(1030, 678)" text-anchor="end">
    <text font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="19" fill="#ffffff" letter-spacing="0.5">AV. HIPOLITO YRIGOYEN 175, CÓRDOBA.</text>
    <text y="26" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#ffffff">
      AGENDA TU TURNO <tspan font-weight="bold" font-size="21">3518677856</tspan>
    </text>
    <text y="52" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="23" fill="#ffffff" letter-spacing="1">GIFTF1094</text>
  </g>
</svg>
`;

fs.writeFileSync('public/attached_gift_card.svg', svg);
try {
  execSync('convert -density 200 public/attached_gift_card.svg public/gift_card_voucher.jpg');
  execSync('convert -density 200 public/attached_gift_card.svg public/gift_card_voucher.png');
  console.log('Successfully generated public/gift_card_voucher.jpg and public/gift_card_voucher.png');
} catch (e) {
  console.error('Convert failed:', e);
}
