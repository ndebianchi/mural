const router = require('express').Router();
const multerConfig = require('../config/multer');
const multer = require('multer');
const upload = multer(multerConfig);

const {
  cadastroValidator,
  erroValidator,
} = require('../middlewares/validators');
const { CadastroController } = require('../controllers');

router.get('/cadastro', CadastroController.index);
router.post(
  '/cadastro',
  upload.single('foto'),
  cadastroValidator,
  erroValidator,
  CadastroController.store
);

module.exports = router;
