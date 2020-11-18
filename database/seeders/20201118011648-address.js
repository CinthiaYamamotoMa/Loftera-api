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
          street: 'Alamaeda Terracota',
          number: 215,
          complement: '',
          avaliable: true,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          addressTypeId: 1,
          productId: 1,
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('address', null, {});
  }
};
