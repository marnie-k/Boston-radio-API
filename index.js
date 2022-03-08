const express = require('express')
const { getAllStations, getStationById, getStationByCallLetters } = require('./controllers/stations')
const error = require('./controllers/error')

const app = express()

app.get('/stations', getAllStations)
app.get('/stations/:id', getStationById)
app.get('/stations/:identifier', getStationByCallLetters)


// app.post()
// app.post('/', bodyParser.json(), saveNewHero)
app.all('*', error)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337')
})

