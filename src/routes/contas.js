var express = require('express');
var router = express.Router();

const ContasController = require('../controllers/ContasController');

router.get('/contas', ContasController.index);
router.get('/editar-gastos', ContasController.editarGastos);

module.exports = router;
