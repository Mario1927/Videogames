const { Router } = require('express');
const { getAllPlatforms } = require('../controller/Platforms.controller.js')

const router = Router();

router.get('/', getAllPlatforms);

module.exports = router;