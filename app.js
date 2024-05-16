const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/aurora', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB...'))
  .catch(err => console.error('No se pudo conectar a MongoDB...', err));


// Middleware para parsear JSON y form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sirve archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
