'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable(
      'apartamentos', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        bloco: {
          type: Sequelize.STRING(64),
          allowNull: true
        },
        numero: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
       });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('apartamentos');
    
  }
};
