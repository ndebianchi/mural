'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feed_posts', {
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
    return queryInterface.dropTable('feed_posts');
  }
};
