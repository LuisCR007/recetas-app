// Variables globales
let platoId = null;
let cocinaId = null;
let ultimaCocina = localStorage.getItem('ultimaCocina');
let recetasData = {};

// Elementos del DOM
const recetaTitulo = document.getElementById('receta-titulo');
const recetaImagen = document.getElementById('receta-imagen');
const ingredientesContainer = document.getElementById('ingredientes-container');
const pasosContainer = document.getElementById('pasos-container');
const btnVolver = document.getElementById('btn-volver');

// Obtener parámetros de URL
function obtenerParametros() {
  const params = new URLSearchParams(window.location.search);
  platoId = params.get('plato');
  cocinaId = params.get('cocina');

  if (!platoId || !cocinaId) {
    window.location.href = 'index.html';
  }
}

// Cargar detalles de la receta
async function cargarReceta() {
  try {
    // Cargar datos de recetas
    const response = await fetch('data/recetas.json');
    recetasData = await response.json();

    // Obtener receta específica
    const receta = recetasData[platoId];
    
    if (!receta) {
      recetaTitulo.textContent = 'Receta no encontrada';
      return;
    }

    mostrarReceta(receta);
  } catch (error) {
    console.error('Error al cargar receta:', error);
    recetaTitulo.textContent = 'Error al cargar la receta';
  }
}

// Mostrar receta en la página
function mostrarReceta(receta) {
  // Título e imagen - cargar desde platos.json
  recetaTitulo.textContent = receta.nombre;
  
  // Obtener imagen del plato desde platos.json
  fetch('data/platos.json')
    .then(res => res.json())
    .then(platos => {
      // Buscar el plato para obtener la imagen
      for (let cocina in platos) {
        const plato = platos[cocina].find(p => p.id == platoId);
        if (plato) {
          recetaImagen.src = plato.imagen;
          break;
        }
      }
      recetaImagen.onerror = () => recetaImagen.src = 'https://via.placeholder.com/500x400?text=Sin+imagen';
    });

  // Mostrar ingredientes
  mostrarIngredientes(receta.ingredientes);

  // Mostrar pasos
  mostrarPasos(receta.pasos);
}

// Mostrar ingredientes
function mostrarIngredientes(ingredientes) {
  ingredientesContainer.innerHTML = '';

  if (ingredientes.length === 0) {
    ingredientesContainer.innerHTML = '<p class="text-muted">No hay ingredientes registrados</p>';
    return;
  }

  ingredientes.forEach((ing, index) => {
    const item = document.createElement('div');
    item.className = 'ingrediente-item';
    item.style.animationDelay = `${index * 0.05}s`;

    item.innerHTML = `
      <img src="${ing.imagen}" alt="${ing.nombre}" class="ingrediente-imagen" onerror="this.src='https://via.placeholder.com/60?text=Sin+img'">
      <div class="ingrediente-info">
        <p class="ingrediente-nombre">✓ ${ing.nombre}</p>
        <p class="ingrediente-cantidad">${ing.cantidad}</p>
      </div>
    `;

    ingredientesContainer.appendChild(item);
  });
}

// Mostrar pasos
function mostrarPasos(pasos) {
  pasosContainer.innerHTML = '';

  if (pasos.length === 0) {
    pasosContainer.innerHTML = '<p class="text-muted">No hay pasos registrados</p>';
    return;
  }

  pasos.forEach((paso, index) => {
    const step = document.createElement('div');
    step.className = 'paso-receta';
    step.style.animationDelay = `${index * 0.05}s`;

    step.innerHTML = `
      <span class="paso-numero">${paso.numero}</span>
      <p class="paso-descripcion">${paso.descripcion}</p>
      <img src="${paso.imagen}" alt="Paso ${paso.numero}" class="paso-imagen" onerror="this.src='https://via.placeholder.com/400x250?text=Sin+imagen'">
    `;

    pasosContainer.appendChild(step);
  });
}

// Botón volver
btnVolver.addEventListener('click', () => {
  // Volver a la página principal conservando la última cocina seleccionada
  window.location.href = 'index.html';
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  obtenerParametros();
  cargarReceta();
});
