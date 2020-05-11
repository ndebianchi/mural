var express = require('express');
var router = express.Router();

const BoletoController = require('../controllers/BoletoController');

router.get('/boleto', BoletoController.index);

module.exports = router;