const http = require('http')
const fs = require('fs').promises

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/recomendacao':
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200)
            res.end( JSON.stringify({recomendacao: 'Lendas da paixão'}) )
            break
        case '/lancamentos':
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200)
            res.end( JSON.stringify({recomendacao: ['7 anos no Tibet', 'Tempo de glória']}) )
            break
        case '/cadastro':
            fs.readFile(__dirname + '/public/index.html')
            .then(contents => {
                res.setHeader('Content-Type', 'text/html')
                res.writeHead(200)
                res.end(contents)
            })
    }
})

server.listen(3000)