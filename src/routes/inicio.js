var express = require('express');
var router = express.Router();

const InicioController = require('../controllers/InicioController');

router.get('/inicio', InicioController.index);

module.exports = router;