# 🚀 PASO A PASO: Git + Docker + Cloudflare Pages (PRÁCTICO)

## FASE 1: GIT (15 minutos)

### 1.1 Crear repositorio en GitHub
```
1. Ve a https://github.com/new
2. Repository name: recetas-app
3. Description: Explorador de recetas mundiales
4. Selecciona: Public (o Private)
5. NO añadas README/gitignore/license (ya los tienes)
6. Click "Create repository"
7. Copia la URL que aparece: https://github.com/TU_USUARIO/recetas-app.git
```

### 1.2 Configurar Git en tu PC (primera vez)
```powershell
# En PowerShell (Windows)
git config --global user.name "Juan Pérez"
git config --global user.email "juan@ejemplo.com"
git config --global --list  # Verificar configuración
```

### 1.3 Inicializar repositorio local
```powershell
# Ve a la carpeta del proyecto
cd c:\Users\YOFC\Downloads\RECETAS

# Verifica que ya tienes .gitignore
ls -la .gitignore

# Inicializa git
git init

# Ver estado
git status
```

### 1.4 Primer commit local
```powershell
# Agregar todos los archivos
git add .

# Commit
git commit -m "Initial commit: Aplicación de recetas con Node.js y SQLite"

# Ver logs
git log --oneline
```

### 1.5 Conectar con GitHub
```powershell
# Agregar repositorio remoto (reemplaza URL)
git remote add origin https://github.com/TU_USUARIO/recetas-app.git

# Renombrar rama (actual main es estándar)
git branch -M main

# Subir código
git push -u origin main

# Verificar
git remote -v
```

### ✅ Verificar en GitHub
- Ve a https://github.com/TU_USUARIO/recetas-app
- Deberías ver todos tus archivos

---

## FASE 2: DOCKER (20 minutos)

### 2.1 Instalar Docker
```
1. Descarga: https://www.docker.com/products/docker-desktop
2. Instala Docker Desktop
3. Reinicia tu PC
4. Abre PowerShell y verifica:
```

```powershell
docker --version
# Debe mostrar: Docker version 24.0+ (o superior)

docker run hello-world
# Debe mostrar un mensaje de éxito
```

### 2.2 Construir imagen Docker (YA TIENES Dockerfile)
```powershell
# Ve a la carpeta proyecto
cd c:\Users\YOFC\Downloads\RECETAS

# Construye la imagen
docker build -t recetas-app:1.0 .

# Espera a que termine (primera vez toma 2-3 minutos)
```

### 2.3 Ejecutar contenedor
```powershell
# Ejecuta el contenedor
docker run -d -p 3000:3000 --name recetas-container recetas-app:1.0

# Ver si está corriendo
docker ps

# Abre el navegador
# http://localhost:3000
```

### 2.4 Ver logs
```powershell
# Logs en tiempo real
docker logs -f recetas-container

# Ver solo últimas líneas
docker logs --tail=50 recetas-container
```

### 2.5 Detener contenedor
```powershell
# Detener
docker stop recetas-container

# Eliminar contenedor (no la imagen)
docker rm recetas-container

# Eliminar imagen (cuando no la necesites)
docker rmi recetas-app:1.0
```

### ✅ Verificar en navegador
- Ve a http://localhost:3000
- Deberías ver la página de recetas

---

## FASE 3: DOCKER COMPOSE (FÁCIL - 5 minutos)

### 3.1 Ejecutar con Compose (YA TIENES docker-compose.yml)
```powershell
# Ve a la carpeta proyecto
cd c:\Users\YOFC\Downloads\RECETAS

# Inicia los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Verificar servicios
docker ps
```

### 3.2 Detener
```powershell
# Detener servicios
docker-compose down

# Detener y limpiar volúmenes
docker-compose down -v
```

### ✅ Dashboard
- Backend: http://localhost:3000
- Frontend: http://localhost:3001

---

## FASE 4: CLOUDFLARE PAGES (30 minutos)

### 4.1 Crear cuenta Cloudflare
```
1. Ve a https://dash.cloudflare.com/sign-up
2. Email + Contraseña
3. Verifica email
4. ANOTA tu Account ID (Settings → Account Home)
```

