const programming = (connection, Sequelize) => connection.define('programming', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    programming: { type: Sequelize.STRING, allowNull: false },
    }, { paranoid: true })
  
  module.exports = programming
  