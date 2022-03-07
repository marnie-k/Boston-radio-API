'use strict'
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('programmings', [
      { stationId: 2, programming: 'Variety' },
      { stationId: 2, programming: 'Variety' },
      { stationId: 2, programming: 'Variety' },
      { stationId: 9, programming: 'NPR' },
      { stationId: 2, programming: 'Variety' },
      { stationId: 2, programming: 'Variety' },
      { stationId: 2, programming: 'Variety' },
      { stationId: 2, programming: 'Variety' },
      { stationId: 3, programming: 'Classic Rock' },
      { stationId: 12, programming: 'Sports' },
      { stationId: 3, programming: 'Classic Rock' },
      { stationId: 10, programming: 'Soft Rock' },
      { stationId: 7, programming: 'Hip Hop' },
      { stationId: 3, programming: 'Classic Rock' },
      { stationId: 1, programming: 'Adult Contemporary' },
      { stationId: 13, programming: 'Top 40' },
      { stationId: 8, programming: 'News' },
      { stationId: 11, programming: 'Spanish' },
      { stationId: 5, programming: 'Country' },
      { stationId: 5, programming: 'Country' },
      { stationId: 6, programming: 'Hard Rock' },
      { stationId: 9, programming: 'NPR' },
      { stationId: 4, programming: 'Classical' }
    ])
  },
  down: (queryInterface) => {
    queryInterface.bulkDelete('programmings')
  }
}