const { Router } = require('express');
const { getAllGenres } = require('../controller/Genre.controller');

const router = Router();

router.get('/', getAllGenres);

module.exports = router;