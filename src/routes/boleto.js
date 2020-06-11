const router = require('express').Router();

const { BoletoController } = require('../controllers');

router.get('/boleto', BoletoController.index);

module.exports = router;
