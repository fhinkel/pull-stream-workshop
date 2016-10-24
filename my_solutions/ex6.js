var fs = require('fs')
var defer = require('pull-defer')
var pull = require('pull-stream')

// this is a source, it creates data
module.exports = function ls(dir) {
  var source = defer.source()
  fs.readdir(dir, function(err, files) {
    if (err) {
      source.resolve(pull.error(err))
    } else {
      source.resolve(pull.values(files))
    }
  })

  return source
}
