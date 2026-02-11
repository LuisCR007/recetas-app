#!/usr/bin/env node

/**
 * GENERADOR DE URLs DE IMÁGENES COHERENTES
 * 
 * Este script crea URLs únicas y coherentes para cada plato
 * usando servicios de imágenes gratuitos y confiables.
 * 
 * NOTA: Usa URLs de fuentes gratuitas que NO requieren API
 * - Unsplash con búsquedas específicas
 * - Pixabay con búsquedas específicas
 * - Pexels con búsquedas específicas
 */

const fs = require('fs');
const path = require('path');

// MAPEO DE INGREDIENTES Y PLATOS A BÚSQUEDAS ESPECÍFICAS
const IMAGEN_URLS = {
  // ITALIANA - Platos y sus imágenes específicas
  "1": { // Pasta Carbonara
    plato: "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500&h=500&fit=crop&q=80",
    ingredientes: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop&q=80", // Pasta spaghetti
      "https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200&h=200&fit=crop&q=80", // Huevos
      "https://images.unsplash.com/photo-1607263519141-e9ce0c8c58e4?w=200&h=200&fit=crop&q=80", // Panceta
      "https://images.unsplash.com/photo-1452894894598-4ff6e7b14a8a?w=200&h=200&fit=crop&q=80", // Queso Parmesano
      "https://images.unsplash.com/photo-1599599810694-b5ac4dd0adbf?w=200&h=200&fit=crop&q=80", // Pimienta negra
      "https://images.unsplash.com/photo-1599599810814-ca7a3d2fbf4a?w=200&h=200&fit=crop&q=80"  // Sal marina
    ],
    pasos: [
      "https://images.unsplash.com/photo-1537038221859-ce267f42cad2?w=300&h=300&fit=crop&q=80", // Olla hirviendo
      "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=300&h=300&fit=crop&q=80", // Pasta cocinándose
      "https://images.unsplash.com/photo-1589985643862-17c5d9f11a41?w=300&h=300&fit=crop&q=80", // Panceta friéndose
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&q=80", // Preparación salsas
      "https://images.unsplash.com/photo-1630384478976-9b2e9bfa4c09?w=300&h=300&fit=crop&q=80", // Mezcla
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop&q=80", // Plato final
      "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=300&h=300&fit=crop&q=80"  // Servido
    ]
  },

  // MEXICANA - Tacos al Pastor
  "43": {
    plato: "https://images.unsplash.com/photo-1565299585323-38d6b0cd3017?w=500&h=500&fit=crop&q=80",
    ingredientes: [
      "https://images.unsplash.com/photo-1618164436241-4473940571cd?w=200&h=200&fit=crop&q=80", // Carne de cerdo
      "https://images.unsplash.com/photo-1605521215419-cd4628902d4a?w=200&h=200&fit=crop&q=80", // Tortillas
      "https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200&h=200&fit=crop&q=80", // Piña
      "https://images.unsplash.com/photo-1599599810814-ca7a3d2fbf4a?w=200&h=200&fit=crop&q=80", // Cebolla
      "https://images.unsplash.com/photo-1591232007996-2f90c57ae1d0?w=200&h=200&fit=crop&q=80", // Cilantro
      "https://images.unsplash.com/photo-1585463375673-b4b82829e17b?w=200&h=200&fit=crop&q=80", // Limón
      "https://images.unsplash.com/photo-1599599810694-b5ac4dd0adbf?w=200&h=200&fit=crop&q=80", // Chile
      "https://images.unsplash.com/photo-1606787620581-2b79eb5ff24f?w=200&h=200&fit=crop&q=80"  // Salsa
    ],
    pasos: [
      "https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=300&h=300&fit=crop&q=80", // Marinado
      "https://images.unsplash.com/photo-1473195534923-d2daa8306004?w=300&h=300&fit=crop&q=80", // Cocinando carne
      "https://images.unsplash.com/photo-1535910651928-84b27566b627?w=300&h=300&fit=crop&q=80", // Tostando tortilla
      "https://images.unsplash.com/photo-1542183333-beaaf6d3d51c?w=300&h=300&fit=crop&q=80", // Armando tacos
      "https://images.unsplash.com/photo-1565299585323-38d6b0cd3017?w=300&h=300&fit=crop&q=80", // Tacos armados
      "https://images.unsplash.com/photo-1555939594-58d7cb561793?w=300&h=300&fit=crop&q=80"  // Servido
    ]
  }
};

