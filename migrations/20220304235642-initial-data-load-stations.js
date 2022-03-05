'use strict';

module.exports = {
  up: async(queryInterface,Sequelize) => {
    await queryInterface.bulkInsert('stations', [{
      frequency: '88.1', callLetters: 'WMBR', market: 'college'},
      {frequency: '88.9', callLetters: 'WERS', market: 'college'},
      {frequency: '90.3', callLetters: 'WZBC', market: 'college'},
      {frequency: '90.9', callLetters: 'WBUR', market: 'college'},
      {frequency: '91.5', callLetters: 'WMFO', market: 'college'},
      {frequency: '91.9', callLetters: 'WUMB', market: 'college'},
      {frequency: '95.3', callLetters: 'WHRB', market: 'college'},
      {frequency: '92.5', callLetters: 'WXRV', market: 'commercial'},
      {frequency: '92.9', callLetters: 'WBOS', market: 'commercial'},
      {frequency: '93.7', callLetters: 'WEEI', market: 'commercial'},
      {frequency: '105.7', callLetters: 'WROR', market: 'commercial'},
      {frequency: '106.7', callLetters: 'WMJX', market: 'commercial'},
      {frequency: '96.9', callLetters: 'WBQT', market: 'commercial'},
      {frequency: '100.7', callLetters: 'WZLX', market: 'commercial'},
      {frequency: '104.1', callLetters: 'WWBX', market: 'commercial'},
      {frequency: '94.5', callLetters: 'WJMN', market: 'commercial'},
      {frequency: '98.5', callLetters: 'WBZ', market: 'commercial'},
      {frequency: '97.7', callLetters: 'WZRM', market: 'commercial'},
      {frequency: '101.7', callLetters: 'WBWL', market: 'commercial'},
      {frequency: '102.5', callLetters: 'WKLB', market: 'commercial'},
      {frequency: '107.3', callLetters: 'WAAF', market: 'commercial'},
      {frequency: '89.7', callLetters: 'WGBH', market: 'public'},
      {frequency: '99.5', callLetters: 'WCRB', market: 'commercial'}
        ])
    await queryInterface.bulkInsert('programming', [{
      stationsId: 1, id: 2},
      {stationsId: 2, id: 2},
      {stationsId: 3, id: 2},
      {stationsId: 4, id: 9},
      {stationsId: 5, id: 2},
      {stationsId: 6, id: 2},
      {stationsId: 7, id: 2},
      {stationsId: 8, id: 2},
      {stationsId: 9, id: 3},
      {stationsId: 10, id: 12},
      {stationsId: 11, id: 3},
      {stationsId: 12, id: 10},
      {stationsId: 13, id: 7},
      {stationsId: 14, id: 3},
      {stationsId: 15, id: 1},
      {stationsId: 16, id: 13},
      {stationsId: 17, id: 8},
      {stationsId: 18, id: 11},
      {stationsId: 19, id: 5},
      {stationsId: 20, id: 5},
      {stationsId: 21, id: 6},
      {stationsId: 22, id: 9},
      {stationsId: 23, id: 4}
    ])
  },

  down: (queryInterface, Sequelize) => {
     queryInterface.bulkDelete('stations','programming')
  }
};
