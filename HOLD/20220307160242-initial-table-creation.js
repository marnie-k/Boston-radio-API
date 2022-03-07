'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stations', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      frequency: { type: Sequelize.STRING, allowNull: false },
      callLetters: { type: Sequelize.STRING, allowNull: false },
      market: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('programmings', {
      stationId: { type: Sequelize.INTEGER, references: { model: 'stations', key: 'id' } },
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      programming: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('stations', 'programming')
  }
}
