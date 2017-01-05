var imagemagick = require('imagemagick-native');
var fs = require('fs')
var nb = require('./index.js');
var file = "./stary.jpeg"
nb.hostname = 'localhost'


var srcData = fs.readFileSync(file);


var content = imagemagick.convert({
  srcData: srcData,
  width: 45,
  height: 35,
  format: 'ppm'
})
//nb.init()
nb.data= content;
nb.show()
