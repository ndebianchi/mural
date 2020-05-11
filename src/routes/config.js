var express = require('express');
var router = express.Router();

const ConfigController = require('../controllers/ConfigController');

router.get('/config', ConfigController.index);

module.exports = router;