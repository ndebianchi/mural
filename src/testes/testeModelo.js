const { sequelize, Tabela } = require('../models');

Tabela.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)