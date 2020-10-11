'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'addressType_address',
      {
        addressTypeId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        addressId: {
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
    return queryInterface.dropTable('addressType_address');
  }
};
