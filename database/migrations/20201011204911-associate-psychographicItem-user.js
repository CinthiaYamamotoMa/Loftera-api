'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'user_psychographicItem',
      {
        psychographicItemId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_psychographicItem');
  }
};
