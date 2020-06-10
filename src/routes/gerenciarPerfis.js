const router = require('express').Router();
const { GerenciarPerfisController } = require('../controllers');

router.get('/gerenciarPerfis', GerenciarPerfisController.index);
router.delete('/gerenciarPerfis/:id', GerenciarPerfisController.destroy);

module.exports = router;
