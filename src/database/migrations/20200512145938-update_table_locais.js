'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn(
        'locais', 
        'descricao', { type: Sequelize.STRING(64) });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('locais', 'descricao');
    
  }
};
