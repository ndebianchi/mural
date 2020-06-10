module.exports = {
  index: (req, res) => {
    return res.render('contas', {
      pageTitle: 'Prestação de Contas',
      pageIcon: 'contas2.svg',
      usuario: req.session.usuario,
    });
  },
  editarGastos: (req, res) => {
    return res.render('editarGastos', {
      pageTitle: 'Prestação de Contas',
      pageIcon: 'contas2.svg',
    });
  },
};
