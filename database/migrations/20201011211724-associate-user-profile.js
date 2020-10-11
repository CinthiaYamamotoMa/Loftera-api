'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('user', 'profileId',
        {
          type: Sequelize.INTEGER,
          after: 'description'
        }
      ),
      queryInterface.addConstraint('user', {
        fields: ['profileId'],
        type: 'FOREIGN KEY',
        references: {
          table: 'profile',
          field: 'id'
        },
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'user',
      'profileId'
    );
  }
};
