module.exports = {
  index: (req, res) => {
    return res.render('agenda', {
      usuario: req.session.usuario,
    });
  },
};
