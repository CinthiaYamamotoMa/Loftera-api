'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product',
      [
        {
          aluguel: 1700.00,
          condo: 304.5,
          iptu: 290.00,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 1000.00,
          condo: 340.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 400.00,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 1200.00,
          condo: 223.0,
          iptu: 260.00,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 900.00,
          condo: 100.5,
          iptu: 120.00,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 1430.00,
          iptu: 150.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 1000.00,
          condo: 100.5,
          iptu: 260.00,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          aluguel: 1300.00,
          condo: 500.7,
          iptu: 168.00,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});
  }
};
