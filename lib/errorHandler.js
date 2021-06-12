'use strict'

function errorHandler(error) {
  console.error(error);
  throw new Error('Operation Failed of server')
}

module.exports = errorHandler