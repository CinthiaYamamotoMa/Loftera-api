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
          psychographicItemId: 1,
          userId: 2,
        },
        {
          psychographicItemId: 2,
          userId: 2,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('caracteristicas_user', null, {});
  }
};
