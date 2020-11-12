'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'product',
        'description'
      ),

      queryInterface.renameColumn('product', 'rent', 'aluguel'),
      
      queryInterface.renameColumn('product', 'condoFee', 'condo'),

    ])
  },
};
