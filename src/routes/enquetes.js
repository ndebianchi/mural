var express = require('express');
var router = express.Router();

const EnquetesController = require('../controllers/EnquetesController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

router.get('/enquetes', UsuarioLogado, EnquetesController.index);

module.exports = router;