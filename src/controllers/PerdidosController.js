const PerdidosController = {
    index: (req, res) => {
        res.render('perdidos', {
            pageTitle: 'Achados e Perdidos',
            pageIcon: 'achados3.svg'
        })
    }
}

module.exports = PerdidosController;