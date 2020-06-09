var express = require('express');
var router = express.Router();

const ReservasController = require('../controllers/ReservasController');

router.get('/reservas', ReservasController.index);
router.get('/reservas-agenda', ReservasController.reservasAgenda);

module.exports = router;
