var nb = require('../index.js');
//nb.hostname = "localhost"

nb.init();
nb.width = 25

//nb.height = 15;
//nb.width = 5;
//nb.writeHeader();
//nb.headerString;

var datb = new Buffer( nb.headerString().length+ nb.footerString().length + nb.height* nb.width*3)
nb.data = datb;

datb.write(nb.headerString(), 0);
var starfoo = datb.length - nb.footerString().length
datb.write(nb.footerString(), starfoo);

//nb.data = datb;

var color = [5, 55, 55];
for(i=0; i < nb.width; i++){
  for(j=0; j < nb.height; j++){
  //  console.log(i)
    nb.set(i, j, color);
//    var offset = (i+j * width) * 3 + nb.headerString.length;
  //  datb[offset ] = 55;
    //datb[offset+1 ] = 255;
//    datb[offset+2 ] = 00;

  }
}


//var dat = Buffer.concat([ata, footer], footer.length+ ata.length)
//nb.set(0,28, [255,0,0]);
//nb.data = ata;
colors = [[255,0,0],[0,255,0],[0,0,255]]

var xred = 0;
var yred = 0;
color = 0;


function drawpoint(){
  console.log(xred, " x, y: ", yred)
  console.log('color: ', colors[color])
  nb.set(xred, yred, colors[color]);
  (color < colors.length-1) ? ( nb.set(nb.width-1 - xred, nb.height-1 - yred, colors[color+1] )) : nb.set(nb.width - xred, nb.height - yred, colors[1] )
  xred = xred +1;
  if( xred >= nb.width) {
    xred = 0;
    yred = yred+1;
    if(yred >=nb.height){
       yred = 0;
       (color < colors.length-1) ? ( color = color + 2 ): color=0;



    }
  }

  nb.show();

}
setInterval(drawpoint, 30)
//console.log(nb.data)
nb.show();
