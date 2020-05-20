var express = require('express');
var router = express.Router();

const BoletoController = require('../controllers/BoletoController');

router.get('/boleto', UsuarioLogado, BoletoController.index);

module.exports = router;