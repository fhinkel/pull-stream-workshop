// Logging sink

module.exports = function (cb) {
  return function writeDataToConsoleSink(read) {
    //your pull-stream reader...
    read(null, function next (end, data) {
      if(end) {
        return cb();
      } else {
        console.log(data);
        read(null, next);
      }

    })
  }
}

///Write a function that takes a callback, and returns a function that is
// passed a read function, and then calls it with a callback cb(end, data)
// and if end is truthy then stop.
//
// Otherwise, print out data with console.log(data), and then read again.