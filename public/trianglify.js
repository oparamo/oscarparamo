// Source: https://github.com/qrohlf/trianglify/blob/master/examples/save-as-png.js

// Basic command-line example
// Usage: node trianglify.js filename.png
var fs = require('fs');
var Trianglify = require('trianglify');

if (process.argv.length < 3) {
  console.log('Please specify a filename');
  console.log('Usage: node trianglify.js filename.png');
  return;
}

// Generate a pattern and then grab the PNG data uri
var pngURI = Trianglify({
  cell_size: 55,
  variance: 1,
  x_colors: ['#e09b7b', '#c44e6b', '#9d284d', '#6f266a', '#5e4489', '#4b2384'],
  y_colors: 'match_x',
  palette: Trianglify.colorbrewer,
  color_space: 'lab',
  color_function: false,
  stroke_width: 1.51,
  width: 1920,
  height: 350,
  seed: 'fox'
}).png();

// Strip off the uri part of the data uri, leaving the data
var data = pngURI.substr(pngURI.indexOf('base64') + 7);

// Decode the base64 encoded blob into a buffer
var buffer = new Buffer(data, 'base64');

// Save the buffer to a file
fs.writeFileSync(process.argv[2], buffer);
