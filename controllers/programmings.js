const models = require('../models')

const getAllProgramming = async (request, response) => {
  const allProgramming = await models.Programming.findAll({
    attributes: ['id', 'programming']
  })

  return response.send(allProgramming)

}

const getProgrammingById = async (request, response) => {
  const authors = await models.programming.findAll()

}


module.exports = { getAllProgramming,
  getProgrammingById }

