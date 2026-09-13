# Ais Saleem — Portfolio

A single-page game-dev / UI-UX portfolio built with plain HTML5, CSS3, and vanilla JavaScript (no frameworks, no build step).

## Run it
Just open `index.html` in a browser, or serve the folder with any static server:

```
npx serve .
```

## Structure
```
portfolio/
├── index.html
├── css/
│   ├── style.css        (tokens, layout, all sections)
│   ├── responsive.css   (tablet/mobile breakpoints)
│   └── animations.css   (load sequence + scroll reveals)
├── js/
│   ├── main.js          (typewriter, custom cursor, hero parallax, contact form)
│   ├── navigation.js    (header state, mobile menu, active link)
│   ├── animations.js    (IntersectionObserver scroll reveals)
│   └── projects.js      (project-card cursor state)
├── assets/
│   ├── characters/sentinel.svg   (original hero character graphic — see note below)
│   ├── projects/                 (empty — drop project screenshots here)
│   └── icons/
└── README.md
```

## Notes on the build
- No frameworks: pure HTML/CSS/JS as required.
- Respects `prefers-reduced-motion` throughout (page-load sequence and scroll reveals both degrade to instant/no motion).
- Custom cursor and hero-character parallax are desktop-only; disabled automatically on touch devices.
- Mobile nav is a full-screen overlay, closable via button, backdrop click is not required since Escape key and close button both work; focus moves into it on open.
- Images are lazy-loading-ready structurally — once you add real project photos, add `loading="lazy"` to those `<img>` tags and export as WebP where possible to keep the site fast.
