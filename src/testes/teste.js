const { sequelize, Usuario, Apartamento } = require('../models');

Usuario.findAll(
    {include : [{
        model: Apartamento,
        as: 'apartamentos',
        include: 'usuarios'
    }, 'apartamentos']}
).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        console.log(data[0])
        sequelize.close();
    }
)