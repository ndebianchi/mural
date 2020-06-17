const { Usuario, Apartamento } = require('../models');
module.exports = {
  index: async (req, res) => {

      let id = req.session.usuario.apartamentos[0].id

      let moradores = await Apartamento.findByPk(id,{
        include: {
          model: Usuario,
          as: 'usuarios',
          attributes: ['id', 'nome', 'sobrenome', 'foto']
         }
      }); 

      moradores = moradores.usuarios;

      return res.render('config', {
      usuario: req.session.usuario,
      moradores
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
