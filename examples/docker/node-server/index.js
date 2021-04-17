const os = require('os')
const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'application/json; charset=utf-8'
    })
    res.end(JSON.stringify({
        dir: __dirname,
        address: req.socket.remoteAddress,
        headers: req.headers,
        os: {
            arch: os.arch(),
            type: os.type(),
            release: os.release(),
            hostname: os.hostname(),
            platform: os.platform(),
            uptime: os.uptime()
        },
        versions: process.versions,
        env: process.env
    }))
})

server.listen(process.env.PORT || 3000)
