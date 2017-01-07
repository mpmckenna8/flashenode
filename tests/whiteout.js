var nb = require('./index.js');


nb.init();

var datb = new Buffer( nb.headerString().length+ nb.footerString.length + nb.height* nb.width*3)
nb.data = datb;

datb.write(nb.headerString(), 0);
var starfoo = datb.length - nb.footerString.length
datb.write(nb.footerString, starfoo);

//nb.data = datb;

var color = [255, 255, 255];
for(i=0; i < nb.width; i++){
  for(j=0; j < nb.height; j++){
  //  console.log(i)
    nb.set(i, j, color)
//    var offset = (i+j * width) * 3 + nb.headerString.length;
  //  datb[offset ] = 55;
    //datb[offset+1 ] = 255;
//    datb[offset+2 ] = 00;

  }
}

nb.show();
