const EnquetesController = {
    index: (req, res) => {
        res.render('enquetes', {
            pageTitle: 'Enquetes',
            pageIcon: 'enquete.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = EnquetesController;