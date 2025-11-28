// public/js/scripts.js
// Simple command palette open/close + keyboard shortcut (Cmd/Ctrl+K)
(function(){
  function bySel(s){ return document.querySelector(s); }
  const overlay = document.createElement('div');
  overlay.className = 'cmd-palette-overlay';
  overlay.innerHTML = `
    <div class="cmd-palette" role="dialog" aria-modal="true">
      <div class="search">
        <input type="search" placeholder="Type to search commands or jump to project..." aria-label="Search"/>
        <div class="kbd">Esc</div>
      </div>
      <div class="cmd-list">
        <div class="cmd-item"><div>Open Projects</div><div class="kbd">Enter</div></div>
        <div class="cmd-item"><div>Download Resume</div><div class="kbd">D</div></div>
        <div class="cmd-item"><div>Contact / Email</div><div class="kbd">E</div></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const bar = document.createElement('div');
  bar.className = 'cmd-bar';
  bar.innerHTML = `<div class="bar"><div class="hint"><span class="short">⌘K</span> Quick commands</div><div class="hint">Press to open</div></div>`;
  document.body.appendChild(bar);

  function openPalette(){ overlay.style.display = 'flex'; overlay.querySelector('input').focus(); }
  function closePalette(){ overlay.style.display = 'none'; }

  bar.addEventListener('click', openPalette);
  overlay.addEventListener('click', (e)=>{
    if (e.target === overlay) closePalette();
  });
  document.addEventListener('keydown', (e)=>{
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==='k') { e.preventDefault(); openPalette(); }
    if (e.key === 'Escape') closePalette();
  });
})();
