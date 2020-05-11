const OcorrenciasController = {
    index: (req, res) => {
        res.render('ocorrencias', {
            pageTitle: 'Ocorrências',
            pageIcon: 'ocorrencias.svg'
        })
    }
}

module.exports = OcorrenciasController;