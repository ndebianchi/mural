module.exports = {
  index: (req, res) => {
    return res.render('boleto', {
      usuario: req.session.usuario,
    });
  },
};
