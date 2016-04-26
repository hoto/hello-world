const express = require('express')
const app = express()

const HOSTNAME = process.env.HOSTNAME
const PORT = process.evn.PORT || 3000

app.configure(() => app.use(express.bodyParser()))
app.get('/', (req, res) => res.send(`Hello, hostname: ${HOSTNAME}`))
app.listen(PORT, console.log(`Listening on port ${PORT}`))
