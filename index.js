const express = require('express')
const { getAllStations } = require('./controllers/stations')
const error = require('./controllers/error')

const app = express()

app.get('/stations', getAllStations)

app.all('*', error)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337')
})
