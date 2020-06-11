const router = require('express').Router();

const { EnquetesController } = require('../controllers');

router.get('/enquetes', EnquetesController.index);

module.exports = router;
