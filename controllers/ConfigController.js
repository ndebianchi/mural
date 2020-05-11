const ConfigController = {
    index: (req, res) => {
        res.render('config', {
            pageTitle: 'Configurações',
            pageIcon: 'settings.svg'
        })
    }
}

module.exports = ConfigController;