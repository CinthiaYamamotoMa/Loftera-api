'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('faculdade',
      [
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 11,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 12,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
        {
          name: 'UNIP',
          cep: '09530070',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santo Antônio',
          street: 'Travessa Acácia',
          number: 85,
          userId: 13,
          deleted: false,
          latitude: -23.61851338246393,
          longitude: -46.57794095830096
        },
        {
          name: 'Uninove',
          cep: '09521000',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Centro',
          street: 'Travessa Afonso Meira',
          number: 85,
          userId: 14,
          deleted: false,
          latitude: -23.61851338246393,
          longitude: -46.57794095830096
        },
        {
          name: 'Uninove',
          cep: '09521000',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Centro',
          street: 'Travessa Afonso Meira',
          number: 85,
          userId: 15,
          deleted: false,
          latitude: -23.61851338246393,
          longitude: -46.57794095830096
        },
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 8,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
        {
          name: 'USCS',
          cep: '09521160',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Centro',
          street: 'Rua Santo Antonio',
          number: 50,
          userId: 9,
          deleted: false,
          latitude: -23.60919098411125,
          longitude: -46.57368730285547
        },
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 6,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 4,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 2,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
        {
          name: 'Fatec São Caetano',
          cep: '09581420',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Rua Bel Aliance',
          number: 733,
          userId: 1,
          deleted: false,
          latitude: -23.6376447978711,
          longitude: -46.57889413169091
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('faculdade', null, {});
  }
};
