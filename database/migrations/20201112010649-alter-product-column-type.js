'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('product', 'iptu', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
      queryInterface.changeColumn('product', 'aluguel', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
      queryInterface.changeColumn('product', 'condo', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }),
    ])
  },
};
