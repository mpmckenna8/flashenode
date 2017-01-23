var imagemagick = require('imagemagick-native');
var fs = require('fs')
var nb = require('../index.js');
var file = "../stary.jpeg"
nb.hostname = 'ft.noise'
var caption = require('caption')

var imgurl = process.argv[2] || "https://noisebridge.net/images/thumb/b/b0/Noisebridge_Reboot_logo.png/600px-Noisebridge_Reboot_logo.png"

var captiontext = process.argv[3] || "hack;)"

caption.url(imgurl,{
  caption : captiontext,
  // uncomment outputFile if you want to make a file.
  //outputFile : "sky.jpg"
  }, function(err,captionedImage){
  // err will contain an Error object if there was an error
  // otherwise, captionedImage will be a path to a file.
  console.log(err)
    var srcData = fs.readFileSync(captionedImage);

    var content = imagemagick.convert({
      srcData: srcData,
      width: 45,
      height: 35,
      format: 'ppm'
    })
    //nb.init()
    nb.data= content;

    var footer = new Buffer(nb.footerString)
    var totlen = footer.length + content.length;

    var allcon = Buffer.concat([content, footer], totlen);

    nb.data = allcon;


    nb.show()

  })
