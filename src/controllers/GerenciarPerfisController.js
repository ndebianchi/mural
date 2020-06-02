const { Usuario, Apartamento, ApartamentoUsuario } = require('../models');

const GerenciarPerfisController = {
    index: async (req, res) => {

        let moradores = await Usuario.findAll();

        for(let morador of moradores){
            morador.senha = ''
        };

        let apartamentos = await Apartamento.findAll();

        res.render('gerenciarperfis', {
            pageTitle: 'Gerenciar Perfis',
            pageIcon: 'profile.svg',
            usuario: req.session.usuario,
            moradores,
            apartamentos
        })
    },

    delete: async (req, res) => {
        
        let { id } = req.body;

        console.log(id)  
        
        // usar alerta para ratificar a exclusão
        // logica caso a exclusão seja do próprio perfil
        
        let delApartamento = await ApartamentoUsuario.findOne({where: {usuario_id: id}})
        let delMorador = await Usuario.findOne({where: { id }})

        await delApartamento.destroy()
        await delMorador.destroy()        

        res.redirect('/gerenciarperfis')        
        
    }
}

module.exports = GerenciarPerfisController;