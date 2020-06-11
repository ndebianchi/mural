const router = require('express').Router();

const {
  cadastroValidator,
  erroValidator,
} = require('../middlewares/validators');

const { CadastroController } = require('../controllers');

router.get('/cadastro', CadastroController.index);
router.post(
  '/cadastro',
  cadastroValidator,
  erroValidator,
  CadastroController.store
);

module.exports = router;
