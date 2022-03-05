const programming = (connection, Sequelize, stations) => connection.define('programming', {
  stationId: { type: Sequelize.INTEGER, references: { model: stations, key: 'id' } },
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    programming: { type: Sequelize.STRING, allowNull: false },
    }, { paranoid: true })
  
  module.exports = programming
  