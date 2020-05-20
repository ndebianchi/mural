const AvisosController = {
    index: (req, res) => {
        res.render('avisos', {
            pageTitle: 'Avisos',
            pageIcon: 'avisos.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = AvisosController;