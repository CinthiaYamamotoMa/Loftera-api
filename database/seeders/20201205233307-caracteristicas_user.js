'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('caracteristicas_user',
      [
        {
          psychographicItemId: 1,
          userId: 1,
        },
        {
          psychographicItemId: 2,
          userId: 1,
        },
        {
          psychographicItemId: 3,
          userId: 1,
        },
        {
          psychographicItemId: 5,
          userId: 1,
        },
        {
          psychographicItemId: 4,
          userId: 2,
        },
        {
          psychographicItemId: 2,
          userId: 2,
        },
        {
          psychographicItemId: 1,
          userId: 3,
        },
        {
          psychographicItemId: 2,
          userId: 3,
        },
        {
          psychographicItemId: 3,
          userId: 3,
        },
        {
          psychographicItemId: 1,
          userId: 4,
        },
        {
          psychographicItemId: 5,
          userId: 4,
        },
        {
          psychographicItemId: 5,
          userId: 6,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('caracteristicas_user', null, {});
  }
};
