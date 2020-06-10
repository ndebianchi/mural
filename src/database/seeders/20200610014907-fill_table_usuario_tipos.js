'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario_tipos',
      [
        {
          nome: 'Síndico',
        },
        {
          nome: 'Morador',
        },
        {
          nome: 'Funcionário',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario_tipos', null, {});
  },
};
