'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rules',
      [
        {
          name: 'Pet',
          icon: 'fas fa-paw',
        },
        {
          name: 'Barulho até as 22h',
          icon: 'fas fa-volume-off',
        },
        {
          name: 'Fumar',
          icon: 'fas fa-smoking',
        },
        {
          name: 'Festas',
          icon: 'fas fa-glass-cheers',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rules', null, {});
  }
};
