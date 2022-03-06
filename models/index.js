const Sequelize = require('sequelize')
// const allConfigs = require('../config/sequelize')
const StationsModel = require('./stations')
const ProgrammingModel = require('./programming')
// const environment = process.env.NODE_ENV || 'development'
// const config = allConfigs[environment]
/*
const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host, dialect: 'mysql'
  })
  */
  const connection = new Sequelize('radio', 'listener', 'IamListening', {
    host: 'localhost', dialect: 'mysql'
  })
  
const StationId = StationsModel(connection, Sequelize)
const Programming = ProgrammingModel(connection, Sequelize, StationId)

Programming.hasMany(StationId)
StationId.belongsTo(Programming)

module.exports = { StationId, Programming , Op: Sequelize.Op }
