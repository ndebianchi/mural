const router = require('express').Router();
const multerConfig = require('../config/multer');
const multer = require('multer');
const upload = multer(multerConfig);

const { InicioController } = require('../controllers');

router.get('/', InicioController.index);
router.post('/inicio', InicioController.filter);
router.get('/inicio', InicioController.index);
router.post('/novoPost', upload.single('foto'), InicioController.novoPost);
router.post(
  '/novaOcorrencia',
  upload.single('foto'),
  InicioController.novaOcorrencia
);
router.post('/novoAviso', InicioController.novoAviso);
router.post('/addLike/:id', InicioController.addLike);
router.post('/inicio/entendido/:id', InicioController.entendido);

module.exports = router;
