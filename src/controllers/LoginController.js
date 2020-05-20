const { Usuario } = require('../models');
const bcrypt = require('bcrypt');

const LoginController = {

    index: (req, res) => {
        res.render('login', {
            pageTitle: 'Mural | Login'
        })
    },

    login: async (req, res) => {

        const { email, senha } = req.body;
        
        const usuario = await Usuario.findOne(
            { where: { email } }
        );

        // Interrompe se o usuário não existe (Erro 1)
        if(!usuario){
            res.redirect('login?error=1')
        };

        // Interrompe se a senha está errada (Erro 2)
        if(!bcrypt.compareSync(senha, usuario.senha)){
            res.redirect('/login?error=2')
        }

        // Remove valor da senha para não ser enviada junto aos demais parâmetros
        usuario.senha = '';

        // Cria Session com usuario logado
        req.session.usuario = usuario;

        // Manda pra home se tudo tá ok
        res.redirect('/inicio')
        console.log(usuario.nome, usuario.foto, usuario)
        
    },

    logout: (req, res) => {
        
        req.session.usuario = '';

        res.redirect('/login');

    }

}

module.exports = LoginController;