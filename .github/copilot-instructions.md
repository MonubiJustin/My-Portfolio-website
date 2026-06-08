# Copilot Instructions

## Project snapshot

This is a Next.js App Router portfolio site for Monubi Justin. The home page is a single-scroll landing page assembled from section components in `components/sections/`, with shared UI helpers in `components/ui/` and content data in `data/`.

## Build, test, and lint

- `npm run dev` — start the local dev server.
- `npm run build` — production build.
- `npm run start` — run the production build locally.
- `npm run lint` — run ESLint across the project.
- `npm run lint -- app/page.tsx` — lint a single file.

There is no dedicated `test` script in `package.json`.

## Architecture

- `app/layout.tsx` defines global metadata and imports `app/globals.css`.
- `app/page.tsx` composes the landing page in a fixed order: Navbar, Hero, About, Projects, CurrentlyLearning, CTA banner, Contact, Footer.
- `components/sections/` contains the page sections; most are client components because they use Framer Motion or browser APIs.
- `components/ui/` contains reusable primitives such as animation wrappers, section headers, and custom social icons.
- `data/` holds the structured content used by the sections: navigation, projects, skills, and social/contact links.
- Styling is driven by `app/globals.css` design tokens plus Tailwind utility classes and inline styles where needed.

## Conventions

- Use the `@/*` alias from `tsconfig.json` for imports.
- Keep content in `data/` and render it from components instead of hardcoding repeated values in sections.
- Reuse `SectionHeader`, `FadeUp`, `FadeIn`, `StaggerContainer`, and `StaggerChild` for section layout and motion.
- Social links use the custom SVG components in `components/ui/SocialIcons.tsx`; lucide-react does not provide those icons here.
- Project and skill icons are string-keyed maps from the data objects to lucide/custom icon components.
- The design system lives in `app/globals.css` with tokens like `--color-cream-*`, `--color-espresso-*`, `btn-primary`, `btn-outline`, `badge`, `card`, `section`, and `container`.
- Use `"use client"` only for components that need state, effects, Framer Motion, or DOM APIs.
- `Navbar` highlights the active section with `IntersectionObserver`; section `id`s must stay aligned with `data/navigation.ts`.
- The contact form is currently a UI-only placeholder; keep submission behavior aligned with the existing `status` state unless real backend wiring is added.
