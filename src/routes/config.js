var express = require('express');
var router = express.Router();

const ConfigController = require('../controllers/ConfigController');

router.get('/config', UsuarioLogado, ConfigController.index);

module.exports = router;