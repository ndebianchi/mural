var express = require('express');
var router = express.Router();

const GerenciarPerfisController = require('../controllers/GerenciarPerfisController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/gerenciarPerfis', UsuarioLogado, GerenciarPerfisController.index);

module.exports = router;