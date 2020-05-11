const GerenciarPerfisController = {
    index: (req, res) => {
        res.render('gerenciarperfis', {
            pageTitle: 'Gerenciar Perfis',
            pageIcon: 'profile.svg'
        })
    }
}

module.exports = GerenciarPerfisController;