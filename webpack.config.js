const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  watch: true,
  entry: ['./src/js/index.js', './src/assets/scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        }
      }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/assets/css/new_relic.bundle.css',
    }),
    new CopyWebpackPlugin([
      { from: './src/host-app-data.json', to: 'host-app-data.json' },
      { from: './src/index.html', to: 'index.html' }
    ]),
    new UglifyJsPlugin({
      exclude: /\/node_modules/
    })
  ]

};
