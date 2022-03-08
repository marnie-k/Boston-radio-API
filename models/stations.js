const Stations = (connection, Sequelize) => connection.define('stations', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  frequency: { type: Sequelize.STRING, allowNull: false },
  callLetters: { type: Sequelize.STRING, allowNull: false },
  market: { type: Sequelize.STRING, allowNull: false },
  programming: { type: Sequelize.STRING, allowNull: false }

}, { paranoid: true })

module.exports = Stations
