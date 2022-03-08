const express = require('express')
const { getAllStations, getStationById } = require('./controllers/stations')
const { getAllProgramming, getProgrammingsById, getProgrammingByName } = require('./controllers/programmings')
const error = require('./controllers/error')

const app = express()
// all staion routes are working
app.get('/stations', getAllStations)
app.get('/stations/:id', getStationById)


app.get('/programmings', getAllProgramming)
app.get('/programmings/:id', getProgrammingsById)
// app.get('/programmings/:name', getProgrammingByName)

app.all('*', error)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337')
})

