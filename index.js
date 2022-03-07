const express = require('express')
const { getAllStations, getStationById } = require('./controllers/stations')
const { getAllProgramming }  = require('./controllers/programmings')
const error = require('./controllers/error')
// const getAllProgramming = require('./controllers/programming')

const app = express()

app.get('/stations', getAllStations)

app.get('/programmings', getAllProgramming)


// router.get('/:id', getSpecificContactText)
app.get('/stations/:id', getStationById)

app.all('*', error)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337')
})
