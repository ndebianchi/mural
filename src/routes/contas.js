const router = require('express').Router();

const { ContasController } = require('../controllers');

router.get('/contas', ContasController.index);
router.get('/editar-gastos', ContasController.editarGastos);

module.exports = router;
