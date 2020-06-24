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
          // Aviso 1 (1)
          usuario_id: 1,
          categoria_id: 1,
          mensagem: 'Devido à pandemia de COVID-19, todas as áreas comuns estão interditadas.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          // Aviso 2 (2)
          usuario_id: 1,
          categoria_id: 1,
          mensagem: 'Por favor, utilizem máscaras ao circular pelo condomínio.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          // Aviso 3 (3)
          usuario_id: 1,
          categoria_id: 1,
          mensagem: 'Colocamos alcool gel nos elevadores, saguão de entrada e portaria. Utilizem com consciência.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          // Aviso 4 (4)
          usuario_id: 1,
          categoria_id: 1,
          mensagem: 'Devido ao grande número de moradores trabalhando em home office, todo barulho excessivo será passivo de advertências e multas. Todas as obras e reformas não necessárias estão proibidas.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Anuncio 1 (5)
          usuario_id: 2,
          categoria_id: 4,
          mensagem: 'Aluguel de Vaga 27B no 2A, R$ 200,00/mês',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Anuncio 2 (6)
          usuario_id: 3,
          categoria_id: 4,
          mensagem: 'Bolos e tortas por encomenda! Preços e cardápio por WhatsApp',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Anuncio 3 (7)
          usuario_id: 4,
          categoria_id: 4,
          mensagem: 'Levo seu cachorro para passear! Horários disponíveis.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Anuncio 4 (8)
          usuario_id: 5,
          categoria_id: 4,
          mensagem: 'Aulas particulares de Português e Matemática.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Ocorrencia 1 (9)
          usuario_id: 4,
          categoria_id: 3,
          mensagem: 'Alguém está deixando a bicicleta largada nas vagas dos moradores.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },        
        {    
          // Classificados 1 (10)
          usuario_id: 6,
          categoria_id: 5,
          mensagem: 'Apartamento à venda. Venha visitar',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Classificados 2 (11)
          usuario_id: 7,
          categoria_id: 5,
          mensagem: 'Aluga-se apartamento.',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Post 1 (12)
          usuario_id: 5,
          categoria_id: 2,
          mensagem: 'BOM DIA MORADORES!!!',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Post 2 (13)
          usuario_id: 8,
          categoria_id: 2,
          mensagem: 'É assim que se tira uma selfie?',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Perdidos 1 (14)
          usuario_id: 2,
          categoria_id: 8,
          mensagem: 'Documento perdido',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Perdidos 2 (15)
          usuario_id: 6,
          categoria_id: 8,
          mensagem: 'Filhote de cachorro perdido',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {    
          // Ocorrencia 2 (16)
          usuario_id: 8,
          categoria_id: 3,
          mensagem: 'Alguém AINDA está deixando a bicicleta largada nas vagas dos moradores.',
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
