'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ratings',
      [
        {
          limpeza: 5.00,
          comunicacao: 5.00,
          checkin: 5.00,
          precisao: 5.00,
          localizacao: 5.00,
          valor: 5.00,
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
