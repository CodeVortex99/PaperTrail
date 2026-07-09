## 2026-07-08 - [Three.js Animation Resource Usage]
**Learning:** Three.js animations continue to consume CPU/GPU resources even if their container canvas is hidden via `display: none`.
**Action:** Use a flag or check the current section/visibility to stop the `requestAnimationFrame` loop when the animation is not visible.

## 2026-07-08 - [Sprite vs Cube Performance]
**Learning:** For background decorative elements, using `THREE.Sprite` with a `CanvasTexture` is significantly more performant than `THREE.Mesh` with `BoxGeometry`, especially when rendering text or symbols.
**Action:** Prefer Sprites for 2D-like floating elements in 3D backgrounds.

## 2026-07-09 - [Native vs Integrated Scrolling]
**Learning:** Integrated scroll sections (overflow-y: auto) on multiple containers can lead to complex scroll chaining and reduced FPS on mobile devices. They also break native browser accessibility features like "scroll to top" on iOS.
**Action:** Prefer a single, top-level scrollable container (the body/html) and remove nested scroll areas for a smoother, more predictable user experience.

## 2026-07-09 - [Efficient Grade Calculations]
**Learning:** When implementing interactive calculators, using pure JavaScript without heavy frameworks ensures zero overhead and instantaneous feedback.
**Action:** Use simple event listeners (onchange) and direct DOM manipulation for small-scale utility tools like the UCAS calculator.
