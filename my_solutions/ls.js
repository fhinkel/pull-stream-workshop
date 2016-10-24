var ls = require('./ex6')
var sink = require('./ex1')
var pull = require('./ex4')
var through = require('./ex3.js')


function finalAction() {
  console.log('That is all the files.')
}

var logger = sink(finalAction);

var map = through(function (s) {
  // Process the ls output.
  return 'kitty_' + s;
});


pull(ls(__dirname), map, logger)