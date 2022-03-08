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

const getStationByCallLetters = async (request, response) => {
  const { identifier } = request.params
  const station = await models.Stations.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { callLetters: { [models.Sequelize.Op.like]: `%${identifier}%` }, },
        { market: { [models.Sequelize.Op.like]: `%${identifier}%` }, },
      ]
    },
    include: [{ model: models.Programming }]
  })
  return station
    ? response.send(station)
    : response.sendStatus(404)
}

/*
const getStationByCallLetter = async (request, response) => {
  try {
    const { callLetter } = request.params

    const stationCallLetter = await models.Stations.findOne({
      where: { callLetter },
      attributes: ['id', 'frequency', 'callLetters', 'market']
    })

    return stationCallLetter
      ? response.send(stationCallLetter)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(404).send('Unable to get station')
  }
}
*/
module.exports = {
  getAllStations,
  getStationById,
  getStationByCallLetters
}
