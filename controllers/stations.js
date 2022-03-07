const models = require('../models')

const getAllStations = async (request, response) => {
  const stations = await models.Stations.findAll({
    attributes: ['id', 'frequency', 'callLetters', 'market']
  })

  return response.send(stations)
}

const getStationByCallLetters = async (request, response) => {
  const { callLetters } = request.params

  const matchedStation = await models.Stations.findOne({where: { callLetters }})

  return matchedStation
    ? response.send(matchedStation)
    : response.sendStatus(404)
}

module.exports = {
  getAllStations,
  getStationByCallLetters
}

