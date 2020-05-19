var express = require('express');
var router = express.Router();

const InicioController = require('../controllers/InicioController');
const UsuarioLogado = require('../middlewares/UsuarioLogado')

router.get('/', UsuarioLogado, InicioController.index);
router.get('/inicio', UsuarioLogado, InicioController.index);

module.exports = router;