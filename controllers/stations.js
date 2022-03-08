const models = require('../models/stations')


const getAllStations = async (request, response) => {
  try {
    const stations = await models.Stations.findAll({
      attributes: ['id', 'frequency', 'callLetters', 'market', 'programming']
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
      attributes: ['id', 'frequency', 'callLetters', 'market', 'programming']
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

const saveNewStation = async(request, response) => {
  const { id, frequency, callLetters, market, programming } = request.body

  if (!id || !frequency || !callLetters || !market || !programming) {
    return response.status(400).send('The following fields are required: id, frequency, callLetters, market, programming')
  }
  const newStation = await models.stations.create({ id, frequency, callLetters, market, programming })

  stations.push(newStation)

  return response.status(201).send(newStation)
}

module.exports = {
  getAllStations,
  getStationById,
  getStationByCallLetters,
  saveNewStation
}
