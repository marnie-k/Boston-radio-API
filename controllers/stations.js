const models = require('../models')

const getAllStations = async (request, response) => {
  const stations = await models.Stations.findAll({
    attributes: ['id', 'frequency', 'callLetters', 'market']
  })

  return response.send(stations)
}

module.exports = {
  getAllStations

}

