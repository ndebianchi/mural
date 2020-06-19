const { check } = require('express-validator');
console.log('to no cadastro');

module.exports = [
  check('apartamento').not().isEmpty().withMessage('Apartamento não pode ser vazio!'),
  check('bloco').not().isEmpty(),
  check('nome').not().isEmpty(),
  check('sobrenome').not().isEmpty(),
  check('email')
    .isEmail()
    .withMessage('Deve ser um e-mail válido!')
    .not()
    .isEmpty()
    .withMessage('Email não pode ser vazio!'),
  check('telefone').not().isEmpty(),
  check('senha')
    .isLength({ min: 8, max: 16 })
    .withMessage('Senha deve ter entre 8 e 16 caracteres')
    .not()
    .isEmpty(),
];
