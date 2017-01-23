var imagemagick = require('imagemagick-native');
var fs = require('fs')
var nb = require('../index.js');
var file = "../stary.jpeg"
nb.hostname = 'localhost'
var caption = require('caption')

caption.path("/Users/matthewmckenna/Documents/hub/flashenode/stary.jpeg",{
  caption : "hack;)",
  outputFile : "sky.jpg"
  }, function(err,captionedImage){
  // err will contain an Error object if there was an error
  // otherwise, captionedImage will be a path to a file.
    var srcData = fs.readFileSync(captionedImage);


    var content = imagemagick.convert({
      srcData: srcData,
      width: 45,
      height: 35,
      format: 'ppm'
    })
    //nb.init()
    nb.data= content;
    nb.show()

  })
