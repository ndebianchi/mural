var express = require('express');
var router = express.Router();

const CadastroController = require('../controllers/CadastroController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/cadastro', UsuarioLogado, CadastroController.index);

module.exports = router;