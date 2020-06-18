const router = require('express').Router();

const { AvisosController } = require('../controllers');

router.get('/avisos', AvisosController.index);
router.post('/avisosfiltro', AvisosController.avisosFiltrados);

module.exports = router;
