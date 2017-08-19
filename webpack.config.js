const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    helloworld: './src/components/helloworld/helloworld',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo'
    }),
    new LiveReloadPlugin(),
    new Uglify({
      sourceMap: true
    }),
    new webpack.SourceMapDevToolPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/source')
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ],
    rules: [
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
    ]
  }
};
