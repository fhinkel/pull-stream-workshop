var through = require('./ex3.js')

function my_map (i) {
  return i*2;
}
// takes source, returns source
var through_stream = through(my_map);

var sink = require('./ex1.js');
var source = require('./ex2.js');


function finalAction() {
  console.log('That\' all.')
}

var logger = sink(finalAction);

var randomSource = require('../helpers/random')(10);


var a = [1,1,2,3,5,8,13];
var i = 0;

function arraySource(err, next) {
  if (i === a.length) {
    next(true);
  } else {
    next(null, a[i++]);
  }
}

console.log("Manual array source:")
logger(arraySource);
console.log("Manual array source with through stream:")

logger(through_stream(arraySource));


console.log("Array source from ex2:")
logger(source(a));
console.log("Array source from ex2 with through stream:")
logger(through_stream(source(a)));

var pull = require('../ex4')
console.log("With pull")
pull(source(a), through_stream, logger)
pull(source(a), through_stream, through_stream, logger)
