const { Router } = require('express');
const { getAllGames, getGameDetail, createGame, getGamesByName } = require('../controller/Videogames.controller');
const router = Router();

router.get('/', getAllGames);

router.get('/name/:name', getGamesByName);

router.get('/:idVideogame', getGameDetail);

router.post('/create', createGame)

module.exports = router;