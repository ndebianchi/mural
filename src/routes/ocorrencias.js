var express = require('express');
var router = express.Router();

const OcorrenciasController = require('../controllers/OcorrenciasController');

router.get('/ocorrencias', OcorrenciasController.index);
router.post('/ocorrencias/concluida', OcorrenciasController.marcarConcluido);

module.exports = router;
