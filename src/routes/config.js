const router = require('express').Router();

const { ConfigController } = require('../controllers');

router.get('/config', ConfigController.index);
router.put('/config', ConfigController.update);

module.exports = router;
