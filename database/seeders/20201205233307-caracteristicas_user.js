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
          psychographicItemId: 6,
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
          userId: 6,
        },
        {
          psychographicItemId: 2,
          userId: 6,
        },
        {
          psychographicItemId: 3,
          userId: 6,
        },
        {
          psychographicItemId: 5,
          userId: 6,
        },
        {
          psychographicItemId: 1,
          userId: 7,
        },
        {
          psychographicItemId: 5,
          userId: 7,
        },
        {
          psychographicItemId: 7,
          userId: 7,
        },
        {
          psychographicItemId: 7,
          userId: 8,
        },
        {
          psychographicItemId: 7,
          userId: 11,
        },
        {
          psychographicItemId: 7,
          userId: 9,
        },
        {
          psychographicItemId: 6,
          userId: 12,
        },
        {
          psychographicItemId: 6,
          userId: 9,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('caracteristicas_user', null, {});
  }
};
