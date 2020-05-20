var express = require('express');
var router = express.Router();

const PerfilController = require('../controllers/PerfilController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/perfil', UsuarioLogado, PerfilController.index);

module.exports = router;