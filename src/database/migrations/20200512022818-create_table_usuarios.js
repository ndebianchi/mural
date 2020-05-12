'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuario_tipo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario_tipos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      foto: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('usuarios');
  }
};
