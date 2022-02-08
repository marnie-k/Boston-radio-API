const programMarket = (connection, Sequelize) => connection.define('programMarket', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    programmingId: { type: Sequelize.INTEGER, allowNull: false },
    marketsId: { type: Sequelize.INTEGER, allowNull: false }
  }, { paranoid: true })
  
  module.exports = programMarket