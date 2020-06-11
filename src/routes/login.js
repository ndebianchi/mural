const router = require('express').Router();

const { LoginController } = require('../controllers');

router.get('/login', LoginController.index);
router.post('/login', LoginController.login);
router.get('/logout', LoginController.logout);

module.exports = router;
