module.exports = function pull () {
  var args = [].slice.call(arguments)

  if (args.empty()) {
    return;
  }
  var sink = args.pop();
  if (args.empty()) {
    return sink;
  }

  return sink(pull(...args));
}

Array.prototype.empty = function() {
  return this.length===0
}

//sink(map(source)) but that reads right to left,
// and we are used to left to write.

// implement a function, pull() that takes streams,
// and passes one to another.

// pull(source, map, sink)