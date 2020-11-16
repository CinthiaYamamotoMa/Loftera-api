'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('product', 'ratingId',
        {
          type: Sequelize.INTEGER,
          after: 'iptu'
        }
      ),
      queryInterface.addConstraint('product', {
        fields: ['ratingId'],
        type: 'FOREIGN KEY',
        references: {
          table: 'ratings',
          field: 'id'
        },
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'product',
      'ratingId'
    );
  }
};
