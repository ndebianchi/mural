'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ocorrencia_posts',
      [
        {
          post_id: 7,
          foto: 'https://picsum.photos/500/300?random=1',
          status: 1,
        },
        {
          post_id: 9,
          foto: 'https://picsum.photos/500/300?random=1',
          status: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ocorrencia_posts', null, {});
  },
};
