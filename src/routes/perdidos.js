const router = require('express').Router();
const multerConfig = require('../config/multer');
const multer = require('multer');
const upload = multer(multerConfig);

const { PerdidosController } = require('../controllers');

router.get('/perdidos', PerdidosController.index);
router.post('/perdidos/devolvido', PerdidosController.marcarConcluido);
router.post('/novoObjeto', upload.single('foto'), PerdidosController.novoObjeto)
router.post('/perdidosfiltro', PerdidosController.filtrar)

module.exports = router;
