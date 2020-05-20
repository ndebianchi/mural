var express = require('express');
var router = express.Router();

const ReservasController = require('../controllers/ReservasController');

router.get('/reservas', UsuarioLogado, ReservasController.index);
router.get('/reservas-agenda', UsuarioLogado, ReservasController.reservasAgenda);

module.exports = router;