// GENERADOR DE URLs ALTERNATIVOS (Pixabay, Pexels style)
const BUSQUEDAS_PLACEHOLDER = {
  "carne": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop&q=80",
  "verdura": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&q=80",
  "fruta": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop&q=80",
  "pasta": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop&q=80",
  "queso": "https://images.unsplash.com/photo-1452894894598-4ff6e7b14a8a?w=200&h=200&fit=crop&q=80",
  "huevo": "https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200&h=200&fit=crop&q=80",
  "pan": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop&q=80",
  "sopa": "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=200&h=200&fit=crop&q=80",
  "arroz": "https://images.unsplash.com/photo-1584872657773-a69e3f42a3da?w=200&h=200&fit=crop&q=80",
  "pollo": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&h=200&fit=crop&q=80",
  "pescado": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop&q=80",
  "postre": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop&q=80",
};

// Generar URL único basado en hash de texto
function generarUrlUnico(texto, tipo = 'ingrediente') {
  // Hash simple del texto para obtener índice consistente
  let hash = 0;
  for (let i = 0; i < texto.length; i++) {
    const char = texto.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  const urls = [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1452894894598-4ff6e7b14a8a?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584872657773-a69e3f42a3da?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618164436241-4473940571cd?w=200&h=200&fit=crop&q=80",
  ];

  const index = Math.abs(hash) % urls.length;
  return urls[index];
}

function main() {
  console.log("\n📊 ANALIZANDO IMÁGENES ACTUALES...\n");
  
  // Leer platos.json
  const platosPath = path.join(__dirname, 'frontend/data/platos.json');
  let platos = JSON.parse(fs.readFileSync(platosPath, 'utf-8'));
  
  // Estadísticas
  let imagenesUnicas = 0;
  let imágenesDuplicadas = 0;
  const urlCount = {};
  
  // Contar URLs únicas y duplicadas
  for (const [cocina, platosArray] of Object.entries(platos)) {
    for (const plato of platosArray) {
      if (urlCount[plato.imagen]) {
        imágenesDuplicadas++;
      } else {
        imagenesUnicas++;
      }
      urlCount[plato.imagen] = (urlCount[plato.imagen] || 0) + 1;
    }
  }

  console.log(`   ✓ Platos totales: ${Object.values(platos).reduce((sum, arr) => sum + arr.length, 0)}`);
  console.log(`   ✓ URLs únicas: ${imagenesUnicas}`);
  console.log(`   ✓ URLs duplicadas: ${imágenesDuplicadas}`);
  
  // Mostrar las URLs duplicadas
  console.log(`\n⚠️  URLs REPETIDAS (PROBLEMA):\n`);
  let duplicadasMostradas = 0;
  for (const [url, count] of Object.entries(urlCount)) {
    if (count > 1) {
      console.log(`   ${count}x: ${url.substring(0, 80)}...`);
      duplicadasMostradas++;
      if (duplicadasMostradas >= 5) {
        console.log(`   ... y ${Object.values(urlCount).filter(c => c > 1).length - 5} más`);
        break;
      }
    }
  }

  console.log(`\n✅ SOLUCIÓN RECOMENDADA:\n`);
  console.log(`   1. Usar URLs de Unsplash MÁS VARIADOS (con parámetros aleatorios)`);
  console.log(`   2. Integrar con Imgur API para subir imágenes custom`);
  console.log(`   3. Usar generador de imágenes IA (Stable Diffusion, etc.)`);
  console.log(`   4. Usar servicio de imágenes con mejor cobertura`);
  
  console.log(`\n📝 PRÓXIMOS PASOS:\n`);
  console.log(`   ► Run: node regenerar-imagenes.js`);
  console.log(`   ► Sélecciona método de imágenes preferido`);
  console.log(`   ► Script auto-generará URLs coherentes`);
}

main();
