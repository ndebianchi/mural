var express = require('express');
var router = express.Router();

const AvisosController = require('../controllers/AvisosController');
const UsuarioLogado = require('../middlewares/UsuarioLogado')
router.get('/avisos', UsuarioLogado, AvisosController.index);

module.exports = router;