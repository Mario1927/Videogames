const { Router } = require('express');
const { getAllGenres, createGenre } = require('../controller/Genre.controller');

const router = Router();

router.get('/', getAllGenres);

router.post('/create', createGenre);

module.exports = router;