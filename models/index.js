const Sequelize = require('sequelize')
const StationsModel = require('./stations')
const ProgrammingModel = require('./programming')
const MarketsModel = require('./markets')
// const ProgramMarketModel = require('./programMarket')

const CallLetters = StationsModel(connection, Sequelize)
const Frequecies = StationsModel(connection, Sequelize)
const Markets = MarketsModel(connection, Sequelize)
const Programming = ProgrammingModel(connection, Sequelize)

Markets.hasMany(CallLetters)
Programming.hasMany(CallLatters)
CallLetters.belongsTo(Stations)

Markets.hasMany(Frequecies)
Programming.hasMany(Frequecies)
Frequecies.belongsTo(Stations)

module.exports = { Frequecy, CallLetters, Markets, Programming }
