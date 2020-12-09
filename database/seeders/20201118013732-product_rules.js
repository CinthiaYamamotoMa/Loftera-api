'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_rules',
      [
        {
          ruleId: 1,
          productId: 1,
        },
        {
          ruleId: 3,
          productId: 1,
        },
        {
          ruleId: 1,
          productId: 2,
        },
        {
          ruleId: 2,
          productId: 2,
        },
        {
          ruleId: 3,
          productId: 2,
        },
        {
          ruleId: 4,
          productId: 2,
        },
        {
          ruleId: 1,
          productId: 3,
        },
        {
          ruleId: 3,
          productId: 3,
        },
        {
          ruleId: 3,
          productId: 4,
        },
        {
          ruleId: 4,
          productId: 4,
        },
        {
          ruleId: 1,
          productId: 4,
        },
        {
          ruleId: 2,
          productId: 4,
        },
        {
          ruleId: 3,
          productId: 5,
        },
        {
          ruleId: 4,
          productId: 6,
        },
        {
          ruleId: 1,
          productId: 7,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_rules', null, {});
  }
};
