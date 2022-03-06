const Sequelize = require('sequelize')
const StationsModel = require('./stations')
const ProgrammingModel = require('./programming')

const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})


const Stations = StationsModel(connection, Sequelize)
const Programming = ProgrammingModel(connection, Sequelize, Stations)

Programming.hasMany(Stations)
Stations.belongsTo(Programming)

module.exports = {
  Stations,
  Programming,
  Op: Sequelize.Op
}
