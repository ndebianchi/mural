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
          type: 'TIMESTAMP',
          defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        },
        updated_at: {
          type: 'TIMESTAMP',
          defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        }
       });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('apartamentos');
    
  }
};
