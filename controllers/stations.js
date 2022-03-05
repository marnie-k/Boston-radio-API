const { response } = require('express')
const express = require('express')


const getAllStations =  (request, response) => {
    const stations =  models.stations.findAll()
}

module.exports = getAllStations

