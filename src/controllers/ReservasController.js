const { Local } = require('../models')
module.exports = {
  index: async (req, res) => {

    let locais = await Local.findAll();

    console.log()
    console.log('-----------------')
    console.log(locais)

    return res.render('reservas', {
      usuario: req.session.usuario,
      locais
    });    
  },

  reservasAgenda: (req, res) => {
    return res.render('reservas-agenda', {
      usuario: req.session.usuario,
      pageTitle: 'Reservas Agenda',
      pageIcon: 'reservas.svg'     
    });
  },
};
