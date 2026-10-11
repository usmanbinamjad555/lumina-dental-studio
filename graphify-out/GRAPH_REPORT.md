# Graph Report - lumina-dental-studio  (2026-10-11)

## Corpus Check
- 16 files · ~733,718 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 1, .xml 1, .css 1)

## Summary
- 111 nodes · 277 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- package.json
- ui.tsx
- compilerOptions
- Admin.tsx
- devDependencies
- App.tsx
- Home
- Lumina Dental Studio
- Services.tsx
- Pages.tsx
- vercel.json

## God Nodes (most connected - your core abstractions)
1. `useSeo()` - 17 edges
2. `App()` - 14 edges
3. `PageHeader()` - 14 edges
4. `Button()` - 13 edges
5. `Home()` - 12 edges
6. `BookingCta()` - 11 edges
7. `compilerOptions` - 11 edges
8. `Reveal()` - 10 edges
9. `Testimonials()` - 10 edges
10. `react-router-dom` - 9 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `Layout()`  [EXTRACTED]
  src/App.tsx → src/components/Layout.tsx
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.tsx → src/pages/Home.tsx
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.tsx → src/pages/Pages.tsx
- `App()` --calls--> `Faqs()`  [EXTRACTED]
  src/App.tsx → src/pages/Pages.tsx
- `App()` --calls--> `NotFound()`  [EXTRACTED]
  src/App.tsx → src/pages/Pages.tsx

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.09
Nodes (20): dependencies, react, react-dom, react-router-dom, name, private, scripts, build (+12 more)

### Community 1 - "ui.tsx"
Cohesion: 0.25
Nodes (14): react, react-router-dom, Footer(), Header(), Layout(), Logo(), nav, BtnProps (+6 more)

### Community 2 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, skipLibCheck (+4 more)

### Community 3 - "Admin.tsx"
Cohesion: 0.29
Nodes (8): sampleAppointments, statuses, Appointment, load(), save(), useAppointments(), Admin(), tone

### Community 4 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 5 - "App.tsx"
Cohesion: 0.46
Nodes (6): Admin, App(), useSeo(), Book(), Contact(), Dentists()

### Community 6 - "Home"
Cohesion: 0.43
Nodes (8): BeforeAfter(), Reveal(), Section(), Home(), About(), DentistCard(), TestimonialCard(), Testimonials()

### Community 7 - "Lumina Dental Studio"
Cohesion: 0.29
Nodes (6): Deploy to Vercel, Edit content, Lumina Dental Studio, Notes, Routes, Run locally

### Community 8 - "Services.tsx"
Cohesion: 0.62
Nodes (6): BookingCta(), Button(), ServiceCard(), NotFound(), ServiceDetail(), ServicesIndex()

### Community 9 - "Pages.tsx"
Cohesion: 0.60
Nodes (4): Accordion(), PageHeader(), faqs, Faqs()

## Knowledge Gaps
- **4 isolated node(s):** `@types/react`, `@types/react-dom`, `tailwindcss`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 46 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react-router-dom` connect `ui.tsx` to `package.json`, `Pages.tsx`, `App.tsx`, `Services.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **What connects `@types/react`, `@types/react-dom`, `tailwindcss` to the rest of the system?**
  _4 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09057971014492754 - nodes in this community are weakly interconnected._
- **Why does `react` connect `ui.tsx` to `package.json`, `Admin.tsx`, `App.tsx`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._