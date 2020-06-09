var express = require('express');
var router = express.Router();

const EnquetesController = require('../controllers/EnquetesController');

router.get('/enquetes', EnquetesController.index);

module.exports = router;
