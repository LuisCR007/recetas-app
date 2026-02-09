# 📚 GUÍA COMPLETA: Git + Docker + Astro + Cloudflare Pages

## PARTE 1: GIT - CONTROL DE VERSIONES

### Paso 1.1: Inicializar Git
```bash
cd c:\Users\YOFC\Downloads\RECETAS
git init
```

### Paso 1.2: Crear archivo .gitignore
Crear en la raíz del proyecto un archivo `.gitignore`:

```
# Node modules
node_modules/
npm-debug.log
yarn-debug.log
yarn-error.log

# Base de datos
backend/database/*.db
backend/database/*.db-journal

# Variables de entorno
.env
.env.local
.env.*.local

# Compilación
dist/
build/
.astro/

# Editor
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Dependencias
package-lock.json
yarn.lock
```

### Paso 1.3: Configurar usuario de Git
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

### Paso 1.4: Realizar primer commit
```bash
git add .
git commit -m "Initial commit: Aplicación de recetas con Node.js, Express y SQLite"
```

### Paso 1.5: Crear cuenta en GitHub
1. Ve a https://github.com
2. Crea una cuenta gratis
3. Crea un nuevo repositorio llamado "recetas-app"
4. NO inicialices con README (porque ya tienes contenido)

### Paso 1.6: Conectar con GitHub
```bash
git remote add origin https://github.com/TU_USUARIO/recetas-app.git
git branch -M main
git push -u origin main
```

---

## PARTE 2: MIGRACIÓN A ASTRO (OPCIONAL PERO RECOMENDADO)

### Paso 2.1: Crear proyecto Astro nuevo
```bash
npm create astro@latest astro-recetas
# Selecciona: Empty project, Yes (TypeScript), Strict mode

cd astro-recetas
npm install
```

### Paso 2.2: Instalar dependencias necesarias
```bash
npm install express cors sqlite3 body-parser
npm install --save-dev dotenv
```

### Paso 2.3: Estructura del proyecto Astro
```
astro-recetas/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── receta.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── NavCocinas.astro
│   │   ├── PlatoCard.astro
│   │   └── RecetaDetail.astro
│   └── styles/
│       └── global.css
├── api/
│   ├── server.js
│   ├── database.js
│   └── datos.js
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## PARTE 3: DOCKER - CONTAINERIZACIÓN

### Paso 3.1: Instalar Docker
**Windows:**
- Descarga: https://www.docker.com/products/docker-desktop
- Instala Docker Desktop
- Reinicia tu PC

**Verificar instalación:**
```bash
docker --version
docker run hello-world
```

### Paso 3.2: Crear Dockerfile
Archivo `Dockerfile` en la raíz del proyecto:

```dockerfile
# Usa Node.js 18 LTS
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
```

### Paso 3.3: Crear .dockerignore
```
node_modules
npm-debug.log
dist
.env
.env.local
.git
.gitignore
README.md
.vscode
.idea
```

### Paso 3.4: Construir imagen Docker
```bash
docker build -t recetas-app:1.0 .
```

### Paso 3.5: Ejecutar contenedor
```bash
docker run -d -p 3000:3000 --name recetas-container recetas-app:1.0
```

**Verificar que está corriendo:**
```bash
docker ps
# Abre: http://localhost:3000
```

### Paso 3.6: Detener el contenedor
```bash
docker stop recetas-container
docker rm recetas-container
```

---

## PARTE 4: CLOUDFLARE PAGES - DEPLOYMENT

### Paso 4.1: Preparar proyecto para Cloudflare Pages

Crear archivo `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './dist',
  publicDir: './public',
  // Para funciones serverless en Cloudflare
  adapter: null, // Cloudflare lo maneja automáticamente
});
```

### Paso 4.2: Crear cuenta en Cloudflare
1. Ve a https://dash.cloudflare.com
2. Crea cuenta gratis
3. Verifica tu email

### Paso 4.3: Conectar GitHub con Cloudflare
1. En Cloudflare Dashboard, ve a **Workers & Pages**
2. Click en **Pages** → **Create a project**
3. Selecciona **Connect to Git**
4. Autoriza Cloudflare a acceder a tu GitHub
5. Selecciona el repositorio `recetas-app`
6. Configura:
   - **Framework**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

### Paso 4.4: Variables de entorno en Cloudflare
1. En tu proyecto de Pages, ve a **Settings** → **Environment variables**
2. Agrega variables si las necesitas:
   - `NODE_ENV=production`
   - `DATABASE_PATH=/database/recetas.db`

### Paso 4.5: Deploy automático
- Cada push a `main` en GitHub dispara un build automático
- Tu sitio estará en: `https://recetas-app.pages.dev`

---

## PARTE 5: FLUJO DE TRABAJO COMPLETO (DESARROLLO)

### Paso 5.1: Desarrollo local
```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/recetas-app.git
cd recetas-app

# 2. Instala dependencias
npm install

# 3. Corre el servidor local
npm run dev
# http://localhost:3000
```

### Paso 5.2: Hacer cambios
```bash
# 1. Crea una rama para tu feature
git checkout -b feature/mejorar-diseño

# 2. Realiza cambios en los archivos

# 3. Verifica los cambios
git status

# 4. Agrega los cambios
git add .

# 5. Haz un commit descriptivo
git commit -m "feat: Mejorado diseño de la página principal"
```

