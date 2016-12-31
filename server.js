/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const compression = require('compression')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

// compression middleware needed to be included before webpackDev and webpackHot
app.use(compression())
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
    return null
  })
})

app.listen(8080, '0.0.0.0', (err) => {
  if (err) {
    return console.error(err)
  }
  return console.log('Listening at http://localhost:8080')
})
