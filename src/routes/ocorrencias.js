var express = require('express');
var router = express.Router();

const OcorrenciasController = require('../controllers/OcorrenciasController');
const UsuarioLogado = require('../middlewares/UsuarioLogado')
router.get('/ocorrencias', UsuarioLogado, OcorrenciasController.index);

module.exports = router;