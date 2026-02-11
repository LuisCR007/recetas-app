# ⚡ PLAN DE ACCIÓN - PRÓXIMAS 30 MINUTOS

## 🎯 OBJETIVOS

1. ✅ Arreglar Cloudflare Pages (DNS error)
2. ✅ Mejorar imágenes (que carguen y sean únicas)
3. ✅ Commitear cambios a Git

---

## 📋 PASO 1: REPARAR CLOUDFLARE PAGES (5 min)

### Opción A: Setup Automático (RECOMENDADO)

```
1. Abre: https://dash.cloudflare.com/
2. Click: Pages (en la izquierda)
3. Click azul: "Create a project"
4. Click: "Connect to Git"
5. Elige: GitHub
6. Login si es necesario
7. Busca proyecto: "recetas-app"
8. Click: "Begin setup"
9. Framework: None (es HTML estático)
10. Build command: (dejar vacío)
11. Build output: frontend/
12. Click: Save and Deploy
13. Espera 2-3 minutos
14. Debe mostrar: "Ready"
15. Copia URL (ejemplo: https://recetas-app-xyz.pages.dev)
```

### Opción B: Deploy Alternativo en Vercel

```bash
npm i -g vercel
cd c:\Users\YOFC\Downloads\RECETAS
vercel

# Sigue instrucciones - auto-deploy
# URL: https://recetas-app.vercel.app
```

---

## 📸 PASO 2: MEJORAR IMÁGENES (15 min)

### Método A: Reemplazar URLs Unsplash → Pexels (SIN CÓDIGO)

```
1. Abre: https://www.pexels.com/
2. Busca: "pasta carbonara"
3. Haz click en imagen
4. Copia URL (debería ser: https://images.pexels.com/...)
5. Abre: c:\Users\YOFC\Downloads\RECETAS\frontend\data\platos.json
6. Busca: "Pasta Carbonara"
7. Reemplaza el campo "imagen":
   DE: "https://images.unsplash.com/..."
   A:  "https://images.pexels.com/..."
8. Haz lo mismo con más platos (10-15 principales)
9. Guarda archivo
10. F5 en navegador http://localhost:3000
11. ✅ Imágenes deberían cargar
```

### Método B: Usar Imgur (Para imágenes custom)

```
1. Abre: https://imgur.com/upload
2. Selecciona: Tu imagen
3. Se sube automáticamente
4. Click: "Get share links"
5. Copia: "Direct Link"
6. Usa en platos.json
```

### Método C: URLs Pre-validados (COPY-PASTE)

Reemplaza estos en `platos.json`:

**Italiana:**
```json
{
  "id": 1,
  "nombre": "Pasta Carbonara",
  "imagen": "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=500&h=500&fit=crop"
},
{
  "id": 2,
  "nombre": "Risotto", 
  "imagen": "https://images.pexels.com/photos/6947308/pexels-photo-6947308.jpeg?w=500&h=500&fit=crop"
}
```

---

## 🔧 PASO 3: COMMITEAR CAMBIOS (5 min)

```bash
cd c:\Users\YOFC\Downloads\RECETAS

# Ver cambios
git status

# Agregar
git add .

# Commit
git commit -m "fix: improve image urls and css fallback"

# Push
git push origin main

# Esperar 2-3 minutos
# Cloudflare Pages auto-actualiza
```

---

## ✅ PASO 4: VERIFICAR TODO FUNCIONA

### Local:
```
1. Abre: http://localhost:3000
2. Deberías ver: 14 botones de cocinas
3. Haz click en "Italiana"
4. Deberías ver: 14 platos CON IMÁGENES
5. Haz click en un plato
6. Deberías ver: Receta con fotos de ingredientes/pasos
```

### Nube:
```
1. Abre: https://recetas-app.pages.dev
   (O la URL que Cloudflare te dio)
2. Misma prueba que arriba
3. Las imágenes deben ser idénticas
```

---

## 🆘 SI ALGO NO FUNCIONA

### Error: DNS_PROBE_FINISHED_NXDOMAIN

```
→ Cloudflare Pages no está configurado
→ Solución: Repite PASO 1 (Setup automático)
→ O usa Vercel como alternativa
```

### Error: Imágenes aún vacías

```
→ URLs siguen siendo malos
→ Solución: 
  1. Limpiar cache navegador (Ctrl+Mayús+Del)
  2. F5 para recargar
  3. Abrir DevTools (F12)
  4. Tab "Network" para ver errores
  5. Si sigue fallando, usar Imgur URLs
```

### Error: Git push rechazado

```
→ Ramas fuera de sync
→ Solución:
git pull origin main
git add .
git commit -m "fix: ..."
git push origin main
```

---

## 🎯 RESUMEN RÁPIDO

| Tarea | Tiempo | Status |
|-------|--------|--------|
| Setup Cloudflare | 5 min | ⏳ HACER AHORA |
| Mejorar imágenes | 15 min | ⏳ HACER AHORA |
| Commit a Git | 5 min | ⏳ HACER AHORA |
| Verificar todo | 5 min | ⏳ DESPUÉS |

**Total: 30 minutos**

---

## 📞 COMANDOS LISTOS PARA COPIAR-PEGAR

### 1. Ir a carpeta correcta
```bash
cd c:\Users\YOFC\Downloads\RECETAS
```

### 2. Ver servidor corriendo
```bash
# Ya debe estar corriendo en http://localhost:3000
curl http://localhost:3000 | head -20
```

### 3. Ver cambios
```bash
git status
```

### 4. Commitear todo
```bash
git add .
git commit -m "fix: replace unsplash with pexels urls and improve css"
git push origin main
```

### 5. Ver últimos commits
```bash
git log --oneline -5
```

---

## 🎉 CUANDO TERMINES

```
✅ Cloudflare Pages funciona
✅ Imágenes cargan correctamente
✅ URLs son únicos y coherentes
✅ Todo está en GitHub
✅ Cambios deployados automáticamente

¡LISTO PARA COMPARTIR CON EL MUNDO!
```