### Paso 5.3: Push y Pull Request
```bash
# Sube tu rama
git push origin feature/mejorar-diseño

# Ve a GitHub y crea un Pull Request (PR)
# Revisa los cambios
# Finaliza el PR (Merge to main)
```

### Paso 5.4: Auto-deployment
- Cloudflare Pages automáticamente:
  1. Detecta el merge en `main`
  2. Ejecuta `npm run build`
  3. Despliega en `pages.dev`
  4. Tu sitio se actualiza automáticamente ✨

---

## PARTE 6: COMANDOS ÚTILES

### GIT
```bash
# Ver historial
git log --oneline

# Ver ramas
git branch -a

# Crear rama
git checkout -b nombre-rama

# Cambiar rama
git checkout nombre-rama

# Fusionar rama
git merge nombre-rama

# Eliminar rama
git branch -d nombre-rama
```

### DOCKER
```bash
# Ver imágenes
docker images

# Ver contenedores corriendo
docker ps

# Ver todos los contenedores
docker ps -a

# Ver logs
docker logs recetas-container

# Detener contenedor
docker stop recetas-container

# Eliminar imagen
docker rmi recetas-app:1.0

# Construir con tag
docker build -t username/recetas-app:1.0 .

# Subir a Docker Hub
docker push username/recetas-app:1.0
```

### NPM
```bash
# Instalar dependencias
npm install

# Instalar specific
npm install express

# Dev dependency
npm install --save-dev webpack

# Ejecutar script
npm run build
npm run dev
npm start

# Ver versiones
npm list
```

---

## PARTE 7: ARQUITECTURA FINAL RECOMENDADA

```
┌─────────────────┐
│   Tu Computadora │
│   (Desarrollo)   │
└────────┬────────┘
         │
         ▼
    ┌─────────┐
    │   GIT   │ ◄─── Control de versiones local
    └────┬────┘
         │
         ▼
    ┌──────────┐
    │  GitHub  │ ◄─── Repositorio remoto
    └────┬─────┘
         │
         ▼
┌─────────────────────────────────┐
│  Cloudflare Pages (CI/CD)       │
│  ├─ Build automático            │
│  ├─ Tests (opcional)            │
│  └─ Deploy a CDN global         │
└─────────────┬───────────────────┘
              │
              ▼
        recetas-app.pages.dev
```

---

## PARTE 8: MEJORA CON CI/CD (GitHub Actions)

### Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm run test
      continue-on-error: true

    - name: Build
      run: npm run build

    - name: Deploy to Cloudflare Pages
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

### Configurar secretos en GitHub:
1. Ve a tu repositorio → **Settings** → **Secrets and variables** → **Actions**
2. Agrega:
   - `CLOUDFLARE_API_TOKEN`: Tu token de Cloudflare
   - `CLOUDFLARE_ACCOUNT_ID`: Tu Account ID

---

## PARTE 9: COMANDOS RÁPIDOS RESUMEN

```bash
# ┌─── SETUP INICIAL ───┐
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/usuario/recetas-app
git push -u origin main

# ┌─── DESARROLLO ───┐
git checkout -b feature/nueva-feature
npm run dev
# ... hacer cambios ...
git add .
git commit -m "feat: descripción"
git push origin feature/nueva-feature
# Crear PR en GitHub

# ┌─── DOCKER ───┐
docker build -t recetas-app:1.0 .
docker run -d -p 3000:3000 recetas-app:1.0

# ┌─── CLOUDFLARE ───┐
# Push a main → Deploy automático
```

---

## PARTE 10: CHECKLIST DE IMPLEMENTACIÓN

### ✅ Antes de empezar
- [ ] Cuenta GitHub creada
- [ ] Docker instalado
- [ ] Cuenta Cloudflare creada
- [ ] Node.js 18+ instalado

### ✅ Fase 1: Git
- [ ] Repositorio local inicializado
- [ ] .gitignore configurado
- [ ] Primer commit realizado
- [ ] Repositorio GitHub creado

### ✅ Fase 2: Docker
- [ ] Dockerfile creado
- [ ] .dockerignore creado
- [ ] Imagen construida exitosamente
- [ ] Contenedor corriendo localmente

### ✅ Fase 3: Cloudflare Pages
- [ ] Usuario conectado a GitHub
- [ ] Proyecto creado en Pages
- [ ] Build command configurado
- [ ] Variables de entorno agregadas

### ✅ Fase 4: CI/CD
- [ ] GitHub Actions workflow creado
- [ ] Secretos configurados
- [ ] Primer deployment automático exitoso

---

## SOPORTE Y RECURSOS

**Documentación Oficial:**
- Git: https://git-scm.com/doc
- Docker: https://docs.docker.com
- Astro: https://docs.astro.build
- Cloudflare Pages: https://developers.cloudflare.com/pages
- GitHub Actions: https://docs.github.com/actions

**Comandos de emergencia:**
```bash
# Si todo se rompe
git reset --hard HEAD~1          # Deshacer último commit
docker system prune -a           # Limpiar Docker
npm ci                           # Reinstalar dependencias limpias
```
