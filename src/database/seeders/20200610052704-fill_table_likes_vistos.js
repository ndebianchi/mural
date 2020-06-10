'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'likes_vistos',
      [
        {
          usuario_id: 1,
          post_id: 2,
        },
        {
          usuario_id: 1,
          post_id: 4,
        },
        {
          usuario_id: 1,
          post_id: 6,
        },
        {
          usuario_id: 1,
          post_id: 19,
        },
        {
          usuario_id: 1,
          post_id: 20,
        },
        {
          usuario_id: 2,
          post_id: 2,
        },
        {
          usuario_id: 2,
          post_id: 4,
        },
        {
          usuario_id: 2,
          post_id: 6,
        },
        {
          usuario_id: 2,
          post_id: 19,
        },
        {
          usuario_id: 2,
          post_id: 20,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('likes_vistos', null, {});
  },
};
