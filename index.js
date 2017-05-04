const dgram = require('dgram');

var startBuff = Buffer.alloc(8000)

// our thing is really just a big object with lots of props
module.exports = {
  port: 1337,
  hostname: 'ft.noise',
  height: 35,
  width: 45,
  layer: 11,
  // a function which will return a nice headerstring based on the currently set
  // width and height
  headerString: function(){
    return "P6\n" + this.width + " " +  this.height + "\n" + "255\n";
  },
  // function which returns a footer string using the layer property
  footerString: function(){
      return '\n0\n0\n' + this.layer + '\n';
    },

  footbuf: function(){
    return new Buffer(footerString())
  },
  writeHeader: function(){
    this.data.write(this.headerString());
  },
  headlen: function(){
    return this.headerString().length;
  },
  data: startBuff,
  show: function(){
    const client = dgram.createSocket('udp4');
    // decided to just have the data assigned when this function is called
  //  this.data.write(this.footerString, footoff)
    console.log('our data', this.data);

    client.send(this.data, this.port, this.hostname, function (err, bytes) {
      if (err) console.log(err);
        console.log('UDP message sent to ' + this.hostname + ':' + this.port);
        console.log(bytes +  " long")

      client.close()
    })

  },
  init: function(){
    //this.data = new Buffer(  this.headlen + this.height * this.width* 3 );
    this.writeHeader();

  },

  // set should take the x and y of the pixel and the color as 3 value array
  // set's the bits in the buffer to be sent to the given color array
  set: function(x,y, color){

    var x = x;
    var y = y;

    var offset = (x + y * this.width) * 3 + this.headerString().length;

  //  console.log(offset)
    this.data[offset] = color[0];
    this.data[offset+1 ] = color[1];
    this.data[offset+2 ] = color[2];

  }


}
