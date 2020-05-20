var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/LoginController');


router.get('/login', UsuarioLogado, LoginController.index);
router.post('/login', UsuarioLogado, LoginController.login);
router.get('/logout', UsuarioLogado, LoginController.logout);

module.exports = router;