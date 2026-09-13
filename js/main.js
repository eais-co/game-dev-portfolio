/* =========================================================
   main.js — typewriter, custom cursor, hero parallax, form
   ========================================================= */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ---------------- Typewriter identity ---------------- */
  const roles = [
    'GAME DEVELOPER',
    'GAME DESIGNER',
    'UI/UX DESIGNER',
    'STORYTELLER',
  ];
  const typeEl = document.querySelector('.hero-typewriter .type-target');
  const aboutRoleItems = document.querySelectorAll('.about-roles li');

  if (typeEl) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function syncAboutRoles() {
      aboutRoleItems.forEach((li, i) => {
        li.classList.toggle('is-active', i === roleIndex % aboutRoleItems.length);
      });
    }

    function tick() {
      const current = roles[roleIndex % roles.length];

      if (!deleting) {
        charIndex++;
        typeEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          syncAboutRoles();
          setTimeout(tick, 1800);
          return;
        }
        setTimeout(tick, 75);
      } else {
        charIndex--;
        typeEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex++;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 35);
      }
    }

    if (prefersReduced) {
      typeEl.textContent = roles[0];
      syncAboutRoles();
    } else {
      setTimeout(tick, 900);
    }
  }

  /* ---------------- Custom cursor (desktop only) ---------------- */
  if (!isTouch) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    });

    function raf() {
      curX += (mouseX - curX) * 0.35;
      curY += (mouseY - curY) * 0.35;
      cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    }
    raf();

    const hoverables = document.querySelectorAll('a, button, .skill-card, input, textarea');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* ---------------- Hero character subtle parallax ---------------- */
  const heroChar = document.querySelector('.hero-char');
  const heroVisual = document.querySelector('.hero-visual');
  if (heroChar && heroVisual && !isTouch && !prefersReduced) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      const moveX = relX * 14; // px, within the 5-15px guidance
      const moveY = relY * 10;
      heroChar.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    heroVisual.addEventListener('mouseleave', () => {
      heroChar.style.transform = 'translate(0, 0)';
    });
  }

  /* ---------------- Contact form (frontend-only demo) ---------------- */
  const form = document.querySelector('.contact-form');
  if (form) {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (status) {
        status.textContent = 'This form has no backend connected yet — email eaissaleem@gmail.com directly for now.';
      }
    });
  }

  /* ---------------- Footer year ---------------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
