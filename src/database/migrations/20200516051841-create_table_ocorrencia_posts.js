'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ocorrencia_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },      
      foto: {
        type: Sequelize.STRING(256)
      },
      status: {
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
    return queryInterface.dropTable('ocorrencia_posts');
  }
};
