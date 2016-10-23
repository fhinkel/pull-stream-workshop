var sink = require('./ex1.js');
var source = require('./ex2.js');


function finalAction() {
  console.log('All done my friends.')
}

var logger = sink(finalAction);

var a = [1,1,2,3,5,8,13];
var i = 0;

function arraySource(err, next) {
  if (i === a.length) {
    next(true);
  } else {
    next(null, a[i++]);
  }
}

// logger(arraySource);

var read2  = source([2,4,6,8,10]);

// logger(read2);

var randomSource = require('../helpers/random')(10);

logger(randomSource)