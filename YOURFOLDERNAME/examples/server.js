const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/simple/get', (req, res) => {
  res.json({
    mes: `hello word`
  })
})

router.get('/base/get', (req, res) => {
  res.json(req.query)
})

router.post('/base/post', (req, res) => {
  console.log(req.body.data)
  res.json(req.body.data)
})

router.post('/base/buffer', function (req, res)  {
  let msg =[]
  req.on('data', (chunk) => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('send', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})


router.get('/error/get', function (req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: 'hello word'
    })
  } else {
    res.status(500)
    res.end()
  }
})


router.get('/error/user', function (req, res) {
  res.json({
    code: 0,
    message: 'ok',
    result: {
      name: "jack",
      age:21
    }
  })
})

router.post('/error/post', function (req, res) {
  res.json(req.body)
})

router.get('/error/timeout', function (req, res) {
  setTimeout(() => {
    res.json({
      mes: '123'
    })
  }, 3000);
})



router.get('/interceptor/get', function (req, res) {
  res.json({
    data: '123'
  })
})


router.post('/config/post', (req, res) => {
  res.json(req.body)
})


router.get('/cancel/get', function (req, res) {
  setTimeout(() => {
    res.json('hello')
  }, 1000);
})

router.post('/cancel/post', function (req, res)  {
  setTimeout(() => {
    res.json(req.body)
  }, 1000);
})


app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log('服务器启动成功')
})