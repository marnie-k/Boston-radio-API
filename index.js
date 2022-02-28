const express = require('express')
const app = express()
/*
const marketRoutes = require('./routes/marketRoutes')
const programMarketRoutes = require('./routes/programMarketRoutes')
const programmingRoutes = require('./routes/programmingRoutes')
const stationRoutes = require('./routes/stationRoutes')
*/
app.all('*', (request, response) => {
    response.sendStatus(404)
})
app.listen(1337, () => {
    console.log('Listening on port 1337....') // eslint-disable-line no-console
})

