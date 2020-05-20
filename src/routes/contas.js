var express = require('express');
var router = express.Router();

const ContasController = require('../controllers/ContasController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/contas', UsuarioLogado, ContasController.index);
router.get('/editar-gastos', UsuarioLogado, ContasController.editarGastos);

module.exports = router;