'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('psychographicItem',
      [
        {
          name: 'Mulher',
          image: 'female.jpg',
          icon: 'fas fa-female',
          deleted: false,
        },
        {
          name: 'Homem',
          image: 'male.jpg',
          icon: 'fas fa-male',
          deleted: false,
        },
        {
          name: 'Outros',
          image: 'others.png',
          icon: 'fas fa-venus-mars',
          deleted: false,
        },
        {
          name: 'Fumante',
          image: 'smoke.jpg',
          icon: 'fas fa-smoking',
          deleted: false,
        },
        {
          name: 'Possuo animal',
          image: 'pet.jpg',
          icon: 'fas fa-paw',
          deleted: false,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('psychographicItem', null, {});
  }
};
