const express = require('express')
const app = express()

const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV

app.use((req, res, next) => {
  console.log('Got request...')
  next()
})

app.get('/', (req, res) => res.json({
    hostname: HOSTNAME,
    nodeEnv: NODE_ENV,
    date: new Date(),
    repo: 'hoto/hello-world',
    type: 'docker'
}))

app.listen(PORT, console.log(`Listening on port ${PORT}, current time: `, new Date()))
