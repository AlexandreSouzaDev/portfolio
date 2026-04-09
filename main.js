/* =============================================
   PORTFOLIO — Alexandre de Souza Moreira
   main.js
   ============================================= */
 
document.addEventListener('DOMContentLoaded', () => {
 
  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
 
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
 
  reveals.forEach(el => revealObserver.observe(el));
 
  /* ── Animate language bars ── */
  const bars = document.querySelectorAll('.gh-lang-bar-fill');
 
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const pct = el.dataset.pct || '100';
        el.style.width = pct + '%';
        el.classList.add('animate');
        barObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
 
  bars.forEach(bar => {
    bar.style.width = '0%';
    barObserver.observe(bar);
  });
 
});
