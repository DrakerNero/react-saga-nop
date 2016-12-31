const path = require('path')
const webpack = require('webpack') // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line
module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve('src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel!webpack-module-hot-accept', // or 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /(\.scss|\.sass)$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2',
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype',
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=[path][name].[ext]',
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    root: [
      // Since webpack will be called from root directory
      // This will return absolute path of ittp-core not ittp-core/.storybook
      path.resolve('./'),
      path.resolve('./src'),
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: {
      index: '/dist/',
    },
  },
}