### 4.2 Crear token de API
```
1. En Cloudflare Dashboard: https://dash.cloudflare.com
2. Menú izquierdo → "My Profile"
3. "API Tokens"
4. Click "Create Token"
5. Usa template: "Edit Cloudflare Workers"
6. Permisos:
   - Account.Workers Routes: Edit
   - Account.Workers Script: Edit
   - Account.Workers Domain: Edit
7. Click "Create Token"
8. COPIA EL TOKEN (solo aparece una vez) ← IMPORTANTE
9. Guarda en lugar seguro o pasa a GitHub
```

### 4.3 Conectar GitHub a Cloudflare
```
1. En Cloudflare: https://dash.cloudflare.com/
2. Izquierda: "Workers & Pages"
3. Click "Pages"
4. Click "Create application"
5. Click "Connect to Git"
6. Autoriza Cloudflare a acceder GitHub
7. Selecciona repositorio: recetas-app
8. Click "Begin setup"
```

### 4.4 Configurar build en Cloudflare
```
Framework preset: None (aplicación Node.js)
Build command: npm run build
Build output directory: dist

Variables de entorno (opcional):
- NODE_ENV: production
```

### 4.5 Agregar secretos en GitHub
```
1. Ve a tu repositorio: https://github.com/TU_USUARIO/recetas-app
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Nombre: CLOUDFLARE_API_TOKEN
   Valor: [Token que copiaste]
5. Click "Add secret"

6. Nuevo secret:
   Nombre: CLOUDFLARE_ACCOUNT_ID
   Valor: [Tu Account ID]
7. Click "Add secret"
```

### 4.6 Deploy automático
```
1. En GitHub, edita cualquier archivo
2. Haz commit:
   git add .
   git commit -m "Test deploy"
   git push

3. Cloudflare automáticamente:
   - Detecta el push
   - Ejecuta build
   - Despliega en: https://recetas-app.pages.dev

4. Ver progreso: 
   - GitHub: Actions tab
   - Cloudflare: Pages → Deployments
```

### ✅ Verificar deployment
- Ve a https://recetas-app.pages.dev
- Deberías ver tu aplicación en vivo

---

## FLUJO DE TRABAJO COMPLETO (Una vez configurado)

### Desarrollo diario: Cambiar código → Automático en producción

```powershell
# 1. Crea rama para tu cambio (mejor práctica)
git checkout -b feature/nueva-feature

# 2. Edita archivos (ejemplo: cambiar color de botones)
# Edita: frontend/css/styles.css

# 3. Verifica cambios locales
git status

# 4. Agrega cambios
git add .

# 5. Commit con mensaje descriptivo
git commit -m "feat: Cambiar color de botones a azul"

# 6. Push a GitHub
git push origin feature/nueva-feature

# 7. Crea Pull Request (en GitHub)
# - Ve a tu repositorio
# - Verás opción "Compare & pull request"
# - Click en botón
# - Escribe descripción del cambio
# - Click "Create pull request"

# 8. Fusiona rama (en GitHub UI)
# - Haz clic en "Merge pull request"
# - Confirma merge

# 9. Cloudflare automáticamente:
# - Detecta cambios en main
# - Builds y despliega
# - Tu sitio se actualiza en: https://recetas-app.pages.dev
```

### Diagrama del flujo:
```
TU COMPUTADORA          GITHUB              CLOUDFLARE
    │                     │                     │
    ├─ git push ────────→ main branch           │
    │                     │                     │
    │                     ├─ GitHub Actions ─→ Build
    │                     │                     │
    │                     │                   Deploy
    │                     │                     │
    │                     │                   https://recetas-app.pages.dev
```

---

## COMANDOS RÁPIDOS PARA COPIAR/PEGAR

### Git
```powershell
# Ver estado
git status

# Ver historial
git log --oneline

# Crear rama
git checkout -b nombre-rama

# Cambiar rama
git checkout nombre-rama

# Listar ramas
git branch -a

# Eliminar rama local
git branch -d nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (descartar cambios)
git reset --hard HEAD~1
```

