# 📘 Documentación: Configuración de Autenticación Automática para Gitea (Klynn) en VS Code

## 📋 Objetivo

Configurar **Git Credential Manager (GCM)** y **autenticación por SSH** para trabajar con repositorios de **Gitea Klynn**, evitando que VS Code solicite credenciales de forma repetitiva y asegurando una experiencia de desarrollo fluida y segura.

Instancia Gitea objetivo:

```
https://git.getklynn.com
```

---

## 🛠️ Prerrequisitos

* Git instalado
* VS Code instalado
* Acceso a Gitea Klynn
* Cuenta activa en `git.getklynn.com`

---

## 🚀 Instalación y Configuración – HTTPS (Git Credential Manager)

### 1️⃣ Instalar Git Credential Manager (GCM)

### 🔹 Windows

**Opción 1: Instalador oficial**

* Descargar desde GitHub Releases
* Ejecutar como administrador

**Opción 2: Winget (recomendado)**

```
winget install GitCredentialManager.GitCredentialManager
```

Verificar:

```
git credential-manager --version
```

---

### 🔹 macOS

**Opción 1: Homebrew**

```
brew install git-credential-manager
```

Configurar:

```
git-credential-manager configure
```

---

### 🔹 Linux (opcional)

```
wget https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.6.1/gcm-linux_amd64.2.6.1.deb
sudo dpkg -i gcm-linux_amd64.2.6.1.deb
git-credential-manager configure
```

---

## 2️⃣ Configuración Global de Git

```
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@klynn.com"
```

Configurar GCM como helper principal:

```
git config --global credential.helper manager
```

Configuración específica para Gitea Klynn:

```
git config --global credential.https://git.getklynn.com.provider generic
git config --global credential.https://git.getklynn.com.oauthProvider generic
git config --global credential.https://git.getklynn.com.authModes basic
```

Configuraciones útiles:

```
git config --global push.autoSetupRemote true
git config --global pull.rebase false
```

---

## 3️⃣ Configuración de VS Code

Abrir **Settings (JSON)** y agregar:

```json
{
  "git.terminalAuthentication": false,
  "git.useIntegratedAskPass": false,
  "git.rememberPostCommitCommand": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  "git.autofetchPeriod": 60,
  "git.pruneOnFetch": true,
  "git.enableSmartCommit": true,
  "git.suggestSmartCommit": true,
  "git.autoStash": true,
  "git.identity": "TU_USUARIO_GITEA",
  "git.serverWhitelist": ["git.getklynn.com"]
}
```

⚠️ Reemplazar `TU_USUARIO_GITEA` por tu usuario real en Gitea.

---

## 🔐 Primer Uso (HTTPS + GCM)

1. Abrir un repositorio de Gitea Klynn en VS Code
2. Ejecutar:

```
git fetch origin
```

3. Se abrirá el navegador para autenticación
4. Iniciar sesión normalmente en Gitea

GCM almacenará el token de forma segura.

---

## 🔑 Token de Acceso Personal (PAT) – Fallback

Solo si la autenticación automática falla.

1. Ingresar a `https://git.getklynn.com`
2. Avatar → **Settings** → **Applications**
3. **Generate New Token**
4. Configuración recomendada:

   * Name: `GCM-VSCode`
   * Expiration: `1 year` o `No expiration`
   * Scopes: Todos (read/write)

Uso:

```
Username: tu_usuario_gitea
Password: <TOKEN_GENERADO>
```

---

## 🔐 Autenticación por SSH (RECOMENDADO)

La autenticación por SSH es el método **recomendado en Klynn**, ya que evita el uso de contraseñas o tokens y funciona de forma transparente con VS Code, Git y CI/CD.

> ⚠️ Nota importante sobre el formato del repositorio
>
> Gitea puede mostrar el repositorio en formato explícito:
>
> ```
> ssh://git@git.getklynn.com:2223/Klynn/Backend.git
> ```
>
> Gracias a la configuración de `~/.ssh/config`, también se puede usar el formato corto:
>
> ```
> git@git.getklynn.com:Klynn/Backend.git
> ```
>
> **Ambos son equivalentes**. SSH aplicará automáticamente el puerto `2223` y la clave correcta.

---

### 1️⃣ Crear una clave SSH dedicada para Klynn

> ⚠️ Si ya existe `id_ed25519`, **NO la sobrescribas**.

```
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_klynn -C "tu.email@klynn.com"
```

Esto generará:

* `~/.ssh/id_ed25519_klynn` (clave privada)
* `~/.ssh/id_ed25519_klynn.pub` (clave pública)

---

### 2️⃣ Agregar la clave pública a Gitea

```
cat ~/.ssh/id_ed25519_klynn.pub
```

1. Ir a `https://git.getklynn.com`
2. Avatar → **Settings** → **SSH Keys**
3. **Add SSH Key**
4. Pegar la clave completa
5. Nombre sugerido: `Nombre - Equipo - Klynn`

---

### 3️⃣ Configurar SSH con puerto personalizado (2223)

Editar o crear el archivo:

```
nano ~/.ssh/config
```

Agregar:

```
# === Gitea Klynn ===
Host git.getklynn.com
    HostName git.getklynn.com
    User git
    Port 2223
    IdentityFile ~/.ssh/id_ed25519_klynn
    IdentitiesOnly yes
```

Ajustar permisos:

```
chmod 600 ~/.ssh/config
chmod 600 ~/.ssh/id_ed25519_klynn
chmod 644 ~/.ssh/id_ed25519_klynn.pub
```

---

### 4️⃣ Probar conexión SSH

```
ssh -T git@git.getklynn.com
```

Respuesta esperada:

```
Hi <usuario>! You've successfully authenticated, but Gitea does not provide shell access.
```

---

### 5️⃣ Clonar repositorio por SSH

Formato recomendado:

```
git clone git@git.getklynn.com:Klynn/Backend.git
```

Formato alternativo (explícito):

```
git clone ssh://git@git.getklynn.com:2223/Klynn/Backend.git
```

---

### 2️⃣ Agregar clave a Gitea

```
cat ~/.ssh/id_ed25519.pub
```

* Gitea → **User Settings** → **SSH Keys** → **Add SSH Key**

---

### 3️⃣ Configurar puerto SSH personalizado

Editar `~/.ssh/config`:

```
Host git.getklynn.com
    HostName git.getklynn.com
    User git
    Port 2223
    IdentityFile ~/.ssh/id_ed25519
```

---

### 4️⃣ Probar conexión

```
ssh -T git@git.getklynn.com
```

Respuesta esperada:

```
Hi <usuario>! You've successfully authenticated.
```

---

### 5️⃣ Clonar repositorio por SSH

```
git clone git@git.getklynn.com:Klynn/Backend.git
```

---

## ✅ Verificación Final

```
git fetch --all
git config --list | grep credential
git credential-manager --version
```

En VS Code:

* Commit
* Push
* Sin solicitud de credenciales

---

## 🔄 Resolución de Problemas

Forzar reautenticación:

```
git credential-manager erase https://git.getklynn.com
```

Debug:

```
GCM_TRACE=1 git fetch origin
```

Reset GCM:

```
git config --global --unset-all credential.helper
git config --global credential.helper manager
```

---

## 🔒 Seguridad

* Tokens almacenados en el keychain del SO
* SSH evita uso de contraseñas
* Revocar tokens comprometidos inmediatamente

---

## 📞 Soporte

* Documentación oficial Gitea
* Documentación Git Credential Manager

```
git credential-manager --help
git config --list
```

