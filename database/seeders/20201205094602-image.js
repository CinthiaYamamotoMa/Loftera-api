'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('image',
      [
        {
          name: 'avatar-s-26.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          name: 'avatar-s-25.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
        {
          name: 'avatar-s-24.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          name: 'avatar-s-23.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('psychographicItem', null, {});
  }
};
