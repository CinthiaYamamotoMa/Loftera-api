'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addressType',
      [
        {
          name: 'Pet',
          icon: 'fa fa-home',
        },
        {
          name: 'Barulho até as 22h',
          icon: 'fa fa-bed',
        },
        {
          name: 'Apto',
          icon: 'fa fa-building-o',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addressType', null, {});
  }
};
