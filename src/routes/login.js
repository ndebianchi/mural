var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/LoginController');


router.get('/login', LoginController.index);
router.post('/login', LoginController.login);
router.get('/logout', LoginController.logout);

module.exports = router;