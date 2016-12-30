const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.resolve(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        loaders: ['babel?cacheDirectory'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    })
  ],
  resolve: {
    root: [
      path.resolve('./'),
      path.resolve('./src'),
    ]
  },
  externals: {
    fs: '{}',
  },
  devServer: {
    hot: true,
    historyApiFallbase: {
      index: '/dist/',
    },
  },
}
