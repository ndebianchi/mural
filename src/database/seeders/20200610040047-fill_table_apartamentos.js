'use strict';

const faker = require('faker/locale/pt_BR');
const moment = require('moment');
const date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'apartamentos',
      [
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('apartamentos', null, {});
  },
};
