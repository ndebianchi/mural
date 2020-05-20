const AgendaController = {
    index: (req, res) => {
        res.render('agenda', {
            pageTitle: 'Agenda',
            pageIcon: 'agenda.svg',
            usuario: req.session.usuario
        })
    }
}

module.exports = AgendaController;