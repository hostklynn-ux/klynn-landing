# SmartClean Frontend — Technical Overview

This document provides a concise, practical reference for the SmartClean frontend: development tools, important components and layouts, application pages and routes, routing protection behavior, and the initial global state used by the app.
**Audience:** frontend developers onboarding the project or maintaining the Next.js app.
**Stack summary**
- **Framework:** Next.js (App Router) v16.x
- **Language:** TypeScript
- **UI:** React 19 with Tailwind CSS v4
- **Validation:** Zod
- **Hashing:** bcryptjs
- **Linting:** ESLint

## Getting started / Tools
- **Node.js & package manager:** This repository uses `bun` as the primary runtime and package manager for CI and development. Bun provides 10x faster installs, built-in TypeScript support, and a simpler toolchain compared to Node.js + pnpm.
- **Install:** `bun install`
- **Scripts:**
	- **dev:** `next dev` — run local dev server
	- **build:** `next build` — create production build
	- **start:** `next start` — run production server
	- **lint:** `eslint` — run linter
	- **type-check:** `tsc --noEmit` — TypeScript type checks
	- **clean:** remove `.next` and `node_modules`
- **Editor/IDE:** Use an editor with TypeScript and React support (VS Code recommended). Enable ESLint and TypeScript extensions.

## Project conventions & methodology
- **App Router:** filesystem-based routes under `app/` (React Server Components by default; `"use client"` denotes client components).
- **Server/Client split:** Keep data fetching and protected logic in server components or API routes; UI interactions and hooks live in client components.
- **Global state:** `GlobalStateProvider` provides app-wide state (user, token, theme) persisted to `localStorage`.

## Key files and folders
- **App root:** `app/` — Next.js App Router pages and layout.
- **Primary entries:**
	- `app/layout.tsx` — root layout and providers
	- `app/page.tsx` — home page
	- `app/dashboard/page.tsx` — dashboard
	- `app/login/page.tsx` — login flow
	- `app/register/page.tsx` — registration page
- **API routes:** `app/api/` — server endpoints
	- `app/api/auth/[...nextauth]/route.ts` — next-auth route handler
	- `app/api/auth/auth.ts` — custom auth utilities
- **Components:** `app/components/` contains layout pieces:
	- `Header.tsx` — top navigation/header
	- `Nav.tsx` — navigation links
	- `Footer.tsx` — footer
- **Lib & helpers:** `app/lib/` contains shared helpers and documentation; `src/shared` and `app/lib` hold shared logic and services (e.g., `login-form.tsx`, `actions.ts`, `api.ts`).
- **Providers:** `app/providers/GlobalStateProvider.tsx` — global state provider and hook `useGlobalState()`.

## Important components and layouts
- **Root Layout (`app/layout.tsx`)**: wraps pages in global providers (Auth provider, `GlobalStateProvider`, Tailwind styles). Ensures consistent framing and shared UI.
- **`Header`, `Nav`, `Footer`**: shared across pages; use client components for interactive parts (menu, sign-out).
- **Pages as components:** Each page under `app/` is a route entrypoint; pages can import modular UI from `app/components` and `app/lib`.
- **Login helpers:** `app/lib/login-form.tsx` and `app/login/providers.tsx` manage UI and provider configuration for authentication.

## Pages and route mapping
The App Router maps filesystem structure to URL paths. Key routes:

- **/** — Home (`app/page.tsx`)
- **/dashboard** — Dashboard (`app/dashboard/page.tsx`) — protected via middleware
- **/login** — Login UI (`app/login/page.tsx`) and provider setup
- **/register** — Registration page (`app/register/page.tsx`)
- **/api/auth/** — Authentication endpoints handled by `next-auth` and local helpers

Custom or role-specific routes referenced in middleware:
- `/admin/*` and `/user/*` — examples for role-based destinations

Note: Add new pages by creating directories and `page.tsx` files under `app/` (App Router pattern).

## Future Pages and Features

Based on the system's requirements and functionalities (cleaning service platform), the following pages are planned for future development. These will expand the app's capabilities for users, cleaners, and admins.

### User-Facing Pages
- **/profile** — User profile management: view/edit personal info, preferences, and account settings.
- **/services** — Services catalog: browse available cleaning services (e.g., home cleaning, office cleaning) with descriptions, pricing, and options.
- **/booking** — Booking interface: schedule cleaning appointments, select services, dates, times, and locations. Includes a calendar view and availability checker.
- **/bookings** — My bookings: list of past and upcoming bookings, with status tracking (pending, confirmed, in-progress, completed).
- **/payments** — Payment history and methods: view invoices, manage payment cards, and handle billing.
- **/notifications** — User notifications: alerts for booking confirmations, reminders, updates, and promotions.

