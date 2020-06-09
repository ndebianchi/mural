const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const { errors } = validationResult(req);
  if (errors.length) {
    return res.render('cadastro', {
      erro: errors[0].msg,
      pageTitle: 'Novo Cadastro',
      pageIcon: 'user.svg',
    });
  }
  return next();
};
