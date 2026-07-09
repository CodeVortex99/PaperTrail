# Project Memory

## Technical Core
- **Architecture:** Vanilla JS SPA, Vite-powered build.
- **Performance:** Throttled event listeners (mousemove: 32ms), lazy 3D rendering (loop paused when hidden), THREE.Sprite background symbols, native browser scrolling.
- **Navigation:** Hash-based (#landing, #dashboard, etc.) with `currentSection` tracking and category filtering (GCSE/A-Levels/Uni).
- **Data:** Local-first persistence via `localStorage` (Profile, Goals, SRS, Planner, Weaknesses).

## Key Features & Logic
- **Dashboard:** Activity logs, Daily Goals, Exam Countdown, Progress SVG charts.
- **A-Level Specific:** UCAS Tariff Calculator (A*=56, A=48, B=40, C=32, D=24, E=16).
- **Papers:** Conventional pathing: `papers/{Subj}/{Board}/{Sess} {Type} - {Paper}.pdf`.
- **Revision:** Minimalist SRS flashcards (SM-2 logic), Quiz Lab, text-based Spec Checklist parser.
- **Planner:** Weekly/Monthly toggles with optimized `updateSlot` DOM manipulation.

## UI/UX Standards
- **Theme:** True black dark mode (#000000 background).
- **Navigation:** Persistent hamburger menu with pathway switcher.
- **Styling:** Consistent spacing, large tactile cards, CSS-variable driven.

## Files
- `Agents.md`: Principles (YAGNI, Graph-First, Speed as a Feature).
- `Skills.md`: Functional capability list.
- `index.html`: Unified application logic and markup.
