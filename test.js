var imagemagick = require('imagemagick-native');
var fs = require('fs')
var nb = require('./index.js');
var file = "./elephant.jpeg"
nb.hostname = 'localhost'
const footer = new Buffer(nb.footerString)

var srcData = fs.readFileSync(file);

nb.init();
var content = imagemagick.convert({
  srcData: srcData,
  width: 45,
  height: 35,
  format: 'ppm'
})
//nb.init()
var totlen = footer.length + content.length;

var allcon = Buffer.concat([content, footer], totlen)

nb.data = allcon;
nb.show()
