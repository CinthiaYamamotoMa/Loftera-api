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
        {
          name: 'avatar-s-18.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 8
        },
        {
          name: 'avatar-s-10.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 9
        },
        {
          name: 'avatar-s-8.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 10
        },
        {
          name: 'avatar-s-6.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 11
        },
        {
          name: 'avatar-s-23.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 12
        },
        {
          name: 'avatar-s-25.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 13
        },
        {
          name: 'avatar-s-11.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 14
        },
        {
          name: 'avatar-s-3.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 15
        },
        {
          name: 'foro13.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 1
        },
        {
          name: 'foto2.png',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 1
        },
        {
          name: 'foto2.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 2
        },
        {
          name: 'foto17.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 2
        },
        {
          name: 'foto5.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 2
        },
        {
          name: 'foto6.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 3
        },
        {
          name: 'foto7.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 3
        },
        {
          name: 'foto10.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 4
        },
        {
          name: 'foto8.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 4
        },
        {
          name: 'foto3.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 5
        },
        {
          name: 'foto9.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 5
        },
        {
          name: 'foto11.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 6
        },
        {
          name: 'foto15.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 6
        },
        {
          name: 'foto18.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 7
        },
        {
          name: 'foto19.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 7
        },


        {
          name: 'foto22.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 8
        },
        {
          name: 'foto21.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 8
        },


        {
          name: 'foto26.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 8
        },
        {
          name: 'foto25.jpg',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 7
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('psychographicItem', null, {});
  }
};
