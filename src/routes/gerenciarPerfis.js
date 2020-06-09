var express = require('express');
var router = express.Router();

const GerenciarPerfisController = require('../controllers/GerenciarPerfisController');

router.get('/gerenciarPerfis', GerenciarPerfisController.index);
router.post('/excluirUsuario', GerenciarPerfisController.delete);
module.exports = router;
