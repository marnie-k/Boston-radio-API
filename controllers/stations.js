const models = require('../models')


const getAllStations = async (request, response) => {
  try {
    const stations = await models.Stations.findAll({
      attributes: ['id', 'frequency', 'callLetters', 'market']
    })

    return response.send(stations)
  } catch (error) {
    return response.status(404)
  }
}

const getStationById = async (request, response) => {
  try {
    const { id } = request.params

    const stationNum = await models.Stations.findOne({
      where: { id },
      attributes: ['id', 'frequency', 'callLetters', 'market']
    })

    return stationNum
      ? response.send(stationNum)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(404).send('Unable to get station')
  }
}

module.exports = {
  getAllStations,
  getStationById
}
