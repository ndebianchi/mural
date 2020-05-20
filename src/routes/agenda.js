var express = require('express');
var router = express.Router();

const AgendaController = require('../controllers/AgendaController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/agenda', UsuarioLogado, AgendaController.index);

module.exports = router;