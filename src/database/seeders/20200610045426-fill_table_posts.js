'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          usuario_id: 1,
          categoria_id: 1,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 1,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 2,
          categoria_id: 1,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 2,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 3,
          categoria_id: 1,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 3,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 4,
          categoria_id: 3,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 4,
          categoria_id: 4,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 5,
          categoria_id: 3,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 5,
          categoria_id: 4,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 6,
          categoria_id: 5,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 6,
          categoria_id: 6,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 7,
          categoria_id: 5,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 7,
          categoria_id: 6,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 8,
          categoria_id: 7,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 8,
          categoria_id: 8,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 9,
          categoria_id: 7,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 9,
          categoria_id: 8,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 10,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
        },
        {
          usuario_id: 10,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  },
};
