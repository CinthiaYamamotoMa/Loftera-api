'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ratings',
      [
        {
          limpeza: 104.00,
          comunicacao: 91.00,
          checkin: 75.00,
          precisao: 101.50,
          localizacao: 109.50,
          valor: 94.50,
          qtdAvaliacoes: 22,
          productId: 1,
        },
        {
          limpeza: 74.00,
          comunicacao: 73.00,
          checkin: 52.00,
          precisao: 62.50,
          localizacao: 76.50,
          valor: 78.50,
          qtdAvaliacoes: 16,
          productId: 2,
        },
        {
          limpeza: 4.00,
          comunicacao: 3.00,
          checkin: 5.00,
          precisao: 2.50,
          localizacao: 1.50,
          valor: 4.50,
          qtdAvaliacoes: 1,
          productId: 3,
        },
        {
          limpeza: 51.00,
          comunicacao: 43.00,
          checkin: 54.00,
          precisao: 42.50,
          localizacao: 51.50,
          valor: 54.50,
          qtdAvaliacoes: 12,
          productId: 4,
        },
        {
          limpeza: 140.00,
          comunicacao: 99.00,
          checkin: 134.00,
          precisao: 129.50,
          localizacao: 136.50,
          valor: 145.50,
          qtdAvaliacoes: 30,
          productId: 5,
        },
        {
          limpeza: 40.00,
          comunicacao: 30.00,
          checkin: 50.00,
          precisao: 36.50,
          localizacao: 30.50,
          valor: 40.50,
          qtdAvaliacoes: 10,
          productId: 6,
        },
        {
          limpeza: 230.00,
          comunicacao: 241.00,
          checkin: 225.00,
          precisao: 238.50,
          localizacao: 219.50,
          valor: 237.50,
          qtdAvaliacoes: 50,
          productId: 7,
        },
        {
          limpeza: 230.00,
          comunicacao: 241.00,
          checkin: 225.00,
          precisao: 238.50,
          localizacao: 219.50,
          valor: 237.50,
          qtdAvaliacoes: 50,
          productId: 8,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ratings', null, {});
  }
};
