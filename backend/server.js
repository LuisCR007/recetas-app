const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const { inicializarDatos } = require('./datos');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutas API
// Obtener todas las cocinas
app.get('/api/cocinas', (req, res) => {
  db.all('SELECT * FROM cocinas ORDER BY nombre', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Obtener platos de una cocina
app.get('/api/platos/:cocinaId', (req, res) => {
  const { cocinaId } = req.params;
  db.all(
    'SELECT * FROM platos WHERE cocina_id = ? ORDER BY nombre',
    [cocinaId],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    }
  );
});

// Obtener detalles de un plato (ingredientes y pasos)
app.get('/api/platos/:platoId/detalle', (req, res) => {
  const { platoId } = req.params;

  const plato = new Promise((resolve, reject) => {
    db.get('SELECT * FROM platos WHERE id = ?', [platoId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  const ingredientes = new Promise((resolve, reject) => {
    db.all('SELECT * FROM ingredientes WHERE plato_id = ? ORDER BY id', [platoId], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  const pasos = new Promise((resolve, reject) => {
    db.all('SELECT * FROM pasos_receta WHERE plato_id = ? ORDER BY numero', [platoId], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  Promise.all([plato, ingredientes, pasos])
    .then(([platoData, ingredientesData, pasosData]) => {
      res.json({
        plato: platoData,
        ingredientes: ingredientesData,
        pasos: pasosData
      });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Inicializar datos y comenzar servidor
db.serialize(() => {
  // Verificar si la BD ya tiene datos
  db.get('SELECT COUNT(*) as count FROM cocinas', (err, row) => {
    if (row.count === 0) {
      console.log('Inicializando base de datos con datos...');
      inicializarDatos(db);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
