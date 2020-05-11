const BoletoController = {
    index: (req, res) => {
        res.render('boleto', {
            pageTitle: '2ª Via do Condomínio',
            pageIcon: '2via.svg'
        })
    }
}

module.exports = BoletoController;