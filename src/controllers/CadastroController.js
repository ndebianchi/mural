const { Usuario, Apartamento } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  index: (req, res) => res.render('cadastro'),
  store: async (req, res) => {
    const {
      apartamento,
      bloco,
      nome,
      sobrenome,
      email,
      telefone,
      senha,
    } = req.body;

    let foto = 'default.svg';

    if (req.file) foto = req.file.location;

    let emailCheck = await Usuario.findOne({ where: { email } });

    try {
      // Checa se o usuario já existe por email, se existe lança o erro
      if (emailCheck) {
        throw new ErroUsuarioExiste();
      } else {
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
        return res.render('login', {
          pageTitle: 'Mural | Login',
          sucesso: 'Usuário criado com sucesso!',
        });
      }
    } catch (ErroUsuarioExiste) {
      return res.render('cadastro', {
        erro: 'Usuário já existe',
      });
    }
  },
};
