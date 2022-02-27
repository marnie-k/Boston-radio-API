const programMarket = (connection, Sequelize) => connection.define('programMarket', {
    programmingId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    marketsId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true  }
  }, { paranoid: true })
  
  module.exports = programMarket