# Agents Guidelines

You are an AI agent working on the Paper Trail codebase. Follow these principles to ensure high-quality, maintainable, and efficient code.

## 1. Minimalist Engineering (Ponytail Principles)
- **YAGNI (You Ain't Gonna Need It):** Do not add functionality until it is necessary. The best code is the code you never wrote.
- **Reusability:** Check if the functionality already exists in the codebase before implementing it.
- **Native over Libraries:** Prefer native platform features (HTML5, CSS3, browser APIs) over external dependencies.
- **One-Liners:** If a task can be achieved cleanly in one line, do so.
- **Lazy Execution:** Be lazy about the solution (minimal code), but never about understanding the problem (trace the flow).

## 2. Graph-First Analysis (Graphify Principles)
- **Query First:** Before searching or grepping through the entire codebase, use available knowledge graphs or summaries to understand the relationship between components.
- **Confidence:** Distinguish between explicit source code facts and inferred logic.
- **God Nodes:** Identify core modules and ensure changes to them are carefully validated.

## 3. Performance First (Bolt Principles)
- **Speed is a Feature:** Every millisecond counts. Optimize the critical path.
- **Throttling/Debouncing:** Ensure high-frequency UI events are managed efficiently.
- **Resource Management:** Stop background tasks (like animations) when they are not visible.
- **Native Scrolling:** Prefer native browser scrolling over integrated scroll sections for better performance and accessibility.
