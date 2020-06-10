const { Usuario } = require('../models');
module.exports = {
  index: (req, res) => {
    return res.render('config', {
      pageTitle: 'Configurações',
      pageIcon: 'settings.svg',
    });
  },

  update: (req, res) => {
    // Desestrurar os dados que chegam
    const { nome, sobrenome, email, telefone } = req.body;

    // Atualiza dados no DB
    Usuario.update(
      {
        nome,
        sobrenome,
        email,
        telefone,
      },
      {
        where: { id: req.session.usuario.id },
      }
    );

    // Atualiza dados da req.session.usuario:
    if (nome != req.session.nome) {
      req.session.usuario.nome = nome;
    }

    if (sobrenome != req.session.sobrenome) {
      req.session.usuario.sobrenome = sobrenome;
    }

    if (email != req.session.email) {
      req.session.usuario.email = email;
    }

    if (telefone != req.session.telefone) {
      req.session.usuario.telefone = telefone;
    }

    // Feedback da Atualização (usar alert?)

    // Finaliza Redirecionando de volta para Config
    return res.redirect('config');
  },
};
