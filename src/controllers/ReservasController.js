module.exports = {
  index: (req, res) => {
    return res.render('reservas', {
      usuario: req.session.usuario,
    });
  },

  reservasAgenda: (req, res) => {
    return res.render('reservas-agenda', {
      usuario: req.session.usuario,
    });
  },
};
