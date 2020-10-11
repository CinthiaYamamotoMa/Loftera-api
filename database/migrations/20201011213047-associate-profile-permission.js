'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'profile_permission',
      {
        profileId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        permissionId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profile_permission');
  }
};
