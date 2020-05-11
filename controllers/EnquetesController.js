const EnquetesController = {
    index: (req, res) => {
        res.render('enquetes', {
            pageTitle: 'Enquetes',
            pageIcon: 'enquete.svg'
        })
    }
}

module.exports = EnquetesController;