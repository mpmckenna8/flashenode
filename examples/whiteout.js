// simple example to make the flaschen taschen like a flashlight

var flaschen = require('../index.js');

// uncomment if sending to local server
//flaschen.hostname = "localhost"

flaschen.layer = 10;

var datb = new Buffer( flaschen.headerString().length+ flaschen.footerString.length + flaschen.height* flaschen.width*3)
flaschen.data = datb;

datb.write(flaschen.headerString(), 0);
var starfoo = datb.length - flaschen.footerString().length
datb.write(flaschen.footerString(), starfoo);


var color = [255, 255, 255];
for(i=0; i < flaschen.width; i++){
  for(j=0; j < flaschen.height; j++){
    flaschen.set(i, j, color)
  }
}

flaschen.show();
