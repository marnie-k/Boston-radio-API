'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      await queryInterface.createTable('stations', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        frequency: { type: Sequelize.INTEGER, allowNull: false },
        callLetters: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
        deletedAt: { type: Sequelize.DATE, },
      })
      await queryInterface.createTable('programming', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        programming: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
        deletedAt: { type: Sequelize.DATE, },
     })
      await queryInterface.createTable('markets', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        market: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
        deletedAt: { type: Sequelize.DATE, },
      })
      await queryInterface.createTable('programMarket', {
        programmingId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, references: { model: 'programming', key: 'id' },
        marketsId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, references: { model: 'markets', key: 'id' },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
        deletedAt: { type: Sequelize.DATE, },
      })
    },
  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('stations','programming','markets','programMarket')
  }
};
