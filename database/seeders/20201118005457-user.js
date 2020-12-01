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
          question: 'Qual o nome da minha gata',
          answer: 'Bananinha',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Victor Dourado',
          email: 'victor',
          password: '123',
          cpf: '14725836933',
          cellPhone: '11949794719',
          gender: 'M',
          description: 'Teste do teste',
          question: 'Qual o nome da minha gata',
          answer: 'Bananinha',
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chrystian Santos',
          email: 'chrys',
          password: '123',
          cpf: '98765432111',
          cellPhone: '11949794719',
          gender: 'M',
          description: 'Teste do teste',
          question: 'Qual o nome da minha gata',
          answer: 'Bananinha',
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
