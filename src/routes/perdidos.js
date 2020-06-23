const router = require('express').Router();

const { PerdidosController } = require('../controllers');

router.get('/perdidos', PerdidosController.index);
router.post('/perdidos/devolvido', PerdidosController.marcarConcluido);

module.exports = router;
