'use strict';

const faker = require('faker/locale/pt_BR');
const moment = require('moment');
const date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          usuario_id: 1,
          categoria_id: 1,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 1,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 2,
          categoria_id: 1,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 2,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 3,
          categoria_id: 1,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 3,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 4,
          categoria_id: 3,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 4,
          categoria_id: 4,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 5,
          categoria_id: 3,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 5,
          categoria_id: 4,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 6,
          categoria_id: 5,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 6,
          categoria_id: 6,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 7,
          categoria_id: 5,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 7,
          categoria_id: 6,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 8,
          categoria_id: 7,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 8,
          categoria_id: 8,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 9,
          categoria_id: 7,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 9,
          categoria_id: 8,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 10,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_id: 10,
          categoria_id: 2,
          mensagem: faker.lorem.paragraph(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  },
};
