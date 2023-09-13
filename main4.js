const http = require('http');

let counter = 0;

http.createServer(function (req, res) {
    if(req.url === '/') {
        counter += 1;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('You are user number ' + counter + '\n');
    }
}).listen(3000, () => {
    console.log(`Serving at http://localhost:3000`)
});