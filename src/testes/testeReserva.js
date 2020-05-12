const { sequelize, Reserva } = require('../models');

Reserva.findAll({include: ['local', 'usuario']}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)