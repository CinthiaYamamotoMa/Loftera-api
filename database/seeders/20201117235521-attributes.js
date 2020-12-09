'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('attributes',
      [
        {
          name: 'Wi-fi',
          icon: 'fas fa-wifi',
        },
        {
          name: 'Cozinha',
          icon: 'fas fa-utensils',
        },
        {
          name: 'Piscina',
          icon: 'fas fa-swimmer',
        },
        {
          name: 'Academia',
          icon: 'fas fa-dumbbell',
        },
        {
          name: 'Ponto de Ônibus',
          icon: 'fas fa-bus',
        },
        {
          name: 'Televisão',
          icon: 'fas fa-tv',
        },
        {
          name: 'Próximo ao Metrô',
          icon: 'fas fa-subway',
        },
        {
          name: 'Próximo ao Trem',
          icon: 'fas fa-train',
        },
        {
          name: 'Bicicletário',
          icon: 'fas fa-bicycle',
        },
        {
          name: 'Acessível',
          icon: 'fas fa-wheelchair',
        },
        {
          name: 'Vaga',
          icon: 'fas fa-car',
        },
        {
          name: 'Próximo ao Shopping',
          icon: 'fas fa-shopping-bag',
        },
        {
          name: 'Próximo ao Mercado',
          icon: 'fas fa-shopping-cart',
        },
        {
          name: 'Banheira',
          icon: 'fas fa-bath',
        },
        {
          name: 'Sofá',
          icon: 'fas fa-couch',
        },
        {
          name: 'Liquidificador',
          icon: 'fas fa-blender',
        },
        {
          name: 'Próximo ao Hospital',
          icon: 'fas fa-hospital',
        },
        {
          name: 'Guarda-Roupa',
          icon: 'fas fa-tshirt',
        },
        {
          name: 'Varanda',
          icon: 'fas fa-wind',
        },
        {
          name: 'Elevador',
          icon: 'fas fa-sort-up',
        },
        {
          name: 'Cama',
          icon: 'fas fa-bed',
        },
        {
          name: 'Máquina de Lavar',
          icon: 'fas fa-soap',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('attributes', null, {});
  }
};
