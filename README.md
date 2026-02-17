# Klynn Landing

Landing page independiente para Klynn - Next.js 16 + React 19 + Tailwind 4

## Descripción

Este es el repositorio independiente de la landing page de Klynn, separado del monorepo principal para permitir despliegues independientes y un desarrollo más ágil.

## Stack Tecnológico

- **Framework**: Next.js 16.1.1 (App Router)
- **Lenguaje**: TypeScript 5+
- **UI Library**: React 19.2.3
- **Estilos**: Tailwind CSS 4
- **Package Manager**: Bun
- **Validación**: Zod

## Estructura del Proyecto

```
landing/
├── src/
│   ├── components/
│   │   ├── landing/       # Componentes de la landing page
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Values.tsx
│   │   │   ├── WhyKlynn.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # Componentes UI reutilizables
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       └── toast.tsx
│   ├── hooks/
│   │   └── use-toast.ts   # Hook para notificaciones
│   └── lib/
│       └── utils.ts       # Utilidades
├── .gitea/workflows/      # CI/CD Workflows
│   ├── ci.yml            # Build & Test
│   ├── develop.yml       # PR Validation
│   └── master.yml        # Deploy & Release
├── docker-compose.yml     # Configuración Docker
├── docker-compose.develop.yml  # Configuración desarrollo
└── public/assets/logos/   # Assets de la marca
```

## Estrategia de Branching

- `master` → Producción
- `develop` → Integración/Staging
- `feature/*` → Nuevas características
- `bugfix/*` → Correcciones de bugs
- `hotfix/*` → Correcciones urgentes en producción

## CI/CD Workflows

### CI (ci.yml)
Ejecutado en push/PR a `develop` y `master`:
- Type checking
- Linting
- Build

### Develop (develop.yml)
Validación de PRs hacia `develop`:
- Validación de nombres de branch
- Chequeo de tamaño de PR
- Reglas de revisión

### Master (master.yml)
Deploy y release:
- Build & test
- Validación de PRs
- Auto-release (SemVer)
- Backmerge a develop

## Desarrollo Local

```bash
# Instalar dependencias
bun install

# Ejecutar en modo desarrollo
bun dev

# Build de producción
bun run build

# Type check
bun run type-check

# Lint
bun run lint
```

## Deploy

### Desarrollo
```bash
docker compose -f docker-compose.develop.yml up -d
```
URL: https://dev.landing.getklynn.com

### Producción
Los deploys a producción se realizan automáticamente vía Gitea Actions cuando se mergea a `master`.

## URLs

- **Producción**: https://landing.getklynn.com
- **Desarrollo**: https://dev.landing.getklynn.com
- **Repositorio**: https://git.getklynn.com/Klynn/Landing

## Comandos Útiles

```bash
# Ver estado de CI
tea actions view

# Crear PR
tea pr create --title "Feature X" --base develop --head feature/x

# Ver issues
tea issue list
```

## Notas

- Este repositorio fue creado a partir de la rama `feat/landing` del frontend original
- Mantiene las mismas integraciones CI/CD que el repositorio Frontend
- Los deploys son independientes del monorepo principal
