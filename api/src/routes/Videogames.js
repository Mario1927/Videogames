const { Router } = require('express');
const { getAllGames, getGameDetail, createGame } = require('../controller/Videogames.controller');
const cors = require('cors');
const router = Router();

router.get('/', getAllGames);

router.get('/:idVideogame', getGameDetail);

router.post('/create', createGame)

module.exports = router;