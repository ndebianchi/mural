'use strict';

const moment = require('moment');
const date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'locais',
      [
        {
          nome: 'Churrasqueira',
          foto:
            'https://s2.glbimg.com/yHwcwGJABsWOGtRpGpSSpNvHJtQ=/0x0:1800x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/W/l/1ydP32SMuECxECL23oHw/village-park-churrasqueira.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          nome: 'Piscina',
          foto:
            'https://kiper.com.br/wp-content/uploads/piscina-em-condominio.png',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          nome: 'Salão de Festas',
          foto:
            'https://scproduction.s3.sa-east-1.amazonaws.com/wysiwyg_uploads/cms/images/2018/10/17/19/1-b4jwrlqf.jpg',
          created_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
          updated_at: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locais', null, {});
  },
};
