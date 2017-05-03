const assert = require('assert');
var flaschen = require('../index.js');

describe('Flashen node main object', function() {
  describe('default props should be: ', function() {
    it('Default property values are correct', function() {
      assert.equal('ft.noise', flaschen.hostname);
      assert.equal(35, flaschen.height);

    });
  });
});


describe('Header and footers constructed propertly', function() {
  describe('default props should be: ', function() {
    it('header and footers look good', function() {
      assert.equal("P6\n" + flaschen.width + " " + flaschen.height + "\n" + "255\n", flaschen.headerString());
      assert.equal('\n0\n0\n' + flaschen.layer + '\n', flaschen.footerString());
    });
  });
});
