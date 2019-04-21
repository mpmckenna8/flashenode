// real simple example not really a test of where if it works it sends an image
// to the flashentashen
// to run this requires imagemagick-native to be installed

var flaschen = require('../index.js');


var Jimp = require('jimp')

flaschen.initBuffer();


Jimp.read('./images/elephant.jpeg', (err, img) => {
  if (err) throw err;
  let x = 45, y=35;

  img
    .resize(45, 35) // resize
    .quality(20) // set JPEG quality
  //  .greyscale() // set greyscale
    //.write('lena-small-bw.jpg'); // save


    for( let xi = 0; xi < x; xi++) {
      for( let yi = 0; yi <y ; yi++) {

        let pixi = Jimp.intToRGBA(img.getPixelColor(xi, yi));
        flaschen.set(xi, yi, [pixi.r, pixi.g,pixi.b])
      //  console.log('pixel color ,', pixi)

        }
    }
    flaschen.show()
});
