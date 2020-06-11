const router = require('express').Router();

const { AgendaController } = require('../controllers');

router.get('/agenda', AgendaController.index);

module.exports = router;
