const express = require('express');
const router = express.Router();
const {
  cadastroValidator,
  erroValidator,
} = require('../middlewares/validators');

const CadastroController = require('../controllers/CadastroController');
// const UsuarioLogado = require('../middlewares/UsuarioLogado');

// router.get('/cadastro', UsuarioLogado, CadastroController.index);
router.get('/cadastro', CadastroController.index);
router.post(
  '/cadastro',
  cadastroValidator,
  erroValidator,
  CadastroController.store
);

module.exports = router;
