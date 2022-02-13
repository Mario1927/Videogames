const { Router } = require('express');
const { getAllGames, getGameDetail } = require('../controller/Videogames.controller');
const router = Router();

router.get('/', getAllGames);

router.get('/:idVideogame', getGameDetail);

// router.post('/')

module.exports = router;