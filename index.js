const express = require('express')
const app = express()


app.set('view engine', 'pug')
app.use(express.static('public'))

/*
const marketRoutes = require('./routes/marketRoutes')
const programMarketRoutes = require('./routes/programMarketRoutes')
const programmingRoutes = require('./routes/programmingRoutes')
const stationRoutes = require('./routes/stationRoutes')

/*
app.get('/stations', getStationByCallLetters)

app.get('/stattions', getStatyionBySlug)

app.get ('/stations', getStationByFreq)

app.get ('/stations', getStationsByProgramming)

app.get('/stations', getStationBymarket)

app.post('*', addNewStation)
*/

app.all('*', (request, response)=> {
    return response.status(404).send('Page not found')

})
app.listen(1337, () => {
    console.log('Listening on port 1337....') // eslint-disable-line no-console
})

