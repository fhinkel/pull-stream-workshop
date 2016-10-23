// source, the source is the array

module.exports = function (array) {
  var i = 0;
  return function read (abort, cb) {
    if (abort) {
      cb(abort);
    }
    else if (i === array.length) {
      cb(true);
    } else {
      cb(null, array[i++]);
    }
  }
}

// write a function that takes an array, and returns
// an async function named read
// that calls back each item in the array in turn.