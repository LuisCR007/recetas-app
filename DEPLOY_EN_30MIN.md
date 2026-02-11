# 🚀 GUÍA RÁPIDA: DE LOCALHOST A INTERNET EN 30 MINUTOS

## ✨ NOVEDAD: Tu app ya funciona SIN backend Node.js para Cloudflare Pages!

Se actualizaron:
- ✅ `frontend/js/app.js` - Carga datos desde `data/cocinas.json` y `data/platos.json`
- ✅ `frontend/js/receta.js` - Carga datos desde `data/recetas.json`
- ✅ `wrangler.toml` - Configurado para servir carpeta `frontend` estáticamente

**Resultado:** La app funciona 100% en Cloudflare Pages sin recurrir a un backend Node.js. 
Datos: 14 cocinas + 196 platos + recetas completas - TODO FUNCIONAL EN PRODUCCIÓN.

---

## PASO 1: Configura Git (5 minutos)

### 1.1 Configura tu nombre y email
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu@gmail.com"

# Verifica
git config --global --list
```

### 1.2 Verifica que tu commit local está listo
```powershell
cd c:\Users\YOFC\Downloads\RECETAS
git log --oneline
# Deberías ver: 3eb9673 Initial commit...
```

---

## PASO 2: Crea cuenta en GitHub (5 minutos)

### 2.1 Accede a GitHub
1. Ve a: https://github.com/signup
2. **Email:** Tu email
3. **Password:** Una contraseña fuerte
4. **Username:** `recetas-app` (o similar)
5. Verifica tu email
6. Completa el onboarding

### 2.2 Crea token de acceso personal
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. **Note:** `desarrollo-local`
4. **Expiration:** 90 days
5. **Scopes:** Selecciona `repo` (acceso completo a repositorios)
6. Click "Generate token"
7. **COPIA EL TOKEN** (aparece solo una vez)
   ```
   ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

## PASO 3: Crea repositorio en GitHub (2 minutos)

### 3.1 Crea el repo
1. Ve a: https://github.com/new
2. **Repository name:** `recetas-app`
3. **Description:** `Explorador de recetas mundiales`
4. **Visibility:** Public (para que otros vean)
5. **NO** marques "Initialize with README"
6. Click **"Create repository"**

### 3.2 Verás una pantalla con comandos
Copia la URL que dice:
```
https://github.com/TU_USERNAME/recetas-app.git
```

---

## PASO 4: Push a GitHub (5 minutos)

### 4.1 Agrega el repositorio remoto
En PowerShell:
```powershell
cd c:\Users\YOFC\Downloads\RECETAS

git remote add origin https://github.com/TU_USERNAME/recetas-app.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU_USERNAME` con tu usuario de GitHub**

### 4.2 Git pedirá autenticación
- **Username:** Tu usuario de GitHub
- **Password:** Pega el TOKEN que copiaste antes (no contraseña)

### 4.3 Verifica en GitHub
Ve a: https://github.com/TU_USERNAME/recetas-app

Deberías ver todos tus archivos (frontend, backend, Dockerfile, etc)

---

## PASO 5: Crea cuenta Cloudflare (3 minutos)

### 5.1 Signup en Cloudflare
1. Ve a: https://dash.cloudflare.com/sign-up
2. **Email:** Tu email
3. **Password:** Contraseña
4. Verifica email
5. **IMPORTANTE:** Anota tu **Account ID** (lo verás en la parte superior derecha)
   - Formato: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### 5.2 Crea API Token
1. Ve a: https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Template: **"Edit Cloudflare Workers"**
4. Nombre: `deploy-pages`
5. Permisos:
   - Account.Workers Routes: Edit
   - Account.Workers Script: Edit  
   - Account.Workers Domain: Edit
6. Click **"Create Token"**
7. **COPIA EL TOKEN**

**Guarda ambos tokens:**
- Account ID: `aabbcc...`
- API Token: `xxyyzz...`

---

## PASO 6: Conecta GitHub con Cloudflare Pages (10 minutos)

### 6.1 En Cloudflare Dashboard
1. Ve a: https://dash.cloudflare.com
2. Menú izquierdo: **"Workers & Pages"**
3. Click **"Pages"**
4. Click **"Create application"**
5. Click **"Connect to Git"**

### 6.2 Autoriza Cloudflare a GitHub
1. Click **"Install & Authorize"**
2. GitHub te pide permisos - Autoriza
3. Selecciona tu repositorio: **`recetas-app`**
4. Click **"Begin setup"**

### 6.3 Configura el build
```
Framework preset:        None
Build command:           npm run build
Build output directory:  dist
```

### 6.4 Variables de entorno
No es necesario agregar nada por ahora.

### 6.5 Click "Save and Deploy"

---

## PASO 7: Agrega secretos en GitHub (5 minutos)

Para que Cloudflare pueda deploying automáticamente:

### 7.1 Ve a tu repositorio
https://github.com/TU_USERNAME/recetas-app

