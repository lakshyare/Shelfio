// ============================================
//   SHELFIO — EASTER-EGGS.JS
//   Only the forbidden book remains.
// ============================================

function injectEggCSS() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes forbiddenFlash {
      0%   { opacity: 0; }
      20%  { opacity: 1; }
      80%  { opacity: 0.85; }
      100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

window.triggerForbiddenBook = function() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:9997; pointer-events:none;
    background: radial-gradient(ellipse at center,
      rgba(120,8,8,0.55) 0%,
      rgba(60,0,0,0.38) 45%,
      transparent 72%
    );
    animation: forbiddenFlash 2.8s ease forwards;
  `;
  document.body.appendChild(overlay);

  let flickers = 0;
  const bg = document.getElementById('room-bg');
  const flicker = setInterval(() => {
    bg.style.filter = flickers % 2 === 0
      ? 'brightness(0.28) saturate(0.4)'
      : 'brightness(0.52) saturate(0.88)';
    flickers++;
    if (flickers > 7) {
      clearInterval(flicker);
      bg.style.filter = 'brightness(0.52) saturate(0.88)';
    }
  }, 140);

  setTimeout(() => overlay.remove(), 3000);
};

function initEasterEggs() {
  injectEggCSS();
}