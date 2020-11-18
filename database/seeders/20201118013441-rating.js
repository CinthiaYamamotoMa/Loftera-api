'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ratings',
      [
        {
          limpeza: 4.00,
          comunicacao: 3.00,
          checkin: 5.00,
          precisao: 2.50,
          localizacao: 1.50,
          valor: 4.50,
          qtdAvaliacoes: 1,
          productId: 1,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ratings', null, {});
  }
};
