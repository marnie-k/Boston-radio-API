const models = require('../models')

const getAllProgramming = async (request, response) => {
  const programs = await models.Programming.findAll({
    attributes: ['id', 'programming']
  })

  return response.send(programs)
}
const getProgrammingsById = async (request, response) => {
  const { id } = request.params

  const programIds = await models.Programming.findOne({
    where: { id },
    attributes: ['id', 'programming']
  })

  return programIds
    ? response.send(programIds)
    : response.sendStatus(404)
}

module.exports = {
  getAllProgramming,
  getProgrammingsById
}