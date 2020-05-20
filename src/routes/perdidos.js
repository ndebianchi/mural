var express = require('express');
var router = express.Router();

const PerdidosController = require('../controllers/PerdidosController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/perdidos', UsuarioLogado, PerdidosController.index);

module.exports = router;