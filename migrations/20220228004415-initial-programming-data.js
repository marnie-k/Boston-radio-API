'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('programming',  [{
      programming: 'Adult Contemporary'},
      {programming: 'Alternative'},
      {programming: 'Classic Rock'},
      {programming: 'Classical'},
      {programming: 'Country'},
      {programming: 'Hard Rock'},
      {programming: 'Hip Hop'},
      {programming: 'News'},
      {programming: 'NPR'},
      {programming: 'Soft Rock'},
      {programming: 'Spanish'},
      {programming: 'Sports'},
      {programming: 'Top 40'},
      {programming: 'Variety'}
      ])
    },
 async down(queryInterface) {
  await queryInterface.bulkDelete('programming')
}
};
