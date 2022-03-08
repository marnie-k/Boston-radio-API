const express = require('express')

 const error = (request, repsonse) => {
    return repsonse.status(404).send('Error - Page not found')
}

module.exports = error

