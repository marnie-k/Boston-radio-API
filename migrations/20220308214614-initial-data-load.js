'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stations', [{
      frequency: '88.1', callLetters: 'WMBR', market: 'college', programming: 'Alternative' },
      {frequency: '88.9', callLetters: 'WERS', market: 'college', programming: 'Alternative' },
      {frequency: '90.3', callLetters: 'WZBC', market: 'college', programming: 'Alternative' },
      {frequency: '90.9', callLetters: 'WBUR', market: 'college', programming: 'NPR' },
      {frequency: '91.5', callLetters: 'WMFO', market: 'college', programming: 'Alternative' },
      {frequency: '91.9', callLetters: 'WUMB', market: 'college', programming: 'Alternative' },
      {frequency: '95.3', callLetters: 'WHRB', market: 'college', programming: 'Alternative' },
      {frequency: '92.5', callLetters: 'WXRV', market: 'commercial', programming: 'Alternative' },
      {frequency: '92.9', callLetters: 'WBOS', market: 'commercial', programming: 'Classic Rock' },
      {frequency: '93.7', callLetters: 'WEEI', market: 'commercial', programming: 'Sports' },
      {frequency: '105.7', callLetters: 'WROR', market: 'commercial', programming: 'Classic Rock' },
      {frequency: '106.7', callLetters: 'WMJX', market: 'commercial', programming: 'Soft Rock' },
      {frequency: '96.9', callLetters: 'WBQT', market: 'commercial', programming: 'HipHop' },
      {frequency: '100.7', callLetters: 'WZLX', market: 'commercial', programming: 'Classic Rock' },
      {frequency: '104.1', callLetters: 'WWBX', market: 'commercial', programming: 'Adult Contemporary' },
      {frequency: '94.5', callLetters: 'WJMN', market: 'commercial', programming: 'Top 40' },
      {frequency: '98.5', callLetters: 'WBZ', market: 'commercial', programming: 'News' },
      {frequency: '97.7', callLetters: 'WZRM', market: 'commercial', programming: 'Spanish' },
      {frequency: '101.7', callLetters: 'WBWL', market: 'commercial', programming: 'Country' },
      {frequency: '102.5', callLetters: 'WKLB', market: 'commercial', programming: 'Country' },
      {frequency: '107.3', callLetters: 'WAAF', market: 'commercial', programming: 'Hard Rock' },
      {frequency: '89.7', callLetters: 'WGBH', market: 'public', programming: 'NPR' },
      {frequency: '99.5', callLetters: 'WCRB', market: 'commercial', programming: 'Classical' }
        ])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('stations')
  }
};
