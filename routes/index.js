const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');


// Ruta para la página principal
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

router.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './public' });
});

//Ruta para Politicas
router.get('/politics', (req, res) => {
    res.sendFile('politics.html', { root: './public' });
});

// Ruta para la página 'About'
router.get('/about', (req, res) => {
    res.sendFile('about.html', { root: './public' });
});

// Ruta para la página 'Contacto'
router.get('/contacto', (req, res) => {
    res.sendFile('contacto.html', { root: './public' });
});

// Ruta para la página 'Eventos'
router.get('/eventos', (req, res) => {
    res.sendFile('eventos.html', { root: './public' });
});

// Ruta para la página 'Registrarse'
router.get('/registrarse', (req, res) => {
    res.sendFile('registrarse.html', { root: './public' });
});

// Ruta para la página 'Reservas'
router.get('/reservas', (req, res) => {
    res.sendFile('reservas.html', { root: './public' });
});

module.exports = router;
