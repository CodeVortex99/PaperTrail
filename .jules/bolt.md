## 2026-07-08 - [Three.js Animation Resource Usage]
**Learning:** Three.js animations continue to consume CPU/GPU resources even if their container canvas is hidden via `display: none`.
**Action:** Use a flag or check the current section/visibility to stop the `requestAnimationFrame` loop when the animation is not visible.

## 2026-07-08 - [Sprite vs Cube Performance]
**Learning:** For background decorative elements, using `THREE.Sprite` with a `CanvasTexture` is significantly more performant than `THREE.Mesh` with `BoxGeometry`, especially when rendering text or symbols.
**Action:** Prefer Sprites for 2D-like floating elements in 3D backgrounds.
