'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('addressType', 'icon',
        {
          type: Sequelize.STRING,
          after: 'description'
        }
      ),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'addressType',
      'icon'
    );
  }
};
