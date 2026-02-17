# Klynn Landing — Technical Overview

This document provides a concise, practical reference for the Klynn Landing frontend: development tools, project structure, and key components.
**Audience:** Frontend developers onboarding the project or maintaining the Next.js landing page.
**Stack summary**
- **Framework:** Next.js (App Router) v16.1.1
- **Language:** TypeScript
- **UI:** React 19.2.3 with Tailwind CSS v4
- **Validation:** Zod
- **Linting:** ESLint
- **Package Manager**: Bun

## Getting started / Tools
- **Node.js & package manager:** This repository uses `bun` as the primary runtime and package manager for CI and development. Bun provides 10x faster installs, built-in TypeScript support, and a simpler toolchain compared to Node.js + pnpm.
- **Install:** `bun install`
- **Scripts:**
	- **dev:** `bun dev` — run local dev server
	- **build:** `bun run build` — create production build
	- **lint:** `bun run lint` — run linter
	- **type-check:** `bun run type-check` — TypeScript type checks
- **Editor/IDE:** Use an editor with TypeScript and React support (VS Code recommended). Enable ESLint and TypeScript extensions.

## Project conventions & methodology
- **App Router:** Filesystem-based routes under `src/app/`.
- **Component-Based Structure:** The landing page is built from modular sections located in `src/components/landing/`.
- **Server Components:** Most components are React Server Components (RSC) by default to optimize for performance and static content delivery. Client-side interactivity is introduced where needed with the `"use client"` directive (e.g., in the contact form).
- **UI Primitives:** Reusable, low-level UI components like buttons and inputs are located in `src/components/ui/`.

## Key files and folders
- **App root:** `src/app/` — Next.js App Router pages and layout.
- **Primary entries:**
	- `src/app/layout.tsx` — Root layout, applies global styles and fonts.
	- `src/app/page.tsx` — The main entry point for the landing page, composing all the sections.
- **Landing Components:** `src/components/landing/` — The core sections of the page.
	- `Hero.tsx`, `About.tsx`, `Services.tsx`, `Values.tsx`, `WhyKlynn.tsx`, `Testimonials.tsx`, `Contact.tsx`, `Footer.tsx`.
- **UI Components:** `src/components/ui/` — Reusable UI elements.
	- `button.tsx`, `input.tsx`, `textarea.tsx`, `toast.tsx`.
- **Hooks:** `src/hooks/`
	- `use-toast.ts` — Hook for displaying notifications, used in the contact form.
- **Lib & helpers:** `src/lib/`
	- `utils.ts` — Shared utility functions.
- **CI/CD:** `.gitea/workflows/` — Gitea Actions workflows for build, test, and deployment.

## Important components and layouts
- **Root Layout (`src/app/layout.tsx`)**: Wraps the entire application, setting up the base HTML structure, fonts, and Tailwind CSS.
- **Page (`src/app/page.tsx`)**: The main page component that assembles all the individual sections from `src/components/landing/` in the correct order.
- **Landing Sections (`src/components/landing/*.tsx`)**: Each file represents a distinct section of the landing page (e.g., `Hero.tsx`, `Contact.tsx`). They are designed to be self-contained and are primarily static server components.
- **Contact Form (`Contact.tsx`)**: One of the few client components, as it handles user input, state, and form submission logic, including showing toast notifications via `use-toast.ts`.

## Pages and route mapping
The App Router maps filesystem structure to URL paths. Key routes:

- **/** — Home (`src/app/page.tsx`)

This project is a Single-Page Application (SPA) from a routing perspective. All content is served from the root path.

## Where to look for specific concerns

- **App entry and layout:** `src/app/layout.tsx` and `src/app/page.tsx`
- **Page sections:** `src/components/landing/`
- **Reusable UI:** `src/components/ui/`
- **CI/CD Configuration:** `.gitea/workflows/`

