'use strict';

const date = new Date();
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'feed_posts',
      [
        {
          post_id: 5,
          foto: 'posts/Anuncio-1.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 6,
          foto: 'posts/Anuncio-2.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 7,
          foto: 'posts/Anuncio-3.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 8,
          foto: 'posts/Anuncio-4.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 10,
          foto: 'posts/Classificados-1.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 11,
          foto: 'posts/Classificados-2.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 12,
          foto: 'posts/Post-1.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 12,
          foto: 'posts/Post-2.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('feed_posts', null, {});
  },
};
