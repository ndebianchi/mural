// const { sequelize, Reserva } = require('../models');

// Reserva.findAll( { include: 'local' } ).then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

// {include: ['local', 'usuario']}

const { sequelize, Reserva } = require('../models');

Reserva.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)