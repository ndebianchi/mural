const ReservasController = {
    index: (req, res) => {
        res.render('reservas', {
            pageTitle: 'Reservas',
            pageIcon: 'reservas.svg'
        })
    },

    reservasAgenda: (req, res) => {
        res.render('reservas-agenda', {
            pageTitle: 'Reservas',
            pageIcon: 'reservas.svg'
        })
    }
}

module.exports = ReservasController;