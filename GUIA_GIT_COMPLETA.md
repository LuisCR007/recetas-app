# 📘 GUÍA COMPLETA DE GIT - CONTROL DE VERSIONES

## 🚀 RESUMEN RÁPIDO

```bash
# Guardar cambios localmente
git add .
git commit -m "Tu mensaje aquí"

# Subir a GitHub (nube)
git push origin main

# Ver historial
git log --oneline
```

---

## 📖 EXPLICACIÓN DETALLADA

### ¿QUÉ ES GIT?

**Git** es un sistema de control de versiones que:
- 📁 Guarda snapshots (fotos) de tu código
- 🔄 Permite volver a versiones anteriores
- 👥 Facilita trabajo en equipo
- ☁️ Sincroniza con la nube (GitHub)

**Analógía:** Imagina que quieres editar un documento importante
- Sin Git: Haces copias (`proyecto-v1`, `proyecto-v2`, `proyecto-final`, `proyecto-final-final`... caos)
- Con Git: Un archivo + historial de cambios organizados ✅

---

## 🔧 FLUJO BÁSICO (3 PASOS)

### PASO 1: HACER CAMBIOS

Editas archivos normalmente en VS Code:
```
1. Abre archivo
2. Haz cambios
3. Guarda (Ctrl+S)
```

Git automáticamente detecta que algo cambió ✅

### PASO 2: GUARDAR LOCALMENTE (Commit)

```bash
# Ver qué cambió
git status

# Agregar todos los cambios
git add .

# Guardar con mensaje
git commit -m "fix: correguí bug en platos.json"
```

**Resultado:** Los cambios están guardados en tu PC (local)

### PASO 3: SUBIR A GITHUB (Push)

```bash
# Subir a la nube
git push origin main
```

**Resultado:** Los cambios están en la nube (GitHub) ☁️

---

## 📊 DIAGRAMA DEL FLUJO

```
┌─────────────────────────────────────────┐
│  TRABAJAR EN TU PC                      │
│  (Editar archivos en VS Code)           │
└────────────────┬────────────────────────┘
                 │
                 ▼
       ┌─────────────────────┐
       │  git add .          │ ◄─── "Agregar cambios"
       └────────────┬────────┘
                    │
                    ▼
       ┌─────────────────────────────────┐
       │  git commit -m "mensaje"        │ ◄─── "Guardar localmente"
       └────────────┬────────────────────┘
                    │
                    ▼
       ┌─────────────────────┐
       │  git push origin    │ ◄─── "Subir a GitHub"
       │      main           │
       └────────────┬────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│  EN GITHUB (La Nube)                    │
│  ▸ Backup seguro                        │
│  ▸ Visible en GitHub                    │
│  ▸ Cloudflare Pages se actualiza        │
└─────────────────────────────────────────┘
```

---

## 🎯 EJEMPLOS PRÁCTICOS

### EJEMPLO 1: Cambiar plato en recetas.json

```bash
# 1. Edito archivo en VS Code
# 2. Guardo: Ctrl+S
# 3. Abro terminal

# VER CAMBIOS PENDIENTES
git status

# Output:
# On branch main
# Changes not staged for commit:
#   modified:   frontend/data/recetas.json

# AGREGAR CAMBIOS
git add .

# GUARDAR LOCALMENTE CON MENSAJE
git commit -m "fix: actualizar receta pasta carbonara"

# Output:
# [main abc1234] fix: actualizar receta pasta carbonara
#  1 file changed, 5 insertions(+), 2 deletions(-)

# SUBIR A GITHUB
git push origin main

# Output:
# Enumerating objects: 3, done.
# ...
# To github.com:tunombre/recetas-app.git
#    xyz789..abc1234  main -> main
```

✅ Cambio guardado y subido a la nube

---

### EJEMPLO 2: Agregar nueva imagen

```bash
# 1. Edito archivo
# 2. Guardo cambios

cd c:\Users\YOFC\Downloads\RECETAS

# Ver todos los cambios
git status

# Output:
# Changes not staged for commit:
#   modified:   frontend/data/platos.json

# Agregar TODO
git add .

# Hacer commit con mensaje descriptivo
git commit -m "feat: agregar nueva imagen para platos"

# Subir a GitHub
git push origin main
```

