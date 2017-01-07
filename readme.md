# Node Flaschen Taschen thing

Trying to make a simple thing for people to send stuff to the big light thing at
NB.

see: https://github.com/hzeller/flaschen-taschen

and come see it and interact in person.

Elephant image from https://pixabay.com/en/three-d-3d-abstract-art-elephant-1781590/

## Usage:

For some examples of how to use this module look in the tests directory, I think
the tests/singular.js file should even run if you don't have imagemagick
installed already.

Basically it gives you an object and you create a datagram as a Buffer as the
data attribute and then send it to the flaschen-taschen.

To see if everything works you should just to install this and then run
copy one of the example scripts into your directory and hack on it.

So to just send a simple image:

'''

var nb = require('flaschenode');
var imagemagick = require('imagemagick-native');
var fs = require('fs')
var file = ".node_modules/flaschenode/elephant.jpeg"
//nb.hostname = 'localhost'
const footer = new Buffer(nb.footerString)

var srcData = fs.readFileSync(file);

var content = imagemagick.convert({
  srcData: srcData,
  width: 45,
  height: 35,
  format: 'ppm'
})

var totlen = footer.length + content.length;

var allcon = Buffer.concat([content, footer], totlen)

nb.data = allcon;

// Send the data to the flaschen-taschen
nb.show()

'''
