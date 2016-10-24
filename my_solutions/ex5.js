// write a through stream that reads N items,
// then calls read(true, cb) instead, terminating the stream.

module.exports = function (n) {
  return function (read) {
    return function (abort, cb) {
      if (n--) {
        read(abort, cb)
      } else {
        read(true, cb)
      }
    }
  }
}