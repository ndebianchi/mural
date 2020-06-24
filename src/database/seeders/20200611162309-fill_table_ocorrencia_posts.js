'use strict';

const date = new Date();
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ocorrencia_posts',
      [
        {
          post_id: 16,
          foto: 'posts/Ocorrencia-1.jpg',
          status: 1,
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 9,
          foto: 'posts/Ocorrencia-1.jpg',
          status: 2,
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ocorrencia_posts', null, {});
  },
};
