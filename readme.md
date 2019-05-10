# Node Flaschen Taschen thing

Trying to make a simple thing for people to send stuff to the big light thing at
Noisebridge.

see: https://github.com/hzeller/flaschen-taschen

and come see it and interact in person.

Elephant image from https://pixabay.com/en/three-d-3d-abstract-art-elephant-1781590/

## Usage:

For some examples of how to use this module look in the tests directory, I think

But i don't think npm will let you install the package without [imagemagick](https://www.imagemagick.org/script/index.php) so
make sure you have that installed.

So you can:

  npm install flaschenode

And if there are no errors you should be ready to start interacting with the
flaschen-taschen.

Basically it gives you an object and you create a datagram as a Buffer as the
data attribute and then send it to the flaschen-taschen.

To see if everything works you should just to install this and then run
copy one of the example scripts into your directory and hack on it.

So to just send a simple image:

```javascript

// simple example to make all the pixels on the flaschen taschen to light up white (some might not have all rg and b working tho)

var flaschen = require('flashenode');

// uncomment if sending to local server
//flaschen.hostname = "localhost"
flaschen.initBuffer();


var color = [255, 255, 255];

for(i=0; i < flaschen.width; i++){
  for(j=0; j < flaschen.height; j++){
    flaschen.set(i, j, color)
  }
}

flaschen.show();


```
