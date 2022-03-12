const models = require( '../models');

const getAllStations = async (request, response) => {
  try {
    const stations = await models.Stations.findAll({
      attributes: ['id ', 'frequency', 'callLetters', 'market', 'programming'],
    });

    return response.send(stations);
  } catch (error) {
    return response.status(404);
  }
};

const getStationById = async (request, response) => {
  try {
    const { id } = request.params;

    const stationNum = await models.Stations.findOne({
      where: { id },
      attributes: ['id ', 'frequency', 'callLetters', 'market', 'programming'],
    });

    return stationNum ? response.send(stationNum) : response.sendStatus(404);
  } catch (error) {
    return response.status(404).send( 'Unable to get station');
  }
};

const saveNewStation = async (request, response) => {
  const { frequency, callLetters, market, programming } = request.body;
  if (!frequency || !callLetters || !market || !programming) {
    return response
      .status(400)
      .send(
         'The following fields are required:frequency, callLetters, market, programming '
      );
  }
  const newStation = await models.Stations.create({
    frequency,
    callLetters,
    market,
    programming,
  });

  return response.status(201).send(newStation);
};

module.exports = {
  getAllStations,
  getStationById,
  saveNewStation,
};
