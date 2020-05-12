const { sequelize, Apartamento } = require('../models');

Apartamento.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)