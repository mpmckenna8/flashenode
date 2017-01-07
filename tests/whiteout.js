// simple example to make the flaschen taschen like a flashlight

var nb = require('../index.js');

//nb.init();

var datb = new Buffer( nb.headerString().length+ nb.footerString.length + nb.height* nb.width*3)
nb.data = datb;

datb.write(nb.headerString(), 0);
var starfoo = datb.length - nb.footerString.length
datb.write(nb.footerString, starfoo);


var color = [255, 255, 255];
for(i=0; i < nb.width; i++){
  for(j=0; j < nb.height; j++){
    nb.set(i, j, color)
  }
}

nb.show();
