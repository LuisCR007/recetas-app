// Variables globales
const API_URL = 'http://localhost:3000/api';
let platoId = null;
let cocinaId = null;
let ultimaCocina = localStorage.getItem('ultimaCocina');

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
    const response = await fetch(`${API_URL}/platos/${platoId}/detalle`);
    const data = await response.json();

    mostrarReceta(data);
  } catch (error) {
    console.error('Error al cargar receta:', error);
    recetaTitulo.textContent = 'Error al cargar la receta';
  }
}

// Mostrar receta en la página
function mostrarReceta(data) {
  const { plato, ingredientes, pasos } = data;

  // Título e imagen
  recetaTitulo.textContent = plato.nombre;
  recetaImagen.src = plato.imagen;
  recetaImagen.onerror = () => recetaImagen.src = 'https://via.placeholder.com/500x400?text=Sin+imagen';

  // Mostrar ingredientes
  mostrarIngredientes(ingredientes);

  // Mostrar pasos
  mostrarPasos(pasos);
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
