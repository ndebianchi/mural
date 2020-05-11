var express = require('express');
var router = express.Router();

const PerfilController = require('../controllers/PerfilController');

router.get('/perfil', PerfilController.index);

module.exports = router;