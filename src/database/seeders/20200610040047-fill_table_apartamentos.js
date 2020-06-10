'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'apartamentos',
      [
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
        {
          bloco: faker.address.streetPrefix(),
          numero: faker.random.number({ min: 100, max: 999 }),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('apartamentos', null, {});
  },
};
