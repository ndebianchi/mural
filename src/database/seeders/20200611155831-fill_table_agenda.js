'use strict';

const date = new Date();
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'agenda',
      [
        {
          post_id: 1,
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          post_id: 2,
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('agenda', null, {});
  },
};
