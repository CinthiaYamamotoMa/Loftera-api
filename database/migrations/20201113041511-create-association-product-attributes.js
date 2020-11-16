'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'product_attributes',
      {
        productId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        attributeId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_attributes');
  }
};
