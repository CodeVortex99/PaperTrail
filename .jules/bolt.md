# Bolt's Journal - Critical Learnings

## 2025-05-14 - Initial Assessment
**Learning:** The application is a Single Page Application (SPA) contained within a single `index.html` file. It uses `localStorage` for persistence and manual DOM manipulation for UI updates. A significant performance bottleneck was identified in the Weekly Planner: adding or removing a task triggers a full re-render of the entire grid (`renderPlanner()`), which is inefficient as the number of slots grows (7 days * 6 hours = 42 slots + headers).

**Action:** Optimize the Weekly Planner to use targeted DOM updates for specific slots instead of a full grid re-render. This will be implemented in Step 5 of the plan.

## 2025-05-14 - Navigation and Search Bottlenecks
**Learning:** The `navigate()` function was iterating through all section IDs and DOM elements on every hash change, and the `boundary-search` was triggering full DOM re-renders on every keystroke. While small, these are classic bottlenecks in vanilla SPA architectures.
**Action:** Refactored `navigate()` to track `currentSection` for O(1) visibility toggling and implemented a `debounce` utility for search to reduce DOM churn.
