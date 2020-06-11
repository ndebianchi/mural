const router = require('express').Router();

const { ReservasController } = require('../controllers');

router.get('/reservas', ReservasController.index);
router.get('/reservas-agenda', ReservasController.reservasAgenda);

module.exports = router;
