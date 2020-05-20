var express = require('express');
var router = express.Router();

const BoletoController = require('../controllers/BoletoController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/boleto', UsuarioLogado, BoletoController.index);

module.exports = router;