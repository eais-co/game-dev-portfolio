/* =========================================================
   animations.js — page-load sequence trigger + scroll reveals
   ========================================================= */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- page load intro sequence ---- */
  window.addEventListener('load', () => {
    document.documentElement.classList.add('is-loaded');
  });
  if (prefersReduced) {
    document.documentElement.classList.add('is-loaded');
  }

  /* ---- scroll reveal ---- */
  const revealTargets = document.querySelectorAll(
    '[data-reveal], [data-reveal-line], [data-reveal-group]'
  );

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
})();
