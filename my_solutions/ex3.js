module.exports = function (map) {
  return function (read) {
    return function source (abort, cb) {
      read(abort, function next(end, data) {
        if (end) {
          cb(end)
        } else {
          cb(null, map(data));
        }
      })
    }
  }
}

//Implement a through stream that takes a map function,
// and applies it to the source stream...

// Through stream takes a source, returns a source.

