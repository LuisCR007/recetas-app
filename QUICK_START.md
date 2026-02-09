# 🎯 QUICK START GUIDE - Dale al Play

## Los 3 Métodos para Ejecutar la App

### ⚡ Método 1: Desarrollo rápido (2 minutos)
```powershell
cd backend
npm install
npm start

# Abre: http://localhost:3000
```

### 🐳 Método 2: Docker simple (5 minutos)
```powershell
# Construye
docker build -t recetas-app:1.0 .

# Ejecuta
docker run -d -p 3000:3000 --name recetas-container recetas-app:1.0

# Abre: http://localhost:3000

# Detenlo
docker stop recetas-container
docker rm recetas-container
```

### 🚀 Método 3: Docker Compose (1 minuto)
```powershell
# Inicia todo
docker-compose up -d

# Ve a: http://localhost:3000

# Detén
docker-compose down
```

---

## 📋 Checklist: ¿Ves la app funcionando?

- [ ] ¿APP corre en localhost:3000?
- [ ] ¿Ves el título "Explorador de Recetas"?
- [ ] ¿Aparecen los botones de las 14 cocinas?
- [ ] ¿Al hacer clic en una cocina ves los platos?
- [ ] ¿Al hacer clic en un plato ves la receta completa?

**Si todos los puntos están marcados ✓ tu app funciona perfectamente**

---

## 📦 Siguiente: Deploy a Internet

### Opción A: Cloudflare Pages (Recomendado)

1. **Crea cuenta en Cloudflare**
   - Ve a https://dash.cloudflare.com/sign-up
   
2. **Crea repositorio en GitHub**
   - Ve a https://github.com/new
   - Nombre: `recetas-app`
   - Push tu código (copia los comandos git del README)

3. **Conecta Cloudflare a GitHub**
   - En Cloudflare: Workers & Pages → Pages
   - "Create application" → "Connect to Git"
   - Selecciona tu repositorio

4. **Configura**
   - Framework: None
   - Build: `npm run build`
   - Output: `dist`

5. **Listo**
   - Cloudflare automáticamente despliega
   - Tu sitio en: `https://recetas-app.pages.dev`

### Opción B: Vercel (También fácil)

```powershell
npm install -g vercel
vercel login
vercel
```

### Opción C: Railway (Para la BD)

1. Ve a https://railway.app
2. Conecta GitHub
3. Selecciona repositorio
4. Deploy automático

---

## 🔧 Problemas Comunes

### "No puedo instalar dependencias"
```powershell
npm cache clean --force
rm -r node_modules
npm install
```

### "Puerto 3000 en uso"
```powershell
# Usa otro puerto
npm start -- --port 3001
```

### "Docker no está instalado"
```
Descarga: https://www.docker.com/products/docker-desktop
Instala
Reinicia tu PC
```

### "No veo cambios después de editar"
```powershell
# Reinicia el servidor
Ctrl+C
npm start
```

---

## 📚 Documentación Completa

- **GUIA_INTEGRACION.md** - Guía técnica completa (GIT + DOCKER + ASTRO + CLOUDFLARE)
- **GUIA_PASO_A_PASO.md** - Paso a paso detallado para cada herramienta
- **DIAGRAMA_VISUAL.md** - Diagramas visuales del flujo
- **README.md** - Features y características

---

## 🚀 Tu Roadmap

```
✅ Ejecuta la app localmente
   ↓
✅ Comprende el código
   ↓
✅ Agrega más recetas/cocinas
   ↓
✅ Crea repositorio GitHub
   ↓
✅ Deploy a Cloudflare Pages
   ↓
✅ ¡En vivo en Internet!
```

---

## 💡 Próximos Pasos (después de deployment)

- [ ] Agregar búsqueda de recetas
- [ ] Sistema de favoritos
- [ ] Comentarios y ratings
- [ ] Versión móvil mejorada
- [ ] Filtros avanzados
- [ ] Exportar PDF
- [ ] Modo oscuro
- [ ] Multi-idioma

---

## 📞 Necesitas Ayuda?

1. Lee los LOGS del error
   - Copia el mensaje exacto
   - Google + mensajes = solución

2. Recursos:
   - https://stack overflow.com
   - https://github.com/issues
   - ChatGPT con el error exacto

3. Common fixes:
   ```powershell
   # Limpiar todo
   docker system prune -a
   rm -r node_modules
   npm install
   npm start
   ```

---

**¿Listo? ¡Dale al play! 🎯**