---

## 📋 COMANDOS GIT EXPLICADOS

### 1. `git status` ← VER ESTADO DEL PROYECTO

```bash
git status
```

**Muestra:**
- ✏️ Archivos modificados (no guardados)
- 📋 Archivos listos para commit
- 🆕 Archivos nuevos

**Ejemplo output:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to stage the file)
  modified:   frontend/data/recetas.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    new-file.txt
```

---

### 2. `git add .` ← AGREGAR ARCHIVOS

```bash
# Agregar TODOS los cambios
git add .

# O agregar archivo específico
git add frontend/data/recetas.json

# O agregar carpeta específica
git add frontend/
```

**¿Qué hace?**
- Toma los cambios que viste en `git status`
- Los prepara para guardian (staging area)
- Ahora están listos para `git commit`

---

### 3. `git commit -m "mensaje"` ← GUARDAR VERSIÓN

```bash
# Guardar cambios con mensaje
git commit -m "fix: error en receta italiana"

# Mensaje BUENO:
# - Corto (< 50 caracteres)
# - Describe QUÉ cambió
# - Ejemplos:
#   ✅ "feat: add image urls"
#   ✅ "fix: json syntax error"
#   ✅ "docs: update readme"

# Mensaje MALO:
# ❌ "cambios"
# ❌ "fix stuff"
# ❌ "asdfjkl"
```

**Tipos de mensajes recomendados:**
```
feat:      Nueva funcionalidad
fix:       Corrección de bug
docs:      Documentación
refactor:  Reorganizar código
style:     Formato/estilos
test:      Tests
chore:     Tareas (actualizaciones)
```

**Ejemplos:**
```bash
git commit -m "feat: agregar 196 recetas con imágenes"
git commit -m "fix: corregir syntax error en platos.json"
git commit -m "docs: agregar guía de verificación"
git commit -m "refactor: reorganizar estructura de carpetas"
```

---

### 4. `git push origin main` ← SUBIR A GITHUB

```bash
git push origin main
```

**¿Qué hace?**
- Toma todos los commits locales
- Los sube a GitHub (origen remoto)
- Sincroniza con la rama `main`

**Output típico:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 456 bytes | 456.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To github.com:tunombre/recetas-app.git
   abc1234..xyz789  main -> main
```

✅ Cambios en GitHubahora

---

### 5. `git log --oneline` ← VER HISTORIAL

```bash
# Ver últimos 10 commits
git log --oneline -10

# Ver todos los commits
git log --oneline

# Ver con más detalles
git log --stat
```

**Output ejemplo:**
```
60cf60a feat: generate complete recipe database with 2700+ unique images
bcdb570 docs: add image verification and testing guide
7c88fb0 feat: add unique images for all cuisines, dishes
3eb9673 Initial commit
```

Cada línea es una versión guardada de tu proyecto ✅

---

## 🔄 FLUJO COMPLETO PASO A PASO

### Tu primer commit + push:

```bash
# 1. Abre terminal en la carpeta del proyecto
cd c:\Users\YOFC\Downloads\RECETAS

# 2. Ver qué cambió
git status

# 3. Si todo está bien, agregar cambios
git add .

# 4. Guardar localmente con mensaje
git commit -m "feat: agregar sistema de imágenes completo"

# 5. Subir a GitHub
git push origin main

# 6. Verificar (opcional)
git log --oneline -1
```

**¿Terminó? ✅**

Ahora:
- Los cambios están en tu PC ✅
- Los cambios están en GitHub ✅  
- Cloudflare Pages se actualizará en 2-3 minutos ✅

---

## 🐛 PROBLEMAS COMUNES

### PROBLEMA 1: "fatal: not a git repository"

```
❌ Error: fatal: not a git repository (.git not found)
```

