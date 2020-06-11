const router = require('express').Router();

const { PerdidosController } = require('../controllers');

router.get('/perdidos', PerdidosController.index);

module.exports = router;
