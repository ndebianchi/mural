'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'feed_posts',
      [
        {
          post_id: 2,
          foto: 'https://picsum.photos/500/300?random=1',
        },
        {
          post_id: 4,
          foto: 'https://picsum.photos/500/300?random=1',
        },
        {
          post_id: 6,
          foto: 'https://picsum.photos/500/300?random=1',
        },
        {
          post_id: 19,
          foto: 'https://picsum.photos/500/300?random=1',
        },
        {
          post_id: 20,
          foto: 'https://picsum.photos/500/300?random=1',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('feed_posts', null, {});
  },
};
