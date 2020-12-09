'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('interested',
      [
        {
          userId: 1,
          productId: 1,
        },
        {
          userId: 2,
          productId: 1,
        },
        {
          userId: 3,
          productId: 1,
        },
        {
          userId: 4,
          productId: 1,
        },

        {
          userId: 1,
          productId: 2,
        },
        {
          userId: 2,
          productId: 2,
        },
        {
          userId: 3,
          productId: 3,
        },
        {
          userId: 4,
          productId: 4,
        },
        {
          userId: 3,
          productId: 5,
        },
        {
          userId: 4,
          productId: 5,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('interested', null, {});
  }
};
