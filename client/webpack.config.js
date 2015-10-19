var webpack = require('webpack');

module.exports = {
  entry: './js/entry.js',
  output: {
    filename: './js/valgorama.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ],
};
// devtool: 'source-map',
