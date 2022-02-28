'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('markets',  [{
      stationId: 1, market :'College'},
      {stationId: 2,market: 'College'},
      {stationId: 3,market: 'College'},
      {stationId: 4,market: 'College'},
      {stationId: 5,market: 'College'},
      {stationId: 6,market: 'College'},
      {stationId: 7,market: 'Commercial'},
      {stationId: 8,market: 'Commercial'},
      {stationId: 9,market: 'Commercial'},
      {stationId: 10,market: 'Commercial'},
      {stationId: 11,market: 'Commercial'},
      {stationId: 12,market: 'Commercial'},
      {stationId: 13,market: 'Commercial'},
      {stationId: 14,market: 'Commercial'},
      {stationId: 15,market: 'Commercial'},
      {stationId: 16,market: 'Commercial'},
      {stationId: 17,market: 'Commercial'},
      {stationId: 18,market: 'Commercial'},
      {stationId: 19,market: 'Commercial'},
      {stationId: 20,market: 'Commercial'},
      {stationId: 21,market: 'Commercial'},
      {stationId: 22,market: 'Commercial'},
      {stationId: 23,market: 'Commercial'},
      ])
    },
 async down(queryInterface) {
  await queryInterface.bulkDelete('markets')
}
};