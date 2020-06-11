'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'agenda',
      [
        {
          post_id: 15,
        },
        {
          post_id: 17,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('agenda', null, {});
  },
};
