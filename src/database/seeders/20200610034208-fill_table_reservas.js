'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'reservas',
      [
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reservas', null, {});
  },
};
