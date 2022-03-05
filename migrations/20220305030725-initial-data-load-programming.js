'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('programming', [{
      stationId: 1, id: 2, programming:'Variety'},
      {stationId: 2, id: 2, programming: 'Variety'},
      {stationId: 3, id: 2, programming: 'Variety'},
      {stationId: 4, id: 9, programming: 'NPR'},
      {stationId: 5, id: 2, programming: 'Variety'},
      {stationId: 6, id: 2, programming: 'Variety'},
      {stationId: 7, id: 2, programming: 'Variety'},
      {stationId: 8, id: 2, programming: 'Variety'},
      {stationId: 9, id: 3, programming: 'Classic Rock'},
      {stationId: 10, id: 12, programming: 'Sports'},
      {stationId: 11, id: 3, programming: 'Classic Rock'},
      {stationId: 12, id: 10, programming: 'Soft Rock'},
      {stationId: 13, id: 7, programming: 'Hip Hop'},
      {stationId: 14, id: 3, programming: 'Classic Rock'},
      {stationId: 15, id: 1, programming: 'Adult Contemporary'},
      {stationId: 16, id: 13, programming: 'Top 40'},
      {stationId: 17, id: 8, programming: 'News'},
      {stationId: 18, id: 11, programming: 'Spanish'},
      {stationId: 19, id: 5, programming: 'Country'},
      {stationId: 20, id: 5, programming: 'Country'},
      {stationId: 21, id: 6, programming: 'Hard Rock'},
      {stationId: 22, id: 9, programming: 'NPR'},
      {stationId: 23, id: 4, programming: 'Classical'}
    ])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('programming')
  }
};
