const AgendaController = {
    index: (req, res) => {
        res.render('agenda', {
            pageTitle: 'Agenda',
            pageIcon: 'agenda.svg'
        })
    }
}

module.exports = AgendaController;