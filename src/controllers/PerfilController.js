const PerfilController = {
    index: (req, res) => {
        res.render('perfil', {
            pageTitle: 'Perfil'
        })
    }
}

module.exports = PerfilController;