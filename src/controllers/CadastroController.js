const { Usuario, Apartamento } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  index: (req, res) => {
    return res.render('cadastro', {
      pageTitle: 'Novo Cadastro',
      pageIcon: 'user.svg',
    });
  },
  store: async (req, res) => {
    const {
      apartamento,
      bloco,
      nome,
      sobrenome,
      email,
      telefone,
      senha,
      foto = 'default.svg',
    } = req.body;

    try {
      // Cria usuário a partir dos dados passados
      const usuario = await Usuario.create({
        nome,
        sobrenome,
        email,
        senha: bcrypt.hashSync(senha, 10),
        telefone,
        foto,
        usuario_tipo_id: 1,
      });

      // Checa se o apartamento já existe. Se não, cria um!
      let [apto] = await Apartamento.findOrCreate({
        where: { numero: apartamento, bloco },
      });

      //Adiciona apartamento ao usuário criado
      usuario.addApartamentos(apto);

      // Redireciona para Login
      return res.render('cadastro', {
        sucesso: 'Usuário criado com sucesso!',
        pageTitle: 'Novo Cadastro',
        pageIcon: 'user.svg',
      });
    } catch (erro) {
      return res.render('cadastro', {
        erro: 'Usuário já existe',
        pageTitle: 'Novo Cadastro',
        pageIcon: 'user.svg',
      });
    }
  },
};
