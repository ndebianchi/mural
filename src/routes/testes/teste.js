var express = require('express');
var router = express.Router();
var testeController = require('../../controllers/testes/testeController')


router.get('/teste', testeController.index);


module.exports = router;
