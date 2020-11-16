'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.dropTable('interested'),

      queryInterface.createTable(
        'interested',
        {
          productId: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
              model: 'product',
              key: 'id',
            },
          },
          userId: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        }
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('interested');
  }
};
