const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const morgan = require('morgan');
const express = require('express');
const Videogames = require('./Videogames.js');
const Genres = require('./Genres.js');
const Platforms = require('./Platforms.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(morgan('dev'));
router.use(express.urlencoded());

router.use('/videogames', Videogames);
router.use('/genres', Genres);
router.use('/platforms', Platforms)

module.exports = router;
