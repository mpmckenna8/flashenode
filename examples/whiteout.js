// simple example to make the flaschen taschen like a flashlight

var flaschen = require('../index.js');

// uncomment if sending to local server
//flaschen.hostname = "localhost"
flaschen.init();


flaschen.layer = 15;
var datb = Buffer.alloc( flaschen.headerString().length+ flaschen.footerString().length + flaschen.height* flaschen.width*3)

const footer = Buffer.from(flaschen.footerString())


datb.write(flaschen.headerString(), 0);
var starfoo = datb.length - flaschen.footerString().length
datb.write(flaschen.footerString(), starfoo);

flaschen.data = datb;

var color = [255, 55, 255];

for(i=0; i < flaschen.width; i++){
  for(j=0; j < flaschen.height; j++){
    flaschen.set(i, j, color)
  }
}

flaschen.show();
