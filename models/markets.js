const markets = (connection, Sequelize) => connection.define('markets', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    stationId: { type: Sequelize.INTEGER, allowNull: false },
    market: { type: Sequelize.STRING, allowNull: false }
}, { paranoid: true })
  
  module.exports = markets