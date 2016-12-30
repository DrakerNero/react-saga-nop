const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const compression = require('compression')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(compression())
app.use(webpackDevMiddleware(compiler, {
  pubilcPath: config.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem,readFile(filename, (err, result) => {
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
    return console.log(err)
  }

  return console.log('Listening at http://localhost:8080')
})