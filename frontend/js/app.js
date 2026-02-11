// Variables globales
let cocinas = [];
let platosData = {};
let cocinaActual = null;
let ultimaCocina = localStorage.getItem('ultimaCocina');

// Elementos del DOM
const ccinasContainer = document.getElementById('cocinas-container');
const platosContainer = document.getElementById('platos-container');

// Inicializar aplicación
async function inicializar() {
  try {
    // Cargar cocinas
    const response = await fetch('data/cocinas.json');
    cocinas = await response.json();

    // Cargar platos
    const platosResponse = await fetch('data/platos.json');
    platosData = await platosResponse.json();

    // Mostrar botones de cocinas
    mostrarCocinas();

    // Si hay una última cocina guardada, cargarla automáticamente
    if (ultimaCocina) {
      const cocina = cocinas.find(c => c.nombre === ultimaCocina);
      if (cocina) {
        seleccionarCocina(cocina);
      }
    }
  } catch (error) {
    console.error('Error al cargar datos:', error);
    platosContainer.innerHTML = '<p class="text-danger">Error al cargar los datos</p>';
  }
}

// Mostrar botones de cocinas
function mostrarCocinas() {
  ccinasContainer.innerHTML = '';

  cocinas.forEach(cocina => {
    const btn = document.createElement('button');
    btn.className = 'btn-cocina';
    btn.textContent = `${cocina.icono} ${cocina.nombre}`;
    btn.addEventListener('click', () => seleccionarCocina(cocina));

    if (ultimaCocina === cocina.nombre) {
      btn.classList.add('activo');
    }

    ccinasContainer.appendChild(btn);
  });

  // Scroll horizontal automático
  mantenerScrollVisible();
}

// Seleccionar cocina
async function seleccionarCocina(cocina) {
  cocinaActual = cocina;

  // Guardar última cocina seleccionada
  localStorage.setItem('ultimaCocina', cocina.nombre);

  // Actualizar botones activos
  document.querySelectorAll('.btn-cocina').forEach(btn => {
    btn.classList.remove('activo');
    if (btn.textContent.includes(cocina.nombre)) {
      btn.classList.add('activo');
    }
  });

  // Cargar platos de la cocina seleccionada
  try {
    const platos = platosData[cocina.id] || [];
    mostrarPlatos(platos);
  } catch (error) {
    console.error('Error al cargar platos:', error);
    platosContainer.innerHTML = '<p class="text-danger">Error al cargar los platos</p>';
  }
}

// Mostrar platos
function mostrarPlatos(platos) {
  platosContainer.innerHTML = '';

  if (platos.length === 0) {
    platosContainer.innerHTML = '<p class="text-muted">No hay platos disponibles</p>';
    return;
  }

  platos.forEach((plato, index) => {
    const card = document.createElement('div');
    card.className = 'plato-card';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <img src="${plato.imagen}" alt="${plato.nombre}" class="plato-imagen" onerror="this.src='https://via.placeholder.com/250x280?text=Sin+imagen'">
      <div class="plato-info">
        <h3 class="plato-nombre">${plato.nombre}</h3>
      </div>
    `;

    card.addEventListener('click', () => {
      // Redirigir a página de receta
      window.location.href = `receta.html?plato=${plato.id}&cocina=${cocinaActual.id}`;
    });

    platosContainer.appendChild(card);
  });
}

// Mantener visible el botón activo en el scroll horizontal
function mantenerScrollVisible() {
  const activoBtn = document.querySelector('.btn-cocina.activo');
  if (activoBtn) {
    const scrollContainer = document.querySelector('.cocinas-scroll');
    const btnRect = activoBtn.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();

    if (btnRect.left < containerRect.left || btnRect.right > containerRect.right) {
      activoBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializar);
