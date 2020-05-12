'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('locais', 
      { descricao: Sequelize.STRING(64) });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('locais');
    
  }
};
