# 🚨 DIAGNÓSTICO DE PROBLEMAS - GUÍA DE SOLUCIÓN

## PROBLEMA 1: Imágenes Vacías o Iguales

### Causa Raíz
```
1. URLs de Unsplash mal formados
2. Algunas URLs están repetidas (mismo URL para platos diferentes)
3. Unsplash CDN a veces tiene rate limiting
4. Fallback de imágenes no funciona correctamente
```

### Solución Inmediata
```javascript
// Reemplazar URLs de Unsplash con opciones más confiables:

// OPCIÓN 1: Usar Pexels API (Gratuito)
https://images.pexels.com/photos/...

// OPCIÓN 2: Usar Pixabay API (Gratuito)
https://pixabay.com/api/

// OPCIÓN 3: Subir a Imgur (Gratuito sin login)
https://imgur.com/upload

// OPCIÓN 4: Usar CDN de imágenes (Cloudinary gratuito)
https://res.cloudinary.com/...
```

---

## PROBLEMA 2: Cloudflare Pages - DNS_PROBE_FINISHED_NXDOMAIN

### Causa Raíz
```
El dominio NO ESTÁ configurado en Cloudflare Pages
Posibles razones:
1. Proyecto no está ligado a GitHub correctamente
2. Build falla automáticamente
3. Dominio custom no está configurado
```

### Solución
```bash
# OPCIÓN A: Deploy Manual en Vercel (Alternativa rápida)
npm i -g vercel
vercel

# OPCIÓN B: Reconfigurar Cloudflare Pages
1. Ve a: https://dash.cloudflare.com
2. Selecciona: Pages
3. Busca: recetas-app
4. Si no existe, crear nuevo proyecto seit GitHub

# OPCIÓN C: Usar URL por defecto
https://recetas-app.pages.dev 
→ Cambiar a tu custom domain o usar:
https://luis.recetas-app.pages.dev
```

---

## SOLUCIÓN COMPLETA PARA IMÁGENES

### Tu tenemos 3 opciones:

### ✅ OPCIÓN 1: Usar Imgur (MÁS FÁCIL)
```
- Sube imágenes manualmente a Imgur
- Copia URLs
- Reemplaza en JSON
- NO requiere API key
```

### ✅ OPCIÓN 2: Generar con IA (Recomendado)
```
Servicios gratuitos:
1. Google Gemini/Imagen (beta gratuita)
2. Hugging Face (modelos open source)
3. Stable Diffusion (local o API)

Pasos:
1. Instalar: pip install diffusers torch
2. Run: python genera-imagenes.py
3. Sube a Imgur
4. Obtén URLs
```

### ✅ OPCIÓN 3: Usar URLs más confiables
```
Cambiar de Unsplash a:
- Pexels (mejor cobertura)
- Pixabay (más fondos)
- Unsplash con mejor selección
```

---

## ACCIÓN INMEDIATA (Próximos 5 minutos)

### Paso 1: Reparar Cloudflare Pages
```bash
cd c:\Users\YOFC\Downloads\RECETAS

# Verificar git remote
git remote -v

# Debe mostrar:
# origin  https://github.com/LuisCR007/recetas-app.git

# Si no, agregar:
git remote add origin https://github.com/LuisCR007/recetas-app.git

# Hacer push forzado
git push -u origin main -f
```

### Paso 2: Mejorar URLs de imágenes
```
Ir a: frontend/data/platos.json
Buscar URLs repetidas
Reemplazarlas con URLs únicos de Unsplash
```

### Paso 3: Regenerar recetas.json con URLs únicos
```bash
node regenerar-imagenes.js --unique
```

---

## ESPECIFICACIÓN DE IMÁGENES COHERENTES

### Categorías de Imágenes por Tipo

#### ITALIANAS:
- Pastas: spaghetti, ravioli, lasaña
- Salsas: carbonara, alfredo, marinara
- Carnes: ossobuco, vitela
- Postres: tiramisu, panna cotta

#### MEXICANAS:
- Tortillas: maíz, harina  
- Carnes: carne asada, pollo
- Salsas: roja, verde
- Condimentos: cilantro, jalapeño, limón

...

### Mapeos recomendados

```json
{
  "italiana": {
    "carnes": "https://images.unsplash.com/...",
    "pastas": "https://...",
    "vegetales": "https://..."
  },
  "mexicana": {
    "tortillas": "https://...",
    "carnes": "https://...",
    "chiles": "https://..."
  }
}
```

---

## PRÓXIMOS PASOS ESCALONADOS

### HOY:
- [ ] Reparar Cloudflare Pages (2 min)
- [ ] Verificar URLs en localStorage (1 min)
- [ ] Subir cambios a GitHub (1 min)

### MAÑANA:
- [ ] Generar mejor set de URLs
- [ ] O subir imágenes a Imgur
- [ ] Reemplazar en JSON files

### ESTA SEMANA:
- [ ] Si quieres imágenes IA, usar Stable Diffusion
- [ ] O contratar a alguien para diseñar/fotografiar

---

## SERVICIO RECOMENDADO: IMGUR (Sin Código)

```
1. Ir a: https://imgur.com
2. Upload → Seleccionar imagen
3. Copy URL
4. Usar en JSON

Ventajas:
✓ Gratuito (sin límites)
✓ Sin registro requerido (opcional)
✓ URLs permanentes
✓ CDN rápido global
```

---

## SCRIPT PARA GENERAR URLs (Próximamente)

```javascript
// regenerar-imagenes.js
// Genera URLs de Unsplash con búsquedas específicas
// Integra con Imgur para subida de custom images
// Crea JSON con imágenes coherentes
```

