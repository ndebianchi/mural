const ConfigController = {
    index: (req, res) => {
        res.render('config', {
            pageTitle: 'Configurações',
            pageIcon: 'settings.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = ConfigController;