// scripts.js - tiny command palette toggle and keyboard shortcut (Cmd/Ctrl+K)
document.addEventListener('DOMContentLoaded', () => {
  const palette = document.getElementById('command-palette');
  const bar = document.getElementById('command-bar');

  function openPalette(){
    if(!palette) return;
    palette.style.display = 'block';
    setTimeout(()=> palette.classList.add('open'),10);
    // focus first input if present
    const input = palette.querySelector('input');
    if(input) input.focus();
  }
  function closePalette(){
    if(!palette) return;
    palette.classList.remove('open');
    setTimeout(()=> palette.style.display='none',220);
  }

  // toggle if user clicks the bar
  if(bar) bar.addEventListener('click', ()=> openPalette());

  // keyboard shortcut: Ctrl/Cmd + K
  window.addEventListener('keydown', (e) => {
    const keyK = e.key.toLowerCase() === 'k';
    if ( (e.ctrlKey || e.metaKey) && keyK ){
      e.preventDefault();
      openPalette();
    }
    if(e.key === 'Escape') closePalette();
  });

  // clicking outside closes palette
  const overlay = document.getElementById('palette-overlay');
  if(overlay) overlay.addEventListener('click', closePalette);
});