### Docker
```powershell
# Ver imágenes
docker images

# Ver contenedores activos
docker ps

# Ver todos los contenedores
docker ps -a

# Ver logs
docker logs -f nombre-contenedor

# Construir imagen
docker build -t nombre:version .

# Ejecutar imagen
docker run -d -p puerto:puerto nombre:version

# Detener contenedor
docker stop nombre-contenedor

# Eliminar contenedor
docker rm nombre-contenedor

# Limpiar todo no utilizado
docker system prune -a
```

### Docker Compose
```powershell
# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v

# Reconstruir imágenes
docker-compose build --no-cache
```

---

## CHECKLIST DE IMPLEMENTACIÓN

### ✅ Fase 1: Git
- [ ] Cuenta GitHub creada
- [ ] Repositorio creado en GitHub
- [ ] Git configurado localmente
- [ ] Primer commit y push realizado
- [ ] Repositorio visible en GitHub

### ✅ Fase 2: Docker
- [ ] Docker Desktop instalado
- [ ] Imagen construida (`docker build`)
- [ ] Contenedor corriendo (`docker run`)
- [ ] Aplicación accesible en localhost:3000

### ✅ Fase 3: Docker Compose
- [ ] docker-compose.yml creado (YA LO TIENES)
- [ ] `docker-compose up -d` funciona
- [ ] Backend en localhost:3000
- [ ] Frontend en localhost:3001

### ✅ Fase 4: Cloudflare
- [ ] Cuenta Cloudflare creada
- [ ] Token de API generado
- [ ] Repositorio conectado a Pages
- [ ] Secretos de GitHub configurados
- [ ] Primer deploy automático exitoso
- [ ] Sitio accesible en pages.dev

---

## SOLUCIÓN DE PROBLEMAS

### "No puedo hacer push a GitHub"
```powershell
# Verificar URL remota
git remote -v

# Actualizar remota si es incorrecta
git remote set-url origin https://github.com/USUARIO/recetas-app.git

# Reintentar push
git push -u origin main
```

### "Docker build falla"
```powershell
# Limpiar y reintentar
docker system prune -a
docker build --no-cache -t recetas-app:1.0 .

# Verificar Dockerfile
type Dockerfile  # (Windows)
```

### "Puerto 3000 ya está en uso"
```powershell
# Ver qué usa el puerto
netstat -ano | findstr :3000

# Usa otro puerto:
docker run -d -p 3001:3000 nombre-imagen
```

### "Cloudflare Pages no despliega"
```
1. Verifica GitHub Actions (pestaña Actions)
2. Ve a Cloudflare → Pages → Deployments
3. Haz clic en el deployment fallido
4. Lee los logs de error
5. Realiza cambios y push nuevamente
```

---

## ESTRUCTURA FINAL DEL PROYECTO

```
RECETAS/
├── .github/
│   └── workflows/
│       └── deploy.yml              ← CI/CD automático
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── datos.js
│   ├── package.json
│   └── database/
│       └── recetas.db
├── frontend/
│   ├── index.html
│   ├── receta.html
│   ├── css/styles.css
│   └── js/
│       ├── app.js
│       └── receta.js
├── .env.example
├── .gitignore
├── .dockerignore
├── Dockerfile                      ← Containerización
├── docker-compose.yml              ← Multi-contenedor
├── wrangler.toml                   ← Cloudflare config
├── start.bat                       ← Script Windows
├── start.sh                        ← Script Linux/Mac
├── README.md
├── GUIA_INTEGRACION.md
└── package.json
```

---

## LINKS ÚTILES

- GitHub: https://github.com
- Docker: https://www.docker.com
- Cloudflare: https://dash.cloudflare.com
- GitHub Docs: https://docs.github.com
- Docker Docs: https://docs.docker.com
- Cloudflare Docs: https://developers.cloudflare.com

---

## SOPORTE

¿Algo no funciona? 
1. Lee los logs de error completos
2. Google "el mensaje de error"
3. Copia el error exacto
4. Busca en StackOverflow

💡 **CONSEJO**: Siempre haz commits pequeños con mensajes claros. Facilita el debugging.
