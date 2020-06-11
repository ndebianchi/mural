'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker/locale/pt_BR');
const moment = require('moment');
const date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuarios',
      [
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  },
};
