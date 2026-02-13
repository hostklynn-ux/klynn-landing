# 🚀 Instrucciones para Crear Repositorio Landing en Gitea

## Paso 1: Crear el Repositorio en Gitea (Manual)

1. Abre tu navegador y ve a: https://git.getklynn.com
2. Inicia sesión con tu cuenta
3. Ve a la organización **Klynn**
4. Haz clic en **"+"** → **"New Repository"**
5. Completa los datos:
   - **Owner**: Klynn
   - **Repository Name**: Landing
   - **Description**: Landing page independiente de Klynn
   - **Visibility**: Private
   - **Initialize Repository**: ❌ NO marcar (el repo ya está inicializado localmente)

6. Haz clic en **"Create Repository"**

## Paso 2: Configurar y Subir Código

Desde tu terminal, ejecuta el script de setup:

```bash
cd /home/el-papetoh/Documentos/work/Dev/Klynn/apps/landing
./setup-gitea.sh
```

O manualmente:

```bash
cd /home/el-papetoh/Documentos/work/Dev/Klynn/apps/landing

# Asegurar que el remote esté configurado
git remote add origin git@git.getklynn.com:Klynn/Landing.git 2>/dev/null || true

# Push de master
git checkout master
git push -u origin master

# Push de develop  
git checkout develop
git push -u origin develop
```

## Paso 3: Verificar en Gitea

1. Ve a https://git.getklynn.com/Klynn/Landing
2. Deberías ver:
   - Rama `master` con el código
   - Rama `develop` con el código
   - Archivos de workflows en `.gitea/workflows/`
   - README actualizado

## Paso 4: Configurar Secret (Opcional pero Recomendado)

Para que los workflows funcionen correctamente, configura el token:

1. En Gitea, ve a **Settings** → **Secrets**
2. Agrega un nuevo secret:
   - **Name**: `ACTIONS_TOKEN`
   - **Value**: Tu token de Gitea (el mismo que usas para tea CLI)

## ✅ Configuración Completada

### 🌿 Ramas Configuradas
- `master` → Producción
- `develop` → Integración/Staging

### 🔄 Workflows CI/CD
Los mismos 3 workflows del Frontend:

1. **ci.yml**: Build, type-check y lint en cada push/PR
2. **develop.yml**: Validación de PRs a develop (naming, size)
3. **master.yml**: Deploy automático, release SemVer y backmerge

### 🐳 Docker Configurado
- **Producción**: `docker-compose.yml` → landing.getklynn.com
- **Desarrollo**: `docker-compose.develop.yml` → dev.landing.getklynn.com
- **Contenedor**: `klynn-landing-dev`
- **Network**: `dokploy-network`

### 📁 Estructura del Proyecto
```
apps/landing/
├── app/(public)/          # Landing page components
├── src/components/landing/# Hero, About, Services, etc.
├── .gitea/workflows/      # CI/CD (actualizado para Landing)
├── docker-compose*.yml    # Docker (actualizado para Landing)
└── README.md             # Documentación específica
```

### 🚀 Próximos Pasos

1. **Configurar branch protection** en Gitea:
   - `master`: Requiere PR, requiere reviews
   - `develop`: Requiere PR, opcional reviews

2. **Probar CI/CD**:
   ```bash
   git checkout -b feature/test-ci
echo "# Test" >> README.md
   git commit -am "test: ci workflow"
   git push origin feature/test-ci
   ```
   Luego crea PR a develop en Gitea.

3. **Deploy de desarrollo**:
   ```bash
   cd /home/el-papetoh/Documentos/work/Dev/Klynn/apps/landing
   docker compose -f docker-compose.develop.yml up -d
   ```

### 📊 Diferencias con Frontend

| Aspecto | Frontend | Landing |
|---------|----------|---------|
| Repositorio | Klynn/Frontend | Klynn/Landing |
| Contenedor | klynn-frontend-dev | klynn-landing-dev |
| Dominio dev | dev.app.getklynn.com | dev.landing.getklynn.com |
| Dominio prod | app.getklynn.com | landing.getklynn.com |
| Rama fuente | feat/landing | master/develop |

### ⚠️ Notas Importantes

- Los workflows están actualizados para apuntar a `Klynn/Landing`
- El Docker Compose usa el dominio `dev.landing.getklynn.com`
- El código es el mismo de la rama `feat/landing` del Frontend
- Se mantiene la estrategia Git Flow: feature → develop → master

### 🔗 URLs Importantes

- **Repo**: https://git.getklynn.com/Klynn/Landing
- **Dev**: https://dev.landing.getklynn.com
- **Prod**: https://landing.getklynn.com (después de deploy)

---

**¿Problemas?** Verifica:
1. Que tengas acceso SSH a git.getklynn.com
2. Que tu token de Gitea tenga permisos de escritura
3. Que el repositorio se haya creado correctamente en la UI
