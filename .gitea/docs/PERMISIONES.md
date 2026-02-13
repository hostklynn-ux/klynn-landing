# Estrategia de Branching - Git Flow

## Resumen
Usamos Git Flow para desarrollo colaborativo y controlado de código con permisos optimizados para equipos de desarrollo.

## Branches Principales

### main (Producción)
- **Propósito**: Código listo para producción
- **Acceso**: Push solo para equipo Admins (via whitelist)
- **Protección**: Branch protegida con review requerido
- **Deploy**: Automático a producción desde main

### develop (Desarrollo)
- **Propósito**: Integración continua y desarrollo activo
- **Acceso**: Push permitido para todos los miembros del equipo
- **Protección**: Branch protegida
- **Merge**: Pull requests desde feature/* a develop

### feature/* (Features)
- **Propósito**: Desarrollo de nuevas funcionalidades
- **Naming**: feature/nombre-feature o feature/issue-number
- **Acceso**: Push directo permitido (sin protección)
- **Merge**: Pull request a develop o main

### hotfix/* (Correcciones Urgentes)
- **Propósito**: Fix críticos en producción
- **Naming**: hotfix/descripción-del-fix
- **Acceso**: Push directo con revisión posterior
- **Merge**: Directamente a main y develop

## Reglas de Protección

### Branches Protegidas
- **main**: Solo equipo Admins puede hacer push directo
- **develop**: Todos los miembros pueden hacer push

### Equipos y Permisos
- **Admins**: Acceso completo a branches protegidas
- **Owners**: Acceso administrativo general
- **Frontend**: Acceso de escritura y desarrollo
- **Backend**: Acceso de escritura y desarrollo
- **Colaboradores**: Acceso de lectura a repos específicos según asignación

## Flujo de Trabajo

1. **Crear feature branch**: Desde develop
2. **Desarrollar feature**: Commits atómicos y descriptivos
3. **Pull Request**: Hacia develop con revisión obligatoria
4. **Integración**: Merge a develop desbloquea deploy
5. **Hotfix**: Branch desde main, merge a main y develop

## Protección de Código

- **Reviews obligatorias** en develop y main
- **CI/CD automatizado** desde develop
- **Deploy controlado** solo desde main

## Guía de Autenticación

Los desarrolladores deben configurar Git Credential Manager para acceso transparente y seguro a los repositorios. Ver documentación en .gitea/docs/gitea-login.md

Esta estrategia optimizada garantiza calidad, agilidad y colaboración efectiva en el entorno de desarrollo Klynn.
