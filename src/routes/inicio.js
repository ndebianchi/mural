const router = require('express').Router();
const { InicioController } = require('../controllers');

router.get('/', InicioController.index);
router.get('/inicio', InicioController.index);
router.post('/novoPost', InicioController.novoPost);
router.post('/novaOcorrencia', InicioController.novaOcorrencia);
router.post('/novoAviso', InicioController.novoAviso);
router.post('/inicio/addLike', InicioController.addLike);
router.post('/inicio/entendido', InicioController.entendido);

module.exports = router;
