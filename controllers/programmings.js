const models = require('../models')

// getAll working 2pm Mon
const getAllProgramming = async (request, response) => {
  const allProgramming = await models.Programming.findAll({
    attributes: ['id', 'programming']
  })

  return response.send(allProgramming)

}


module.exports = { getAllProgramming,
   }

