var path = require("path");

var devConfig = {
  entry: ['./src1/index.js'],
  output: {
    path: path.join(__dirname, 'src2/_gen'),
    filename: 'bundle.js'
  }
};

// TODO: implement
var prodConfig = devConfig;

module.exports = process.env.NODE_ENV === 'production' 
  ? prodConfig
  : devConfig;
