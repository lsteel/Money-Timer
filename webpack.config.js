var config = require('config')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './client/entry.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // Telling webpack to use files that match this pattern
        loader: 'babel', // Uses the module `babel-loader`
        exclude: /node_modules/, // Don't transpile modules in the `node_modules/` directory
        include: __dirname, // Include all other files
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: `style!css?${[
          'sourceMap',
          'modules',
          'importLoaders=1',
          'localIdentName=[name]__[local]__[hash:base64:5]'
        ].join('&')}`,
        exclude: /node_modules/
      }
    ]
  }
}
