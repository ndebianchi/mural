const ReservasController = {
    index: (req, res) => {
        res.render('reservas')
    },

    reservasAgenda: (req, res) => {
        res.render('reservas-agenda')
    }
}

module.exports = ReservasController;