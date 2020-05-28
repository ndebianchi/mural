const { }
const ConfigController = {
    index: (req, res) => {
        res.render('config', {
            pageTitle: 'Configurações',
            pageIcon: 'settings.svg',
            usuario: req.session.usuario
        })
    },
    update: (req, res) => {
        let { nome, sobrenome, email, telefone } = req.body
                
    }
}

module.exports = ConfigController;