const express = require('express')
const app = express()

const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV

app.use((req, res, next) => {
  console.log('' + new Date() + ' Got request... url: ', req.url)
  next()
})

app.get('/', (req, res) => res.json(prepareResponse(req)))
app.get('/test', (req, res) => res.json(prepareResponse(req)))

app.listen(PORT, console.log(`Listening on port ${PORT}, hostname ${HOSTNAME}, current time: `, new Date()))

function prepareResponse(req) {
  return {
    nodeEnv: NODE_ENV,
    hostname: HOSTNAME,
    date: new Date(),
    repo: 'hoto/hello-world',
    type: 'docker',
    protocol: req.protocol,
    reqHost: req.get('host'),
    reqUrl: req.url,
    reqOriginalUrl: req.originalUrl,
    fullUrl: req.protocol + '://' + req.get('host') + req.originalUrl
  }
}
