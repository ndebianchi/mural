const GerenciarPerfisController = {
    index: (req, res) => {
        res.render('gerenciarperfis', {
            pageTitle: 'Gerenciar Perfis',
            pageIcon: 'profile.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = GerenciarPerfisController;