var imagemagick = require('imagemagick-native');
var fs = require('fs')
var nb = require('../index.js');

nb.hostname = 'localhost'
// so it looks like you have to break the gif down on the commandline with convert command:
// convert doggy.gif split/doo.jpeg

var fileindex = 0;
var fimax = 23;

var gifdir = './split/doo-'

var buffers = [];


for(i =0; i<fimax; i++){
  var srcData = fs.readFileSync(gifdir + i + ".jpeg");

  var buff = imagemagick.convert({
    srcData: srcData,
    width: 45,
    height: 35,
    format: 'ppm',
    coalesce: true
  //  dstPath: './breakdown'
  })

  buffers.push(buff);


}

function showfile(fi){

/*
    var srcData = fs.readFileSync(fi + fileindex + '.jpeg');

    console.log('should be sending', fi)

    var content = imagemagick.convert({
      srcData: srcData,
      width: 45,
      height: 35,
      format: 'ppm',
      coalesce: true
    //  dstPath: './breakdown'
    })
    //nb.init()
    //fs.writeFileSync('outer.png', content)

    imagemagick.identify({

        srcData: content
        // options
    }, function (err, result) {
        // check err, use result
        console.log(err)
        console.log(result)
    });
    */

    console.log('fiindex', fileindex)
    fileindex = fileindex+1;
    if(fileindex >= fimax){

      fileindex= 0;
    }

  var content = buffers[fileindex]
    const footer = new Buffer('\n0\n0\n' + "14" + '\n')
    var totlen = footer.length + content.length;

    var allcon = Buffer.concat([content, footer], totlen)

    nb.data = allcon;
    nb.show()
}

setInterval(showfile, 100, './split/doo-' )
