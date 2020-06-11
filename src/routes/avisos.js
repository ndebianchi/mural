const router = require('express').Router();

const { AvisosController } = require('../controllers');

router.get('/avisos', AvisosController.index);

module.exports = router;
