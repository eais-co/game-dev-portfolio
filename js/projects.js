/* =========================================================
   projects.js — project card hover behavior (cursor state)
   ========================================================= */
(function () {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return; // touch devices don't get the custom cursor

  const projectPanels = document.querySelectorAll('.project-panel');

  projectPanels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => cursor.classList.add('is-project'));
    panel.addEventListener('mouseleave', () => cursor.classList.remove('is-project'));
  });
})();
