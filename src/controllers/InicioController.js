const InicioController = {
    index: (req, res) => {
        res.render('inicio', {
            pageTitle: 'Mural'
        })
    }
}

module.exports = InicioController;