var express = require('express');
var router = express.Router();

const ConfigController = require('../controllers/ConfigController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/config', UsuarioLogado, ConfigController.index);
router.post('/atualizar-perfil', UsuarioLogado, ConfigController.update);

module.exports = router;