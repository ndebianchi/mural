'use strict';

const faker = require('faker/locale/pt_BR');
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuarios',
      [
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
        {
          usuario_tipo_id: faker.random.number({ min: 1, max: 3 }),
          nome: faker.name.firstName().toLowerCase(),
          sobrenome: faker.name.lastName().toLowerCase(),
          email: faker.internet.email(nome, sobrenome),
          senha: bcrypt.hashSync('12345678', 10),
          telefone: faker.phone.phoneNumber('+55###########'),
          foto: faker.image.avatar(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  },
};
