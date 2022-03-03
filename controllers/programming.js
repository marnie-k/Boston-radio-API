const express = require('express')
const models = require('../programming')
const express = require('express')
const models = require('../markets')

const getAllMarkets = async (request, response) => {
  const authors = await models.markets.findAll()

  return response.send(markets)
}
const getMarketByName = async (request, response) => {
  /*
    const { identifier } = request.params

  const author = await models.markets.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { nameLast: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })
*/
  return market
    ? response.send(market)
    : response.sendStatus(404)
}

const getMarketById = () => {

}

module.exports = { getAllMarkets, 
                getMarketByName, 
                getMarketById }

const getProgrammingById = () => {

}

const getProgrammingByName = () => {

}

module.exports = { getProgrammingById,
                getProgrammingByName }
