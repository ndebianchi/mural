var express = require('express');
var router = express.Router();

const AvisosController = require('../controllers/AvisosController');

router.get('/avisos', AvisosController.index);

module.exports = router;
