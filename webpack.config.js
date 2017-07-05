const fs      = require('fs');
const path    = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev     = process.env.NODE_ENV === 'dev';
const exampleDir = path.resolve(__dirname, './example');
const exmpleOutput  = path.resolve(__dirname, './example-build');

/**
 * Base Webpack Config
 */
const base = {
  entry: {
    index: path.resolve(__dirname, './example/index.js')
  },
  devtool: dev ? '#eval-source-map' : 'source-map',
  output: {
    path: exmpleOutput,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            root: '.',
            name: '[name].css'
          }
        }]
      })
    },  {
      test: /\.ctr(\.js|\.yml|\.yaml)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            root: '.',
            name: '[name].css'
          }
        }, {
          loader: 'ctr-loader'
        }]
      })
    }, {
      /**
       * Image handler + compresses images
       */
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader', {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true
            },
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 4
            },
            pngquant: {
              quality: '75-90',
              speed: 3
            }
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      server: { baseDir: [exmpleOutput] }
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      title: 'SmoothSlider',
      template: 'example/index.ejs'
    })
  ]
};



module.exports = [base];
