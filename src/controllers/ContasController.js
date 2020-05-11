const ContasController = {
    index: (req, res) => {
        res.render('contas', {
            pageTitle: 'Prestação de Contas',
            pageIcon: 'contas2.svg'
        })
    },
    editarGastos: (req, res) => {
        res.render('editarGastos', {
            pageTitle: 'Prestação de Contas',
            pageIcon: 'contas2.svg'
        })
    }

}

module.exports = ContasController;