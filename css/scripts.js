// css/scripts.js
// Minimal interactions: command palette, project modal, project button actions.

document.addEventListener('DOMContentLoaded', function () {

  // Command palette toggle (Ctrl/Cmd + K)
  const palette = document.getElementById('command-palette');
  const togglePalette = (show) => {
    if (!palette) return;
    palette.setAttribute('aria-hidden', show ? 'false' : 'true');
    palette.style.opacity = show ? '1' : '0';
    palette.style.transform = show ? 'translateY(0)' : 'translateY(6px)';
    palette.style.pointerEvents = show ? 'auto' : 'none';
  };
  let paletteVisible = false;
  togglePalette(false);

  window.addEventListener('keydown', function (e) {
    const isMod = e.ctrlKey || e.metaKey;
    if (isMod && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      paletteVisible = !paletteVisible;
      togglePalette(paletteVisible);
    }
    if (e.key === 'Escape' && paletteVisible) {
      paletteVisible = false;
      togglePalette(false);
    }
  });

  // Project buttons -> open modal or jump to anchor
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  const projectData = {
    'proj-testproject': {
      title: 'TestProject - Login Flow (Demo)',
      body: '<p>Sample login automation demo. Uses TestProject SDK for recording and verification. Contains POM skeleton & example testcases.</p><p><a href="#" target="_blank">View demo</a></p>'
    },
    'proj-playwright': {
      title: 'Playwright Test Suite',
      body: '<p>End-to-end Playwright tests for core flows. Includes CI config examples and simple test coverage reports.</p>'
    },
    'proj-selenium': {
      title: 'Selenium Cases',
      body: '<p>Classic Selenium WebDriver test cases - login, form validation, and cross-browser checks. Includes Page Object samples.</p>'
    }
  };

  function openModal(key) {
    if (!modal) return;
    const data = projectData[key] || { title: 'Project', body: '<p>Details coming soon</p>' };
    modalContent.innerHTML = '<h3 style="margin-bottom:6px;">' + data.title + '</h3>' + data.body;
    modal.setAttribute('aria-hidden', 'false');
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all';
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
  }

  document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      const tgt = this.getAttribute('data-target');
      if (!tgt) return;
      // open modal with project content
      openModal(tgt);
    });
  });

  // modal close buttons and click outside to close
  document.querySelectorAll('.modal-close').forEach(b => b.addEventListener('click', closeModal));
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

});
