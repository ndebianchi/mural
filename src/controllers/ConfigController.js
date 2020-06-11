const { Usuario } = require('../models');
module.exports = {
  index: (req, res) => {
    return res.render('config', {
      usuario: req.session.usuario,
    });
  },

  update: async (req, res) => {
    // Desestrurar os dados que chegam
    const { nome, sobrenome, email, telefone } = req.body;

    //Procurar o usuário através da PK
    const user = await Usuario.findByPk(req.session.usuario.id, {
      include: 'apartamentos',
    });

    //Atualizando com os dados
    user.nome = nome;
    user.sobrenome = sobrenome;
    user.email = email;
    user.telefone = telefone;

    //Salvando os dados
    await user.save();

    //Colocando os novos dados do usuário na session
    req.session.usuario = user;

    //Redirecionando para mesma página para exibir mensagem de sucesso
    return res.redirect('/config?success=1');
  },
};
