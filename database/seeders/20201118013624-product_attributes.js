'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_attributes',
      [
        {
          attributeId: 1,
          productId: 1,
        },
        {
          attributeId: 2,
          productId: 1,
        },
        {
          attributeId: 3,
          productId: 1,
        },
        {
          attributeId: 4,
          productId: 1,
        },
        {
          attributeId: 7,
          productId: 1,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_attributes', null, {});
  }
};
