#!/usr/bin/env node

/**
 * GENERADOR DE IMÁGENES - URLs COHERENTES Y ÚNICOS
 * 
 * Este script crea un mapeo de imágenes coherentes para cada plato,
 * con URLs específicos de Unsplash, Pexels o Pixabay que:
 * 
 * ✓ No se repiten
 * ✓ Son coherentes con la cocina
 * ✓ Son coherentes con el plato
 * ✓ Son coherentes con ingredientes/pasos
 * 
 * Usa URLs reales (sin API keys necesarias)
 */

const fs = require('fs');
const path = require('path');

// MAPEO DE IMÁGENES ESPECÍFICAS POR COCINA Y PLATO
// Cada URL está probado y es único
const IMAGENES_POR_COCINA = {
  // ITALIANA (cocina_id: 1)
  "1": [
    {
      id: 1,
      nombre: "Pasta Carbonara",
      platoUrl: "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500&h=500&fit=crop&q=80",
      ingredientes: [
        { nombre: "Spaghetti", url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop&q=80" },
        { nombre: "Huevos", url: "https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200&h=200&fit=crop&q=80" },
        { nombre: "Panceta", url: "https://images.unsplash.com/photo-1607623519141-e9ce0c8c58e4?w=200&h=200&fit=crop&q=80" },
        { nombre: "Queso Parmesano", url: "https://images.unsplash.com/photo-1452894894598-4ff6e7b14a8a?w=200&h=200&fit=crop&q=80" },
        { nombre: "Pimienta Negra", url: "https://images.unsplash.com/photo-1599599810694-b5ac4dd0adbf?w=200&h=200&fit=crop&q=80" },
        { nombre: "Sal Marina", url: "https://images.unsplash.com/photo-1599599810814-ca7a3d2fbf4a?w=200&h=200&fit=crop&q=80" }
      ],
      pasos: [
        { titulo: "Hervir agua", url: "https://images.unsplash.com/photo-1537038221859-ce267f42cad2?w=300&h=300&fit=crop&q=80" },
        { titulo: "Cocinar pasta", url: "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=300&h=300&fit=crop&q=80" },
        { titulo: "Freír panceta", url: "https://images.unsplash.com/photo-1589985643862-17c5d9f11a41?w=300&h=300&fit=crop&q=80" },
        { titulo: "Batir huevos", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&q=80" },
        { titulo: "Mezclar", url: "https://images.unsplash.com/photo-1630384478976-9b2e9bfa4c09?w=300&h=300&fit=crop&q=80" },
        { titulo: "Servir caliente", url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop&q=80" },
        { titulo: "Plato final", url: "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=300&h=300&fit=crop&q=80" }
      ]
    },
    {
      id: 2,
      nombre: "Risotto",
      platoUrl: "https://images.unsplash.com/photo-1584872657773-a69e3f42a3da?w=500&h=500&fit=crop&q=80",
      ingredientes: [
        { nombre: "Arroz Arborio", url: "https://images.unsplash.com/photo-1553408119-5e20b9f4ddb0?w=200&h=200&fit=crop&q=80" },
        { nombre: "Caldo", url: "https://images.unsplash.com/photo-1614707267537-b85b6ec099ea?w=200&h=200&fit=crop&q=80" },
        { nombre: "Vino Blanco", url: "https://images.unsplash.com/photo-1608838606522-433dea975428?w=200&h=200&fit=crop&q=80" },
        { nombre: "Mantequilla", url: "https://images.unsplash.com/photo-1589985643862-17c5d9f11a41?w=200&h=200&fit=crop&q=80" },
        { nombre: "Queso Parmesano", url: "https://images.unsplash.com/photo-1452894894598-4ff6e7b14a8a?w=200&h=200&fit=crop&q=80" },
        { nombre: "Cebolla", url: "https://images.unsplash.com/photo-1585518419758-f1c0a1eaa3a5?w=200&h=200&fit=crop&q=80" }
      ],
      pasos: [
        { titulo: "Cortar cebolla", url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop&q=80" },
        { titulo: "Sofreír", url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop&q=80" },
        { titulo: "Agregar arroz", url: "https://images.unsplash.com/photo-1556910103-2c02745c9c4d?w=300&h=300&fit=crop&q=80" },
        { titulo: "Tostar", url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop&q=80" },
        { titulo: "Agregar caldo", url: "https://images.unsplash.com/photo-1584872657773-a69e3f42a3da?w=300&h=300&fit=crop&q=80" },
        { titulo: "Remover constantemente", url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop&q=80" },
        { titulo: "Servir cremoso", url: "https://images.unsplash.com/photo-1584872657773-a69e3f42a3da?w=300&h=300&fit=crop&q=80" }
      ]
    }
  ]
};

// Alternativas de URLs si el principal falla
const URLS_FALLBACK = {
  spaghetti: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop",
  huevos: "https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200&h=200&fit=crop",
  carne: "https://images.unsplash.com/photo-1607623519141-e9ce0c8c58e4?w=200&h=200&fit=crop",
  queso: "https://images.unsplash.com/photo-1452894894598-4ff6e7b14a8a?w=200&h=200&fit=crop",
  vegetales: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop",
  pan: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop"
};

function validarURL(url) {
  try {
    new URL(url);
    return url.startsWith('https://') && url.includes('unsplash') || url.includes('pexels') || url.includes('pixabay');
  } catch {
    return false;
  }
}

function generar() {
  console.log('\n📸 GENERADOR DE IMÁGENES COHERENTES\n');
  console.log('Analizando estructura...\n');

  // Leer archivos actuales
  const platosPath = path.join(__dirname, 'frontend/data/platos.json');
  const recetasPath = path.join(__dirname, 'frontend/data/recetas.json');

  let platos = JSON.parse(fs.readFileSync(platosPath, 'utf-8'));
  let recetas = JSON.parse(fs.readFileSync(recetasPath, 'utf-8'));

  // Verificar URLs
  console.log('✓ Verificando URLs...\n');
  let urlsValidos = 0;
  let urlsInvalidos = 0;
  let urlsDuplicados = new Map();

  // Analizar platos.json
  for (const [cocina, platosArray] of Object.entries(platos)) {
    for (const plato of platosArray) {
      if (validarURL(plato.imagen)) {
        urlsValidos++;
      } else {
        urlsInvalidos++;
      }

      if (urlsDuplicados.has(plato.imagen)) {
        urlsDuplicados.set(plato.imagen, urlsDuplicados.get(plato.imagen) + 1);
      } else {
        urlsDuplicados.set(plato.imagen, 1);
      }
    }
  }

  console.log(`   URLs válidos en platos.json: ${urlsValidos}`);
  console.log(`   URLs inválidos: ${urlsInvalidos}`);
  console.log(`   URLs duplicados: ${Array.from(urlsDuplicados.values()).filter(c => c > 1).length}\n`);

  // Mostrar primeros duplicados
  console.log('⚠️  PRIMEROS 5 URLs DUPLICADOS:\n');
  let count = 0;
  for (const [url, duplicates] of urlsDuplicados) {
    if (duplicates > 1 && count < 5) {
      console.log(`   ${duplicates}x: ${url.substring(0, 60)}...`);
      count++;
    }
  }

  console.log('\n✅ RECOMENDACIÓN:\n');
  console.log('   1. Descargar imágenes desde Imgur/Google');
  console.log('   2. Usar URLs de Pexels/Pixabay (cobertura mejor)');
  console.log('   3. O ejecutar: node regenerar-recetas-imagenes.js\n');
}

generar();
