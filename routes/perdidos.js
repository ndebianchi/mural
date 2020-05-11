var express = require('express');
var router = express.Router();

const perdidosController = require('../controllers/perdidosController');

router.get('/perdidos', perdidosController.index);

module.exports = router;