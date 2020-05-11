var express = require('express');
var router = express.Router();

const CadastroController = require('../controllers/CadastroController');

router.get('/cadastro', CadastroController.index);

module.exports = router;