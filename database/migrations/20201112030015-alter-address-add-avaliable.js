'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('address', 'avaliable',
        {
          type: Sequelize.BOOLEAN,
          after: 'addressTypeId'
        }
      ),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'address',
      'addressTypeId'
    );
  }
};
