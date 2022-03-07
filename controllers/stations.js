const models = require('../models')

// getAll working 2pm Monday
const getAllStations = async (request, response) => {
  const stations = await models.Stations.findAll({
    attributes: ['id', 'frequency', 'callLetters', 'market']
  })

  return response.send(stations)
}

// still fixing 2:25 Mon
// I am getting this error msg not get.all error
const getStationById = async (request, response) => {
  try{
  const { id } = request.params

  const matchedStation = await models.Stations.findOne({where: { id }})

  return matchedStation
    ? response.send(matchedStation)
    : response.sendStatus(404)
} catch (error) {
  return response.status(500).send('Cannot get station. Please try again')
}
}

module.exports = {
  getAllStations,
  getStationById
}

