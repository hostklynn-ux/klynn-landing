# Documentación del Pipeline CI/CD con Gitea Actions

## 📋 Resumen

Este documento describe el pipeline de CI/CD implementado para el proyecto **AI-Service** utilizando **Gitea Actions**. El sistema está diseñado para gestionar el flujo de trabajo desde desarrollo hasta producción con validaciones automáticas, versionado semántico y backmerge.

### 📁 Estructura de Archivos de Workflow

```
📂 .gitea/workflows/
├── 📄 master.yml          # Pipeline para rama master (producción)
├── 📄 develop.yml       # Validaciones para PRs a develop
```

## 🔄 Flujo de Trabajo Principal

### 1. **Develop Branch PR Validation** (`develop.yml`)

**Trigger:** Pull Requests hacia la rama `develop`

#### Validaciones Implementadas:

| Validación | Descripción | Criticidad |
|------------|-------------|------------|
| **Asignación de Reviewers** | Verifica que haya al menos 1 reviewer asignado | ❌ Bloqueante |
| **Autor ≠ Reviewer** | El creador del PR no puede ser reviewer | ❌ Bloqueante |
| **Nomenclatura de Branches** | Branches deben seguir patrón: `feature/`, `bugfix/`, `hotfix/`, `issue/` | ❌ Bloqueante |
| **Target Branch Correcto** | Feature/bugfix → develop, Hotfix → master | ❌ Bloqueante |
| **Tamaño del PR** | Alerta si PR supera 400 cambios (additions + deletions) | ⚠️ Advertencia |

#### Ejemplo de Branch Naming Válido:
```bash
feature/user-authentication
bugfix/fix-null-pointer
hotfix/critical-security
issue/123-fix-endpoint
```

### 2. **Master Branch Workflow** (`master.yml`)

**Triggers:**
- Pull Requests a `master` (opened, synchronize, reopened, review_requested, closed)
- Push de tags `v*`

#### Jobs del Pipeline Master:

---

### 🎯 **Job 1: Validar Pull Request a Master**

```yaml
validate_pr:
  name: Validate Pull Request to Master
  runs-on: ubuntu-latest
  if: >
    github.event_name == 'pull_request' &&
    github.event.action != 'closed'
```

**Validaciones Específicas para Master:**
- ✅ Solo permite merge desde `develop` o branches `hotfix/`
- ✅ Requiere reviewers asignados
- ✅ Autor no puede ser reviewer
- ❌ Rechaza branches feature directamente a master

---

### 🚀 **Job 2: Auto Release (SemVer)**

```yaml
auto-release:
  name: Auto Release (SemVer)
  if: >
    github.event_name == 'pull_request' &&
    github.event.pull_request.merged == true &&
    github.event.pull_request.base.ref == 'master'
```

**Proceso de Versionado:**
1. **Determina Nueva Versión:**
   ```bash
   # Incrementa patch version automáticamente
   v1.2.3 → v1.2.4
   ```

2. **Genera Changelog:**
   - Incluye autor, fecha, branch source/target
   - Lista de commits desde último tag

3. **Crea Release en Gitea:**
   - Tag automático en el repositorio
   - Release via API de Gitea
   - Changelog incluido en la descripción

---

### 🔄 **Job 3: Backmerge Master → Develop**

```yaml
backmerge-develop:
  name: Backmerge master → develop
  needs: auto-release
  if: github.event.pull_request.merged == true
```

**Propósito:** Mantener `develop` actualizada con los cambios de `master` después de cada release.

---

### 📝 **Job 4: Generar Release Notes**

```yaml
generate-release-notes:
  name: Generate Release Notes
  needs: auto-release
```

**Salida:** Documento visual con los últimos 10 commits para referencia.

## 🔐 Configuración de Seguridad

### Secrets Requeridos:
```yaml
secrets:
  GITEA_TOKEN: "Token con permisos de repo para tags y releases"
```

### Protecciones de Branch:
- **Master:** Solo merge desde PRs validados
- **Develop:** Validación automática de PRs
- **Hotfix:** Acceso directo a master con validaciones

## 🏷️ Estrategia de Versionado

### Semantic Versioning (SemVer):
```
vMAJOR.MINOR.PATCH
```
- **MAJOR:** Cambios incompatibles
- **MINOR:** Nuevas funcionalidades compatibles  
- **PATCH:** Correcciones de bugs

### Tags Automáticos:
- Se crean automáticamente después de cada merge a master
- Incremento automático de patch version
- Publicación como release en Gitea

## 📊 Monitoreo y Logging

### Context Logging:
Cada job incluye logging detallado del contexto:
```bash
==== PR CONTEXT ====
event:        pull_request
action:       opened
author:       developer123
source:       develop
target:       master
reviewers:    [{"login": "reviewer1"}, {"login": "reviewer2"}]
====================
```

### Validación Detallada:
Cada regla de validación se verifica individualmente con mensajes específicos.

## 🚨 Manejo de Errores

### Validaciones Bloqueantes:
- Falta de reviewers
- Autor como reviewer
- Branch naming incorrecto
- Target branch incorrecto

### Validaciones de Advertencia:
- PR demasiado grande (>400 cambios)
- Backmerge rechazado (no crítico)

## 🔄 Flujo Completo del Desarrollador

1. **Crear Branch:** `feature/nueva-funcionalidad` desde `develop`
2. **Desarrollar:** Hacer commits en la branch feature
3. **PR a Develop:** Crear PR → validaciones automáticas
4. **Review:** Reviewers aprueban los cambios
5. **Merge a Develop:** Integración en develop
6. **PR a Master:** Crear PR desde develop a master
7. **Validación Master:** Validaciones específicas para producción
8. **Merge & Release:** 
   - Merge a master
   - Tag automático (SemVer)
   - Release en Gitea
   - Backmerge a develop

---
