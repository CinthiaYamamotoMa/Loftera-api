'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('faculdade',
      [
        {
          name: 'São Camilo',
          cep: '09531190',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Cerâmica',
          street: 'Alameda Terracota',
          number: 215,
          userId: 8,
          deleted: false,
          latitude: -23.6200539747379, 
          longitude: -46.56670003131685
        },
        {
          name: 'Insper',
          cep: '09560320',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santa Maria',
          street: 'Rua Acanã',
          number: 123,
          userId: 9,
          deleted: false,
          latitude: -23.631575227342562,
          longitude: -46.55147581634707
        },
        {
          name: 'UNIP',
          cep: '09530070',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santo Antônio',
          street: 'Travessa Acácia',
          number: 85,
          userId: 15,
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
          userId: 6,
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
          userId: 6,
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
          userId: 4,
          deleted: false,
          latitude: -23.60919098411125,
          longitude: -46.57368730285547
        },
        {
          name: 'Mackenzie',
          cep: '09540080',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santa Paula',
          street: 'Avenida Doutor Augusto de Toledo',
          number: 733,
          userId: 11,
          deleted: false,
          latitude: -23.6200539747379, 
          longitude: -46.56670003131685
        },
        {
          name: 'FMU',
          cep: '09550480',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Prosperidade',
          street: 'Rua Rádio',
          number: 733,
          deleted: false,
          userId: 12,
          latitude: -23.608462448286478,
          longitude: -46.55027397512569
        },
        {
          name: 'São Judas',
          cep: '09560530',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santa Maria',
          street: 'Rua Silvia',
          number: 88,
          userId: 2,
          deleted: false,
          latitude: -23.63399042538996, 
          longitude: -46.551007019040384
        },
        {
          name: 'Anhanguera',
          cep: '09581620',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Avenida Papa João XXIII',
          number: 541,
          userId: 1,
          deleted: false,
          latitude: -23.637353709607826,
          longitude: -46.580808385405874
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('faculdade', null, {});
  }
};
