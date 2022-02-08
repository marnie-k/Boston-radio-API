const express = require('express')

const { getAllStations, getBySlug  }= require('./controllers')

const app = express()

app.get('/', getAllStations)
app.get('/:slug', getBySlug)
app.all('*',erorMsg)

app.listen(1337, () => {
    console.log('Listening on port 1337....') // eslint-disable-line no-console

})
