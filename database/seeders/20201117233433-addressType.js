'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addressType',
      [
        {
          name: 'Pet',
          icon: 'fa fa-home',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Barulho até as 22h',
          icon: 'fa fa-bed',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Apto',
          icon: 'fa fa-building-o',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addressType', null, {});
  }
};
