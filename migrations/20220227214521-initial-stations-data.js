'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('stations', [{
      frequency: '88.1', callLetters: 'WMBR'},
      {frequency: '88.9', callLetters: 'WERS'},
      {frequency: '90.3', callLetters: 'WZBC'},
      {frequency: '90.9', callLetters: 'WBUR'},
      {frequency: '91.5', callLetters: 'WMFO'},
      {frequency: '91.9', callLetters: 'WUMB'},
      {frequency: '95.3', callLetters: 'WHRB'},
      {frequency: '92.5', callLetters: 'WXRV'},
      {frequency: '92.9', callLetters: 'WBOS'},
      {frequency: '93.7', callLetters: 'WEEI'},
      {frequency: '105.7', callLetters: 'WROR'},
      {frequency: '106.7', callLetters: 'WMJX'},
      {frequency: '96.9', callLetters: 'WBQT'},
      {frequency: '100.7', callLetters: 'WZLX'},
      {frequency: '104.1', callLetters: 'WWBX'},
      {frequency: '94.5', callLetters: 'WJMN'},
      {frequency: '98.5', callLetters: 'WBZ'},
      {frequency: '97.7', callLetters: 'WZRM'},
      {frequency: '101.7', callLetters: 'WBWL'},
      {frequency: '102.5', callLetters: 'WKLB'},
      {frequency: '107.3', callLetters: 'WAAF'},
      {frequency: '89.7', callLetters: 'WGBH'},
      {frequency: '99.5', callLetters: 'WCRB'},
        ])
      },
   async down(queryInterface) {
    await queryInterface.bulkDelete('stations')
  }
}
