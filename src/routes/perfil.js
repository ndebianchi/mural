var express = require('express');
var router = express.Router();

const PerfilController = require('../controllers/PerfilController');

router.get('/perfil', UsuarioLogado, PerfilController.index);

module.exports = router;