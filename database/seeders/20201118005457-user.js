'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user',
      [
        {
          name: 'Cinthia Yamamoto',
          email: 'cinthia',
          password: '123',
          cpf: '12345678947',
          cellPhone: '11949794719',
          gender: 'F',
          description: 'Teste do teste',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
