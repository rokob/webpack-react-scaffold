'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  allChunks: true,
  disable: process.env.NODE_ENV !== "production"
});

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
				test: /\.scss$/,
        use: extractSass.extract({
          use: [{
						loader: "css-loader"
          }, {
						loader: "sass-loader"
          }],
          fallback: "style-loader"
				})
		},
		{
			test: /\.jsx?/,
			include: APP_DIR,
	    use: [{	
        loader: 'babel-loader',
      }]
		}]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  resolve: {
    modules: [APP_DIR, "node_modules"],
    extensions: ['.js', '.jsx', '.scss'],
  }
};

module.exports = config;
