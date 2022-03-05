const Sequelize = require('sequelize')
const StationsModel = require('./stations')
const ProgrammingModel = require('./programming')


const Id = StationsModel(connection, Sequelize)
const Programming = ProgrammingModel(connection, Sequelize)

Programming.hasMany(Ids)
Id.belongsTo(Stations)


module.exports = { Id, Programming }
