var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/LoginController');
const UsuarioLogado = require('../middlewares/UsuarioLogado')

router.get('/login', UsuarioLogado, LoginController.index);
router.post('/login', UsuarioLogado, LoginController.login);
router.get('/logout', UsuarioLogado, LoginController.logout);

module.exports = router;