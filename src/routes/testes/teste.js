var express = require('express');
var router = express.Router();
var testeController = require('../../controllers/testes/testeController')


router.get('/teste', testeController.index);
router.get('/testelikesvistos', testeController.likesvistos)


module.exports = router;
