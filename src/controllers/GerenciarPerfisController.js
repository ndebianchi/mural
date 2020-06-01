const { Usuario, Apartamento } = require('../models');

const GerenciarPerfisController = {
    index: async (req, res) => {

        let moradores = await Usuario.findAll()
        for(let morador of moradores){
            morador.senha = ''
        }

        res.render('gerenciarperfis', {
            pageTitle: 'Gerenciar Perfis',
            pageIcon: 'profile.svg',
            usuario: req.session.usuario,
            moradores
        })
    },

    delete: (req, res) => {
        let { id } = req.body;
        console.log(id)
    }
}

module.exports = GerenciarPerfisController;