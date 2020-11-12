'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('address', 'addressTypeId',
        {
          type: Sequelize.INTEGER,
          after: 'productId'
        }
      ),
      queryInterface.addConstraint('address', {
        fields: ['addressTypeId'],
        type: 'FOREIGN KEY',
        references: {
          table: 'addressType',
          field: 'id'
        },
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'address',
      'addressTypeId'
    );
  }
};
