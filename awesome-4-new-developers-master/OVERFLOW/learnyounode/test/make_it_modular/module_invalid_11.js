const fs = require('fs')
module.exports = function (directory, filter, callback) {
  fs.readdir(directory, function (error, list) {
    if (error) {
      return callback(error)
    }

    callback(new Error('fancy'))
  })
}
