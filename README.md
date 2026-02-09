# 🍳 Explorador de Recetas Mundiales

Una aplicación web interactiva para explorar y descubrir recetas de diferentes cocinas del mundo.

## Características

- 🌍 **14+ Cocinas Internacionales** (Italia, Francia, España, México, Tailandia, Japón, China, India, Grecia, Turquía, Portugal, Alemania, Brasil, Perú)
- 🍽️ **14+ Platos por Cocina** con imágenes representativas
- 📖 **Recetas Detalladas** con ingredientes e instrucciones paso a paso
- 🖼️ **Imágenes Referenciales** en ingredientes y cada paso de preparación
- 💾 **Guardado Automático** de la última cocina seleccionada
- 📱 **Interfaz Responsive** adaptada a cualquier dispositivo
- 🎨 **Diseño Moderno y Atractivo** con gradientes y animaciones

## Tecnología Utilizada

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **SQLite3** - Base de datos relacional

### Frontend
- **HTML5** - Estructura
- **CSS3** - Estilos y animaciones
- **JavaScript Vanilla** - Funcionalidad
- **Bootstrap 5** - Framework CSS

## Estructura de Carpetas

```
RECETAS/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── database.js
│   ├── datos.js
│   └── database/
│       └── recetas.db
├── frontend/
│   ├── index.html
│   ├── receta.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       └── receta.js
└── README.md
```

## Base de Datos

La aplicación utiliza SQLite3 con las siguientes tablas:

- **cocinas** - Información de las cocinas internacionales
- **platos** - Platos de cada cocina
- **ingredientes** - Ingredientes de cada plato
- **pasos_receta** - Pasos de preparación con imágenes

## 🚀 Inicio Rápido

### Opción 1: Local (npm)
```bash
cd backend
npm install
npm start
# http://localhost:3000
```

### Opción 2: Docker
```bash
docker build -t recetas-app:1.0 .
docker run -d -p 3000:3000 --name recetas-container recetas-app:1.0
# http://localhost:3000
```

### Opción 3: Docker Compose
```bash
docker-compose up -d
# http://localhost:3000
```

> 📖 **Lee [QUICK_START.md](QUICK_START.md) para instrucciones detalladas**

## 📚 Documentación de Integración

**Estas son las guías para Git, Docker, Astro y Cloudflare:**

1. **[GUIA_PASO_A_PASO.md](GUIA_PASO_A_PASO.md)** ⭐ **COMIENZA AQUÍ**
   - Git setup paso a paso
   - Docker explicado
   - Cloudflare Pages setup
   - Comandos rápidos
   - Troubleshooting

2. **[DIAGRAMA_VISUAL.md](DIAGRAMA_VISUAL.md)** 📊
   - Diagramas de arquitectura
   - Flujos de trabajo visualizados
   - Mapeos de Git
   - Estadios de la aplicación

3. **[GUIA_INTEGRACION.md](GUIA_INTEGRACION.md)** 🔧
   - Guía técnica completa y profunda
   - CI/CD con GitHub Actions
   - Mejoras futuras
   - Recursos avanzados

4. **[QUICK_START.md](QUICK_START.md)** ⚡
   - 3 métodos para ejecutar
   - Checklist de funcionamiento
   - Problemas comunes
   - Roadmap de desarrollo

## Uso

1. **Página Principal**
   - Verás los botones de todas las cocinas en la parte superior
   - Selecciona una cocina para ver sus platos

2. **Seleccionar Plato**
   - Haz clic en cualquier plato para ver su receta completa

3. **Ver Receta**
   - Observa los ingredientes con imágenes en la izquierda
   - Sigue los pasos de preparación ilustrados a la derecha
   - El botón "Volver" te llevará de regreso a la página principal manteniendo tu última selección

## Características Especiales

✨ **Guardado Automático**: La última cocina que seleccionaste se recuerda automáticamente
🎯 **Navegación Intuitiva**: Navegación fluida entre páginas manteniendo contexto
📸 **Imágenes HDR**: Imágenes de alta calidad de Unsplash para todos los platos e ingredientes
🖱️ **Interfaz Interactiva**: Animaciones suaves y efectos hover en todos los elementos
📱 **Mobile First**: Diseño adaptado para todos los tamaños de pantalla

## API Endpoints

### GET /api/cocinas
Obtiene todas las cocinas disponibles

### GET /api/platos/:cocinaId
Obtiene todos los platos de una cocina específica

### GET /api/platos/:platoId/detalle
Obtiene los detalles completos de un plato (ingredientes y pasos)

## Configuración de Base de Datos

La base de datos se inicializa automáticamente en la primera ejecución con:
- 14 cocinas diferentes
- 14 platos por cocina (196 platos en total)
- Ingredientes e instrucciones para al menos 4 platos (extensible)
- Imágenes referenciales de Unsplash

## Mejoras Futuras

- [ ] Agregar más ingredientes y pasos a todas las recetas
- [ ] Función de guardar recetas favoritas
- [ ] Búsqueda y filtrado de recetas
- [ ] Sistema de comentarios y valoraciones
- [ ] Exportar recetas en PDF
- [ ] Traductor de idiomas
- [ ] Modo oscuro

## Autor

Creado para explorar y disfrutar de la gastronomía mundial 🌍

## Licencia

MIT License - Libre para usar y modificar
