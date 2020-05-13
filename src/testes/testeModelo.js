const { sequelize, Post, Usuario } = require('../models');

Post.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)