### 7.2 Settings → Secrets and variables → Actions

### 7.3 Agrega dos secretos

**Secreto 1: CLOUDFLARE_API_TOKEN**
- Name: `CLOUDFLARE_API_TOKEN`
- Value: Pega el API Token que copiaste
- Click "Add secret"

**Secreto 2: CLOUDFLARE_ACCOUNT_ID**
- Name: `CLOUDFLARE_ACCOUNT_ID`
- Value: Pega tu Account ID
- Click "Add secret"

---

## PASO 8: Prueba el deployment (2 minutos)

### 8.1 Haz un pequeño cambio en el código
```powershell
cd c:\Users\YOFC\Downloads\RECETAS

# Abre README.md y agrega una línea al final:
# "Actualizado: [Tu fecha]"
```

### 8.2 Push a GitHub
```powershell
git add .
git commit -m "test: prueba de deployment"
git push origin main
```

### 8.3 Monitorea el deployment
1. Ve a tu repositorio en GitHub
2. Click pestaña **"Actions"**
3. Verás el workflow corriendo

### 8.4 Cuando termine, ve a Cloudflare
1. https://dash.cloudflare.com
2. Workers & Pages → Pages
3. Click tu proyecto `recetas-app`
4. Click pestaña **"Deployments"**
5. Deberías ver un deployment exitoso

---

## 🌍 ¡URL PÚBLICA!

### Tu sitio en vivo estará en:
```
https://recetas-app.pages.dev
```

O si agregaste un dominio:
```
https://tusitio.com
```

---

## ✅ CHECKLIST

- [ ] Configuré Git (user.name y user.email)
- [ ] Creé cuenta GitHub
- [ ] Creé token personal en GitHub
- [ ] Creé repositorio `recetas-app`
- [ ] Hice `git push` al repositorio
- [ ] Creé cuenta Cloudflare
- [ ] Obtuve Account ID y API Token
- [ ] Conecté GitHub con Cloudflare Pages
- [ ] Configuré build command y output
- [ ] Agregué secretos en GitHub Actions
- [ ] Hice un test push y deployment funcionó
- [ ] ¡Tengo URL pública en pages.dev!

---

## 🎯 RESULTADO FINAL

```
TU COMPUTADORA              GITHUB                  CLOUDFLARE
   │                          │                          │
   ├─ npm start ────────────► localhost:3000           │
   │                          │                          │
   ├─ git push ──────────────► Repositorio             │
   │                          │                          │
   │                          ├─ GitHub Actions         │
   │                          │  (CI/CD automático)     │
   │                          │                          │
   │                          └─ Webhook ───────────────►
   │                                                     │
   │                                            ┌────────┴────────┐
   │                                            │  Build          │
   │                                            │  Deploy         │
   │                                            │  CDN Global     │
   │                                            └────────┬────────┘
   │                                                     │
   │                          ◄─ LIVE URL ─────────────┘
   │                          │
   └────────────────────────────► https://recetas-app.pages.dev
                                  (El mundo entero puede verlo)
```

---

## 💡 DESPUÉS DEL PRIMER DEPLOYMENT

Ahora cada vez que hagas:
```powershell
git push origin main
```

**Automáticamente:**
1. GitHub Actions ejecuta `npm run build`
2. Cloudflare Pages despliega automáticamente
3. Tu sitio se actualiza en 2-3 minutos

**Sin hacer nada más. Solo push y listo.** ✨

---

## 🆘 ERRORES COMUNES

### "fatal: remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USERNAME/recetas-app.git
```

### "fatal: 'origin' does not appear to be a 'git' repository"
```powershell
git remote -v
# Si está vacío:
git remote add origin https://github.com/TU_USERNAME/recetas-app.git
```

### "Permission denied" en GitHub
Estás usando contraseña. Usa el TOKEN en lugar de contraseña.

### Cloudflare Pages no despliega
1. Verifica GitHub Actions (pestaña Actions)
2. Ve a Cloudflare → Pages → Deployments
3. Lee el log de error
4. Haz cambios y push nuevamente

---

## 📞 RESUMEN DE LINKS

| Paso | Link |
|------|------|
| 1 | https://github.com/signup |
| 2 | https://github.com/settings/tokens |
| 3 | https://github.com/new |
| 4 | Dashboard de GitHub (tu repo) |
| 5 | https://dash.cloudflare.com/sign-up |
| 6 | https://dash.cloudflare.com/profile/api-tokens |
| 7 | https://dash.cloudflare.com (Workers & Pages) |
| 8 | Tu repositorio → Settings → Secrets |
| 9 | https://recetas-app.pages.dev **← TU SITIO EN VIVO** |

---

## 🚀 ¡LISTO!

Ahora tienes:
✅ App funcional localmente
✅ Código en GitHub
✅ Deployment automático en Cloudflare
✅ URL pública para compartir

**¡Comparte tu URL:** `https://recetas-app.pages.dev`
