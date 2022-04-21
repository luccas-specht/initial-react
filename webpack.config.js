/* 
webpack: bundle for styles, javascript, images, fonts and other files.
how it works:
it takes the code from the src folder and bundles it into a single file called bundle.js
.js -> .hbs -> .scss -> .html -> .png -> .jpg -> .svg ==> bundle WEBPACK ==> .js .css .jpg .png
*/

// entry: initial file to start bundling

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
