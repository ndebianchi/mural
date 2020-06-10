'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'post_categorias',
      [
        {
          nome: 'Aviso',
        },
        {
          nome: 'Post',
        },
        {
          nome: 'Ocorrência',
        },
        {
          nome: 'Anúncio',
        },
        {
          nome: 'Classificados',
        },
        {
          nome: 'Serviços',
        },
        {
          nome: 'Eventos',
        },
        {
          nome: 'Achados e Perdidos',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post_categorias', null, {});
  },
};
