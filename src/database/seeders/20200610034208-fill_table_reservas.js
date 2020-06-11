'use strict';

const moment = require('moment');
const date = new Date();
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
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: faker.random.number({ min: 1, max: 10 }),
          local_id: faker.random.number({ min: 1, max: 3 }),
          data: faker.date.future(1),
          descricao: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reservas', null, {});
  },
};
