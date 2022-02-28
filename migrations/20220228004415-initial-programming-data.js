'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('programming',  [{
      stationId: 1, programming: 'Variety'},
      {stationId: 2,programming: 'Variety'},
      {stationId: 3,programming: 'Variety'},
      {stationId: 4,programming: 'NPR'},
      {stationId: 5,programming: 'Variety'},
      {stationId: 6,programming: 'Variety'},
      {stationId: 7,programming: 'Variety'},
      {stationId: 8,programming: 'Alternative'},
      {stationId: 9,programming: 'Classic Rock'},
      {stationId: 10,programming: 'Sports'},
      {stationId: 11,programming: 'Classic Rock'},
      {stationId: 12,programming: 'Soft Rock'},
      {stationId: 13,programming: 'Hip Hop'},
      {stationId: 14,programming: 'Classic Rock'},
      {stationId: 15,programming: 'Adult Contemporary'},
      {stationId: 16,programming: 'Top 40'},
      {stationId: 17,programming: 'News'},
      {stationId: 18,programming: 'Spanish Contemporary'},
      {stationId: 19,programming: 'Country'},
      {stationId: 20,programming: 'Country'},
      {stationId: 21,programming: 'Hard Rock'},
      {stationId: 22,programming: 'NPR'},
      {stationId: 23,programming: 'Classical'},
      ])
    },
 async down(queryInterface) {
  await queryInterface.bulkDelete('programming')
}
};