**Solución:**
```bash
# Navega a la carpeta correcta
cd c:\Users\YOFC\Downloads\RECETAS

# Verifica que existe carpeta .git
dir .git

# Si no existe, inicializa Git
git init
```

---

### PROBLEMA 2: "nothing to commit, working tree clean"

```
❌ Error: nothing to commit, working tree clean
```

**Significa:** No hay cambios nuevos para guardar

**Solución:**
1. Edita un archivo
2. Guarda (Ctrl+S)
3. Intenta de nuevo

---

### PROBLEMA 3: "fatal: origin does not appear to be a git repository"

```
❌ Error: fatal: origin does not appear to be a git repository
```

**Solución:**
```bash
# Ver configuración de GitHub
git remote -v

# Output esperado:
# origin  https://github.com/tunombre/recetas-app.git (fetch)
# origin  https://github.com/tunombre/recetas-app.git (push)

# Si no sale nada, agregar remoto:
git remote add origin https://github.com/tunombre/recetas-app.git
```

---

### PROBLEMA 4: "Your branch and 'origin/main' have diverged"

```
❌ Error: Su rama y 'origin/main' han divergido
```

**Solución (Opción A - Recomendada):**
```bash
# Traer cambios de GitHub
git pull origin main

# Luego push normal
git push origin main
```

**Solución (Opción B - Forzar):**
```bash
# ⚠️ Cuidado: Esto sobrescribe cambios en GitHub
git push --force origin main
```

---

### PROBLEMA 5: "Permission denied (publickey)"

```
❌ Error: Permission denied (publickey).
```

**Significa:** Git no tiene permiso para acceder a GitHub

**Solución:**
```bash
# Opción A: Usar HTTPS (más fácil)
git remote set-url origin https://github.com/tunombre/recetas-app.git

# Opción B: Generar SSH key (más seguro)
# Sigue: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

---

## 📊 RESUMEN DE COMANDOS

| Comando | Función | Ejemplo |
|---------|---------|---------|
| `git status` | Ver cambios pendientes | `git status` |
| `git add .` | Agregar todos cambios | `git add .` |
| `git commit -m "msg"` | Guardar versión | `git commit -m "fix: error"` |
| `git push origin main` | Subir a GitHub | `git push origin main` |
| `git log --oneline` | Ver historial | `git log --oneline -10` |
| `git pull origin main` | Traer cambios de GitHub | `git pull origin main` |
| `git diff` | Ver cambios en detalle | `git diff` |
| `git checkout -- archivo` | Deshacer cambios | `git checkout -- file.txt` |
| `git reset --hard` | ⚠️ Borrar todos cambios | `git reset --hard` |

---

## 🎯 WORKFLOW RECOMENDADO

### Cada vez que termines cambios:

```
1. Haz cambios en VS Code
   ↓
2. Guarda archivos (Ctrl+S)
   ↓
3. Terminal: git add .
   ↓
4. Terminal: git commit -m "descripción"
   ↓
5. Terminal: git push origin main
   ↓
6. ✅ ¡LISTO! GitHub actualizado
   ↓
7. Espera 2-3 minutos
   ↓
8. https://recetas-app.pages.dev actualizado
```

---

## 🚀 AUTOMATIZACIÓN CON LOS .BAT

En lugar de escribir comandos, usa:

```
1. ADMIN.bat → Menú interactivo
2. Opción [1] → Iniciar servidor
3. Opción [3] → Hacer commit (con mensaje)
4. Opción [4] → Push a GitHub
5. Opción [8] → Ver URLs
```

---

## 📚 RECURSOS ADICIONALES

- **GitHub Docs:** https://docs.github.com
- **Git Cheat Sheet:** https://git-scm.com/docs
- **Pro Git Book:** https://git-scm.com/book

---

## ✅ VALIDACIÓN

Cuando haya completado el proceso:

```bash
# Ver que todo está sincronizado
git status
# Output: On branch main
#         Your branch is up to date with 'origin/main'.
#         nothing to commit, working tree clean

# Ver los commits que subiste
git log --oneline -5

# ✅ Si ves ambos, ¡está perfecto!
```

