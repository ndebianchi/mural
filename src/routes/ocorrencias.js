const router = require('express').Router();

const { OcorrenciasController } = require('../controllers');

router.get('/ocorrencias', OcorrenciasController.index);
router.post('/ocorrencias/concluida', OcorrenciasController.marcarConcluido);

module.exports = router;
