const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'database', 'recetas.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Error al conectar DB:', err);
  else console.log('Base de datos conectada');
});

// Crear tablas
db.serialize(() => {
  // Tabla de cocinas
  db.run(`CREATE TABLE IF NOT EXISTS cocinas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE,
    descripcion TEXT,
    icono TEXT
  )`);

  // Tabla de platos
  db.run(`CREATE TABLE IF NOT EXISTS platos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    cocina_id INTEGER NOT NULL,
    imagen TEXT,
    FOREIGN KEY(cocina_id) REFERENCES cocinas(id)
  )`);

  // Tabla de ingredientes
  db.run(`CREATE TABLE IF NOT EXISTS ingredientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plato_id INTEGER NOT NULL,
    nombre TEXT NOT NULL,
    cantidad TEXT,
    imagen TEXT,
    FOREIGN KEY(plato_id) REFERENCES platos(id)
  )`);

  // Tabla de pasos de receta
  db.run(`CREATE TABLE IF NOT EXISTS pasos_receta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plato_id INTEGER NOT NULL,
    numero INTEGER NOT NULL,
    descripcion TEXT NOT NULL,
    imagen TEXT,
    FOREIGN KEY(plato_id) REFERENCES platos(id)
  )`);
});

module.exports = db;
