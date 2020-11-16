'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable(
      'product_rules',
      {
        productId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        ruleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_rules');
  }
};
