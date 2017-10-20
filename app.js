const express = require('express')
const app = express()
const fs = require('fs');

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
    let hostnamesDirContent = ''
    const hostnamesDir = '/tmp/mysite/';
    const hostnameFile = hostnamesDir + `hostname-${HOSTNAME}`;
    try {
        const items = fs.readdirSync(hostnamesDir)
        console.log("Items:", items)
        for (var i = 0; i < items.length; i++) {
            hostnamesDirContent += items[i]
        }
        fs.appendFile(hostnameFile, `| ${HOSTNAME} `)
    } catch (err) {
        console.log("Catched rrror:", err)
    }
    return {
        NODE_ENV,
        HOSTNAME,
        date: new Date(),
        repo: 'hoto/hello-world',
        fullUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
        protocol: req.protocol,
        reqHost: req.get('host'),
        reqOriginalUrl: req.originalUrl,
        reqUrl: req.url,
        hostnamesDirContent: hostnamesDirContent
    }
}
