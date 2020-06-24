const { Usuario, Apartamento, ApartamentoUsuario } = require('../models');

module.exports = {
  index: async (req, res) => {
    const { filter } = req.query;

    let moradores;
    if (!filter) {
      moradores = await Usuario.findAll();
    } else {
      moradores = await Apartamento.findByPk(filter, {
        include: {
          model: Usuario,
          as: 'usuarios',
          attributes: ['id', 'nome', 'sobrenome', 'foto'],
        },
      });
      moradores = moradores.usuarios;
    }

    const apartamentos = await Apartamento.findAll();

    return res.render('gerenciarPerfis', {
      pageTitle: 'Gerenciar Perfis',
      pageIcon: 'profile.svg',
      moradores,
      usuario: req.session.usuario,
      apartamentos,
    });
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    // try {
    // const user = await Usuario.findByPk(id, {
    //   include: 'apartamentos',
    // });

    // user.apartamentos.forEach(ap => {
    // 	await user.removeApartamentos(ap)
    // });

    //   // await user.removeApartamentos(user.apartamentos);
    //   console.log(user);
    //   // await user.destroy();

    //   await Usuario.destroy({
    //     where: { id },
    //   });
    //   console.log(user.apartamentos);
    //   console.log('funcionando');

    //   return res.redirect('/gerenciarPerfis?success=1');

    //   // user.ativo = false
    //   // save()
    // } catch (erro) {
    //   console.log(erro);
    //   return res.send();
    // }

    // usar alerta para ratificar a exclusão
    // logica caso a exclusão seja do próprio perfil

    // let delApartamento = await ApartamentoUsuario.findOne({
    //   where: { usuario_id: id },
    // });
    let delMorador = await Usuario.findOne({ where: { id } });

    // await delApartamento.destroy();
    await delMorador.destroy();

    return res.redirect('/gerenciarPerfis?success=1');
  },
};
