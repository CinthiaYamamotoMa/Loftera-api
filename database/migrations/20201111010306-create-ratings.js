'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ratings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product',
          key: 'id',
        },
      },
      limpeza: Sequelize.DECIMAL(10, 2),
      comunicacao: Sequelize.DECIMAL(10, 2),
      checkin: Sequelize.DECIMAL(10, 2),
      precisao: Sequelize.DECIMAL(10, 2),
      localizacao: Sequelize.DECIMAL(10, 2),
      valor: Sequelize.DECIMAL(10, 2),
      qtdAvaliacoes: Sequelize.INTEGER,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ratings');
  }
};
