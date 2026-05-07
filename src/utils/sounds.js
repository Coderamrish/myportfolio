/**
 * Audio utility for portfolio sound effects.
 * Uses JSDelivr CDN for high-reliability asset delivery.
 * Includes a silent unlock mechanism to satisfy browser autoplay policies.
 */

const CLICK_URL = 'https://cdn.jsdelivr.net/gh/rse/soundfx/soundfx.d/ui-click.mp3';
const WHOOSH_URL = 'https://cdn.jsdelivr.net/gh/rse/soundfx/soundfx.d/ui-transition.mp3';

let audioContext;

// Initialize audio context on first interaction
const initAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
};

const clickSound = new Audio(CLICK_URL);
const whooshSound = new Audio(WHOOSH_URL);

// Pre-load settings
clickSound.volume = 0.3;
whooshSound.volume = 0.15;
clickSound.preload = 'auto';
whooshSound.preload = 'auto';

export const playClick = () => {
  try {
    initAudioContext();
    const sound = clickSound.cloneNode();
    sound.volume = 0.3;
    sound.play().catch(e => console.warn("Click sound blocked:", e.message));
  } catch (err) {
    console.error("Audio error:", err);
  }
};

export const playWhoosh = () => {
  try {
    initAudioContext();
    const sound = whooshSound.cloneNode();
    sound.volume = 0.15;
    sound.play().catch(e => console.warn("Whoosh sound blocked:", e.message));
  } catch (err) {
    console.error("Audio error:", err);
  }
};
