var express = require('express');
var router = express.Router();

const PerdidosController = require('../controllers/PerdidosController');

router.get('/perdidos', PerdidosController.index);

module.exports = router;