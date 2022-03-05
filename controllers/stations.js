const { response } = require('express')
const express = require('express')
const models = require('./models/stations')

const getAllStations = async (request, response) => {
    try{
        const stationData = await models.stations.findAll()
        return response.send(stationData)
        } catch(e) {
            console.log(e)
        }
        return response.send('Error')
    }
/*
const getStationByCallLetters = async (request, response) => {
    const { slug } = request.params
try{
    const foundCallLtr = await models.stations.findOne({where: {slug}})
    
    return foundCallLtr 

    ? response.send(foundCallLtr) 
    : response.sendStatus(404)
  } catch(e) {
    console.log(e)
}
  return response.send('Error')
}

const getStationByFrequency  = async (request, response) => {
    const { slug } = request.params
    try{
        const foundCallLtr = await models.stations.findOne({where: {slug}})
        
        return foundCallLtr 
    
        ? response.send(foundCallLtr) 
        : response.sendStatus(404)
      } catch(e) {
        console.log(e)
    }
      return response.send('Error')
    }
const getStationById  = async (request, response) => {
    const { slug } = request.params
    try{
        const foundCallLtr = await models.stations.findOne({where: {slug}})
        
        return foundCallLtr 
    
        ? response.send(foundCallLtr) 
        : response.sendStatus(404)
      } catch(e) {
        console.log(e)
    }
      return response.send('Error')
    }

  const saveNewStation = async (request, response) => {
    const { frequency, callLetters } = request.body
  
    if (!frequency || !callLetters || !market ||!programming) {
      return response.status(400).send('The following fields are required: frequency, callLetters, market, programming')
    }
  
    const newStation = await models.???.create({ **** })
  
    return response.status(201).send(newStation)
  }
*/
module.exports = { getAllStations, 
                    getStationByCallLetters,
                    getStationByFrequency,
                    getStationById,
                    saveNewStation }