const PerfilController = {
    index: (req, res) => {
        res.render('perfil', {
            pageTitle: 'Perfil',
            usuario: req.session.usuario
        })
    }
}

module.exports = PerfilController;