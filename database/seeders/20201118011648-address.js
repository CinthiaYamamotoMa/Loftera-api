'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('address',
      [
        {
          cep: '09531190',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Cerâmica',
          street: 'Alameda Terracota',
          number: 215,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 2,
          productId: 1,
          latitude: -23.6200539747379, 
          longitude: -46.56670003131685
        },
        {
          cep: '03244150',
          state: 'São Paulo',
          city: 'São Paulo',
          district: 'Jardim Guairacá',
          street: 'Rua Serra Redonda',
          number: 527,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 1,
          productId: 2,
          latitude: -23.609326284243235, 
          longitude: -46.54051330100364
        },
        {
          cep: '03210000',
          state: 'São Paulo',
          city: 'São Paulo',
          district: 'Vila Alpina',
          street: 'Rua Costa Barros',
          number: 1192,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 3,
          productId: 3,
          latitude: -23.59695447219054,
          longitude: -46.55489022798802
        },
        {
          cep: '09540080',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santa Paula',
          street: 'Avenida Doutor Augusto de Toledo',
          number: 733,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 2,
          productId: 4,
          latitude: -23.6200539747379, 
          longitude: -46.56670003131685
        },
        {
          cep: '09550480',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Prosperidade',
          street: 'Rua Rádio',
          number: 733,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 1,
          productId: 5,
          latitude: -23.608462448286478,
          longitude: -46.55027397512569
        },
        {
          cep: '09560530',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Santa Maria',
          street: 'Rua Silvia',
          number: 88,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 1,
          productId: 6,
          latitude: -23.63399042538996, 
          longitude: -46.551007019040384
        },
        {
          cep: '09581620',
          state: 'São Paulo',
          city: 'São Caetano do Sul',
          district: 'Jardim São Caetano',
          street: 'Avenida Papa João XXIII',
          number: 541,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 1,
          productId: 7,
          latitude: -23.637353709607826,
          longitude: -46.580808385405874
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('address', null, {});
  }
};
