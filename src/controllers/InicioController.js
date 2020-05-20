const InicioController = {
    index: (req, res) => {

        res.render('inicio', {
            pageTitle: 'Mural',
            usuario: req.session.usuario
        })
    }
}

module.exports = InicioController;