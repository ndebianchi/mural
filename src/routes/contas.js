var express = require('express');
var router = express.Router();

const ContasController = require('../controllers/ContasController');

router.get('/contas', UsuarioLogado, ContasController.index);
router.get('/editar-gastos', UsuarioLogado, ContasController.editarGastos);

module.exports = router;