'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'user',
        'profileId'
      ),
      queryInterface.removeColumn(
        'image',
        'userId'
      ),
    ]);
  },
};
