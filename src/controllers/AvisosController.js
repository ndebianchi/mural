const AvisosController = {
    index: (req, res) => {
        res.render('avisos', {
            pageTitle: 'Avisos',
            pageIcon: 'avisos.svg'
        })
    }
}

module.exports = AvisosController;