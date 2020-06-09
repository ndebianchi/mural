module.exports = {
  index: (req, res) => {
    return res.render('boleto', {
      pageTitle: '2ª Via do Condomínio',
      pageIcon: '2via.svg',
      usuario: req.session.usuario,
    });
  },
};
