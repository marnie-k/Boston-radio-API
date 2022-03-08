const models = require('../models')


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

/*
cconst saveNewHero = (request, response) => {
  const { name, realname, firstappearance, slug } = request.body

  if (!name || !realname || !firstappearance || !slug) {
    return response.status(400).send('The following fields are required: name, realname, firstappearance, slug')
  }

  const newHero = { name, realname, firstappearance, slug }

  heroes.push(newHero)

  return response.status(201).send(newHero)
}

*/
module.exports = {
  getAllStations,
  getStationById,
  getStationByCallLetters
}
