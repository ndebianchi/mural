// Trocar "nome_tabela"
// Criar Colunas

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post_categorias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(32),
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
    return queryInterface.dropTable('post_categorias');
  }
};

