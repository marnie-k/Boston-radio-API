
const models = require('../models')

const getAllStations =  async(request, response) => {
    const stations = await models.StationId.findAll()

    return response.send(stations)
}

module.exports = getAllStations

