// css/scripts.js — simple nav toggle + basic reveal
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  toggle && toggle.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav a');
    links.forEach(a => a.style.display = a.style.display === 'inline-block' ? 'none' : 'inline-block');
  });

  // small fade in for sections
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('section').forEach(s => {
    s.style.opacity = 0;
    s.style.transform = 'translateY(8px)';
    s.style.transition = 'opacity .6s ease, transform .6s ease';
    obs.observe(s);
  });
});
