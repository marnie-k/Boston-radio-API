const Programming = (connection, Sequelize, Stations) => connection.define('programmings', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  stationId: { type: Sequelize.INTEGER, references: { model: Stations, key: 'id' } },
  programming: { type: Sequelize.STRING, allowNull: false },
}, { paranoid: true })

module.exports = Programming

