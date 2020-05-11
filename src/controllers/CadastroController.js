const CadastroController = {
    index: (req, res) => {
        res.render('cadastro', {
            pageTitle: 'Novo Cadastro',
            pageIcon: 'user.svg'
        })
    }
}

module.exports = CadastroController;