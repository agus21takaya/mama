/**
 * Gentle spa harp / chime audio synthesis using Web Audio API
 */

class SpaAudioEngine {
  private audioCtx: AudioContext | null = null;

  private init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /**
   * Play celebratory soft harp arpeggio (warm pentatonic spa chime)
   */
  playChime() {
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      // Pentatonic notes: C5, E5, G5, B5, C6
      const frequencies = [523.25, 659.25, 783.99, 987.77, 1046.5];

      frequencies.forEach((freq, index) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.12);

        gain.gain.setValueAtTime(0.001, now + index * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.15, now + index * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.12 + 1.8);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + index * 0.12);
        osc.stop(now + index * 0.12 + 2.0);
      });
    } catch {
      // Audio play blocked or not allowed, safely ignore
    }
  }
}

export const spaAudio = new SpaAudioEngine();
