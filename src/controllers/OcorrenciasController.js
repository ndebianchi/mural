const OcorrenciasController = {
    index: (req, res) => {
        res.render('ocorrencias', {
            pageTitle: 'Ocorrências',
            pageIcon: 'ocorrencias.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = OcorrenciasController;