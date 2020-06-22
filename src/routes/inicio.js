const router = require('express').Router();
const multerConfig = require('../config/multer');
const multer = require('multer');
const upload = multer(multerConfig);

const { InicioController } = require('../controllers');

router.get('/', InicioController.index);
router.get('/inicio', InicioController.index);
router.post('/novoPost', upload.single('foto'), InicioController.novoPost);
router.post('/novaOcorrencia', InicioController.novaOcorrencia);
router.post('/novoAviso', InicioController.novoAviso);
router.post('/addLike/:id', InicioController.addLike);
router.post('/inicio/entendido', InicioController.entendido);

module.exports = router;
