'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product',
      [
        {
          aluguel: 1000.00,
          condo: 100.5,
          iptu: 260.00,
          active: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});
  }
};
