var express = require('express');
var router = express.Router();

const AgendaController = require('../controllers/AgendaController');

router.get('/agenda', AgendaController.index);

module.exports = router;
