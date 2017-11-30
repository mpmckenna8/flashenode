// real simple example not really a test of where if it works it sends an image
// to the flashentashen
// to run this requires imagemagick-native to be installed

var flaschen = require('../index.js');
var imagemagick = require('imagemagick-native');
var fs = require('fs')
var file = "./images/elephant.jpeg" //elephant.jpeg"

//flaschen.hostname = 'localhost'
// uncomment to sent to the highest layer
 flaschen.layer = 14

const footer = Buffer.from(flaschen.footerString())

// read the picture into a buffer.
var srcData = fs.readFileSync(file);

// convert the image to a ppm for the flaschen-taschen
var content = imagemagick.convert({
  srcData: srcData,
  width: 45,
  height: 35,
  format: 'ppm'
})

var totlen = footer.length + content.length;
// concatenate the image and the footer
var allcon = Buffer.concat([content, footer], totlen)

flaschen.data = allcon;

// Send the data to the flaschen-taschen
flaschen.show()
