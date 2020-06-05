var express = require('express');
var router = express.Router();

const InicioController = require('../controllers/InicioController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/', UsuarioLogado, InicioController.index);
router.get('/inicio', UsuarioLogado, InicioController.index);
router.post('/novoPost', UsuarioLogado, InicioController.novoPost);
router.post('/novaOcorrencia', UsuarioLogado, InicioController.novaOcorrencia);
router.post('/novoAviso', UsuarioLogado, InicioController.novoAviso);
router.post('/inicio/addLike', UsuarioLogado, InicioController.addLike);
router.post('/inicio/entendido', UsuarioLogado, InicioController.entendido);

module.exports = router;