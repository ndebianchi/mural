const ReservasController = {
    index: (req, res) => {
        res.render('reservas', {
            pageTitle: 'Reservas',
            pageIcon: 'reservas.svg',
            usuario: req.session.usuario
        })
    },

    reservasAgenda: (req, res) => {
        res.render('reservas-agenda', {
            pageTitle: 'Reservas',
            pageIcon: 'reservas.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = ReservasController;