'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('markets',  [{
      market:'College'},
      { market: 'Commercial'}
      ])
    },
 async down(queryInterface) {
  await queryInterface.bulkDelete('markets')
}
};