### Cleaner/Provider Pages
- **/cleaner/dashboard** — Cleaner dashboard: view assigned jobs, schedule, earnings, and performance metrics.
- **/cleaner/profile** — Cleaner profile: manage skills, availability, certifications, and portfolio.
- **/cleaner/jobs** — Job management: accept/reject jobs, update status, and communicate with clients.

### Admin Pages
- **/admin/dashboard** — Admin overview: system metrics, user stats, revenue reports, and management tools.
- **/admin/services** — Service management: add/edit/delete services, set pricing, and manage categories.
- **/admin/bookings** — Booking oversight: monitor all bookings, resolve conflicts, and assign cleaners.
- **/admin/payments** — Payment administration: process refunds, manage payouts to cleaners, and financial reports.
- **/admin/settings** — System settings: configure app-wide options like fees, notifications, and integrations.

### Additional Features
- **Search and Filters:** Integrated into services and bookings pages for finding cleaners or services by location, price, ratings.
- **Ratings and Reviews:** Post-booking reviews on cleaners and services, visible on profiles.
- **Real-time Chat:** In-app messaging between users and cleaners for coordination.
- **Mobile Responsiveness:** All pages optimized for mobile devices, with potential PWA features.
- **Integrations:** Third-party services like payment gateways (Stripe), maps (Google Maps), and notifications (email/SMS).

These pages will follow the same App Router pattern: create `app/[route]/page.tsx` files, ensure middleware protection where needed, and integrate with the global state for user context.

## Routing protection and middleware

- The app uses a middleware at `app/login/middleware.ts` to enforce protected routes. Behavior:
	- Defines a `protectedRoutes` list (e.g., `/dashboard`, `/admin`, `/user`).
	- If a request to a protected route has no session, middleware redirects to `/login` with a `callbackUrl` query param.
	- If a logged-in user requests `/login`, middleware redirects them to a role-based dashboard (e.g., `/admin/dashboard`, `/user/dashboard`) based on `session.user.role`.
	- The middleware matcher covers protected paths and `/login`.

## Global state and initial state

- **Provider:** `app/providers/GlobalStateProvider.tsx` exposes `useGlobalState()`.
- **Initial state shape:**

```ts
type State = {
	user: { name: string; email?: string } | null;
	token: string | null;
	theme: 'light' | 'dark';
};

const initialState: State = {
	user: null,
	token: null,
	theme: 'light',
};
```

- **Actions:**
	- `login` — store `user` and `token`
	- `logout` — clear `user` and `token`
	- `toggleTheme` — switch between `light` and `dark`
- **Persistence:** `token` and `user` are read from and written to `localStorage` keys: `sc_token` and `sc_user`.

Usage: Wrap the app in `GlobalStateProvider` and use `const { state, dispatch } = useGlobalState()` in client components to read state and dispatch actions.

## Development tips & TODOs

- Keep validations near the API boundary using `zod` schemas.
- Prefer Server Components for data fetching to reduce client bundle size, and only use `"use client"` where necessary.
- Centralize API calls in `app/lib/api.ts` or `src/shared/api.ts` to make switching environments or base URLs easier.
- Add tests for authentication flows and middleware redirects.

## Where to look for specific concerns

- App entry and layouts: [app/layout.tsx](app/layout.tsx)
- Global state: [app/providers/GlobalStateProvider.tsx](app/providers/GlobalStateProvider.tsx)
- Auth routes & helpers: [app/api/auth](app/api/auth)
- Middleware: [app/login/middleware.ts](app/login/middleware.ts)

