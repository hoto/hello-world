const express = require('express')
const app = express()

const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV

app.use((req, res, next) => {
  console.log('' + new Date() + ' Got request... url: ', req.url)
  next()
})

app.get('/', (req, res) => res.json(prepareResponse(req)))
app.get('/test', (req, res) => res.json(prepareResponse(req)))
app.get('/health', (req, res) => res.json(prepareHealthResponse(req)))

app.listen(PORT, console.log(`Listening on port ${PORT}, hostname ${HOSTNAME}, current time: `, new Date()))

function prepareResponse(req) {
  return {
    NODE_ENV,
    HOSTNAME,
    date: new Date(),
    repo: 'hoto/hello-world',
    fullUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    protocol: req.protocol,
    reqHost: req.get('host'),
    reqOriginalUrl: req.originalUrl,
    reqUrl: req.url
  }
}

function prepareHealthResponse(req) {
  return {
    status: "UP"
  }
}
