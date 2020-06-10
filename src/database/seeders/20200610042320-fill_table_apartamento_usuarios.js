'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'apartamento_usuarios',
      [
        {
          apartamento_id: 1,
          usuario_id: 1,
        },
        {
          apartamento_id: 2,
          usuario_id: 2,
        },
        {
          apartamento_id: 3,
          usuario_id: 3,
        },
        {
          apartamento_id: 4,
          usuario_id: 4,
        },
        {
          apartamento_id: 5,
          usuario_id: 5,
        },
        {
          apartamento_id: 6,
          usuario_id: 6,
        },
        {
          apartamento_id: 7,
          usuario_id: 7,
        },
        {
          apartamento_id: 8,
          usuario_id: 8,
        },
        {
          apartamento_id: 9,
          usuario_id: 9,
        },
        {
          apartamento_id: 10,
          usuario_id: 10,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('apartamento_usuarios', null, {});
  },
};
