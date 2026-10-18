/**
 * Renders the EXACT Gift Card Voucher attached by the user:
 * - Taupe linen paper background
 * - ZIA Estética & Spa
 * - "Este momento es tuyo. ¡Feliz día Má!"
 * - "GRACIAS POR TODO MÁ TE AMAMOS" with hearts
 * - DE: AGUS Y BENJA
 * - PARA: MAMA
 * - VÁLIDO POR: ZIA BIENESTAR
 * - VENCIMIENTO: 10 / 12 / 2026
 * - Golden botanical bouquet tied with ribbon bow
 * - MÁS QUE UN REGALO, UNA EXPERIENCIA.
 * - AV. HIPOLITO YRIGOYEN 175, CÓRDOBA. AGENDA TU TURNO 3518677856
 * - GIFTF1094
 */

export interface AttachedVoucherData {
  from: string;
  to: string;
  service: string;
  day: string;
  month: string;
  year: string;
  code: string;
  address: string;
  phone: string;
}

export const ATTACHED_VOUCHER_DATA: AttachedVoucherData = {
  from: "AGUS Y BENJA",
  to: "MAMA",
  service: "ZIA BIENESTAR",
  day: "10",
  month: "12",
  year: "2026",
  code: "GIFTF1094",
  address: "AV. HIPOLITO YRIGOYEN 175, CÓRDOBA.",
  phone: "3518677856",
};

