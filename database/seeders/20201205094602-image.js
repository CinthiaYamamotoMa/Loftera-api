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
          name: 'avatar-s-21.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
        {
          name: 'avatar-s-5.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3
        },
        {
          name: 'avatar-s-20.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4
        },
        {
          name: 'avatar-s-24.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5
        },
        {
          name: 'avatar-s-13.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6
        },
        {
          name: 'avatar-s-14.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('psychographicItem', null, {});
  }
};
