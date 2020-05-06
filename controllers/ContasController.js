const ContasController = {
    index: (req, res) => {
        res.render('contas')
    },
    editarGastos: (req, res) => {
        res.render('editarGastos')
    }

}

module.exports = ContasController;