export function drawExactAttachedCard(
  canvas: HTMLCanvasElement,
  scale: number = 2
): void {
  const baseW = 1042;
  const baseH = 736;
  canvas.width = baseW * scale;
  canvas.height = baseH * scale;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.scale(scale, scale);

  // 1. Warm earthy taupe background
  const bg = ctx.createLinearGradient(0, 0, baseW, baseH);
  bg.addColorStop(0, '#b2a191');
  bg.addColorStop(0.5, '#ab9a8a');
  bg.addColorStop(1, '#a39282');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, baseW, baseH);

  // Subtle paper grain
  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.025)';
  for (let i = 0; i < 4000; i++) {
    const rx = Math.random() * baseW;
    const ry = Math.random() * baseH;
    const size = Math.random() * 1.5;
    ctx.fillRect(rx, ry, size, size);
  }
  ctx.restore();

  // 2. Top Left: "ZIA" and "Estética & Spa"
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'normal 400 114px "Cormorant Garamond", "Times New Roman", Georgia, serif';
  ctx.textAlign = 'left';
  ctx.letterSpacing = '5px';
  ctx.fillText('ZIA', 12, 130);

  ctx.font = 'italic 400 28px "Cormorant Garamond", "Times New Roman", Georgia, serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('Estética & Spa', 14, 172);
  ctx.restore();

  // 3. Top Right: "Este momento es tuyo." & "¡Feliz día Má!"
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = '#e8d9aa';
  ctx.font = 'italic bold 32px "Cormorant Garamond", "Times New Roman", Georgia, serif';
  ctx.fillText('Este momento es tuyo.', 1024, 88);
  ctx.fillText('¡Feliz día Má!', 1024, 126);
  ctx.restore();

  // 4. Center Banner with Hearts: "GRACIAS POR TODO MÁ TE AMAMOS"
  const drawHeart = (x: number, y: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.bezierCurveTo(-15, -12, -26, 6, 0, 24);
    ctx.bezierCurveTo(26, 6, 15, -12, 0, 5);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.2;
    ctx.stroke();
    ctx.restore();
  };

  drawHeart(28, 224);
  drawHeart(1012, 224);

  ctx.save();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'italic 700 25px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('GRACIAS POR TODO MÁ TE AMAMOS', 520, 246);
  ctx.restore();

  // 5. Golden Bouquet Illustration on the right
  ctx.save();
  ctx.translate(790, 480);
  const goldStroke = ctx.createLinearGradient(-100, -200, 100, 200);
  goldStroke.addColorStop(0, '#f2e4b8');
  goldStroke.addColorStop(0.5, '#dcce95');
  goldStroke.addColorStop(1, '#c5b071');

  ctx.strokeStyle = goldStroke;
  ctx.fillStyle = 'rgba(238, 222, 169, 0.12)';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Stems
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(-5, 5);
  ctx.quadraticCurveTo(-10, -90, -45, -170);
  ctx.moveTo(0, 5);
  ctx.quadraticCurveTo(0, -110, 0, -220);
  ctx.moveTo(5, 5);
  ctx.quadraticCurveTo(15, -90, 55, -170);
  ctx.moveTo(-5, 5);
  ctx.quadraticCurveTo(-40, -60, -80, -95);
  ctx.moveTo(5, 5);
  ctx.quadraticCurveTo(40, -60, 85, -95);
  ctx.stroke();

  // Flower Blooms
  // Center
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.ellipse(0, -225, 26, 38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Left
  ctx.beginPath();
  ctx.ellipse(-45, -170, 26, 32, -0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Right
  ctx.beginPath();
  ctx.ellipse(55, -170, 26, 32, 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Leaves
  ctx.lineWidth = 2;
  const drawLeaf = (lx: number, ly: number, rx: number, ry: number, rot: number) => {
    ctx.beginPath();
    ctx.ellipse(lx, ly, rx, ry, rot, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  };
  drawLeaf(-80, -95, 14, 25, -0.8);
  drawLeaf(85, -95, 14, 25, 0.8);
  drawLeaf(-50, -70, 12, 22, -0.6);
  drawLeaf(50, -70, 12, 22, 0.6);

  // Large ribbon bow
  ctx.lineWidth = 3.5;
  // Left Loop
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-45, -35, -90, -20, -80, 20);
  ctx.bezierCurveTo(-70, 45, -25, 30, 0, 5);
  ctx.fill();
  ctx.stroke();
  // Right Loop
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(45, -35, 90, -20, 80, 20);
  ctx.bezierCurveTo(70, 45, 25, 30, 0, 5);
  ctx.fill();
  ctx.stroke();
  // Knot
  ctx.fillStyle = '#dccb93';
  ctx.beginPath();
  ctx.ellipse(0, 3, 12, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Tails
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-5, 10);
  ctx.bezierCurveTo(-40, 70, -60, 140, -85, 200);
  ctx.bezierCurveTo(-55, 160, -30, 140, -10, 30);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(5, 10);
  ctx.bezierCurveTo(50, 75, 70, 145, 95, 205);
  ctx.bezierCurveTo(65, 165, 40, 140, 10, 30);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // 6. Form Lines
  // DE: AGUS Y BENJA
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('DE:', 10, 318);

  ctx.strokeStyle = '#ded7cf';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(110, 327);
  ctx.lineTo(980, 327);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.font = 'italic bold 25px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '2.5px';
  ctx.fillText('AGUS Y BENJA', 500, 318);
  ctx.restore();

  // PARA: MAMA
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('PARA:', 10, 398);

  ctx.strokeStyle = '#ded7cf';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(110, 407);
  ctx.lineTo(980, 407);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.font = 'italic bold 25px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '2.5px';
  ctx.fillText('MAMA', 510, 398);
  ctx.restore();

  // VÁLIDO POR: ZIA BIENESTAR
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('VÁLIDO POR:', 10, 478);

  ctx.strokeStyle = '#ded7cf';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(188, 487);
  ctx.lineTo(980, 487);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.font = 'italic bold 25px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '2.5px';
  ctx.fillText('ZIA BIENESTAR', 510, 478);
  ctx.restore();

  // VENCIMIENTO: 10 / 12 / 2026
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('VENCIMIENTO:', 10, 558);

  ctx.font = 'italic bold 24px "Montserrat", Arial, sans-serif';
  ctx.fillText('10', 216, 558);
  ctx.fillText('/', 264, 558);
  ctx.fillText('12', 296, 558);
  ctx.fillText('/', 345, 558);
  ctx.fillText('2026', 390, 558);

  ctx.strokeStyle = '#ded7cf';
  ctx.lineWidth = 1.2;
  // Day underline
  ctx.beginPath();
  ctx.moveTo(186, 567);
  ctx.lineTo(255, 567);
  ctx.stroke();
  // Month underline
  ctx.beginPath();
  ctx.moveTo(274, 567);
  ctx.lineTo(338, 567);
  ctx.stroke();
  // Year underline
  ctx.beginPath();
  ctx.moveTo(360, 567);
  ctx.lineTo(980, 567);
  ctx.stroke();
  ctx.restore();

  // 7. Footer
  // Bottom Left: MÁS QUE UN REGALO, UNA EXPERIENCIA.
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 19px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText('MÁS QUE UN REGALO,', 10, 698);
  ctx.fillText('UNA EXPERIENCIA.', 10, 722);
  ctx.restore();

  // Bottom Right
  ctx.save();
  ctx.textAlign = 'right';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 19px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText('AV. HIPOLITO YRIGOYEN 175, CÓRDOBA.', 1030, 678);

  ctx.font = '400 20px "Montserrat", Arial, sans-serif';
  ctx.fillText('AGENDA TU TURNO ', 900, 704);
  ctx.font = 'bold 21px "Montserrat", Arial, sans-serif';
  ctx.fillText('3518677856', 1030, 704);

  ctx.font = 'bold 23px "Montserrat", Arial, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('GIFTF1094', 1030, 730);
  ctx.restore();
}

/**
 * Trigger immediate browser download of the exact attached gift card
 */
export async function downloadAttachedGiftCard(): Promise<void> {
  const canvas = document.createElement('canvas');
  drawExactAttachedCard(canvas, 2); // 2x Retina scale

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return resolve();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'GiftCard_Mama_ZiaBienestar_Agus_y_Benja.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve();
      }, 500);
    }, 'image/jpeg', 0.95);
  });
}
