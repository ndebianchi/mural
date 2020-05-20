const CadastroController = {
    index: (req, res) => {
        res.render('cadastro', {
            pageTitle: 'Novo Cadastro',
            pageIcon: 'user.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = CadastroController;