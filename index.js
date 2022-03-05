const { response } = require('express')
const express = require('express')
const app = express()
const getAllStations = require('./controllers/stations')
const error = require('./controllers/error')
 
app.get('/', (request, response) => {
    return response.send('hello there gorgeous')
})

app.get('/stations', getAllStations)

app.all('*', error)

app.listen(1337, () => {
   console.log('Listening on port 1337')
})