const programMarket = (connection, Sequelize, programming, markets) => {
  connection.define ('programMarket', {
          programmingId: { type: Sequelize.INTEGER,  primaryKey: true}, references: { model: programming,  key: id },
          marketsId: { type: Sequelize.INTEGER, primaryKey: true}, references: { model: markets, key: id }
        },{ paranoid: true })

        module.exports = programMarket

