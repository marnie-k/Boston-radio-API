const express = require('express')

const getAllProgramming = async (request, response) => {
  const authors = await models.programming.findAll()

  return response.send(programming)
}

module.exports = getAllProgramming
