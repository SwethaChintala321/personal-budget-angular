var http = require('http');

http.createServer(function (req, res) {
    var url = req.url;
    if(url ==='/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('About page');
        res.end();
    }
    else if(url ==='/contact') {
        res.writeHead(401, {'Content-Type': 'text/html'});
        res.write('Access not authorized');
        res.end();
    }
    else {
        res.write('Hello from nodejs server with routing!');
        res.end();
    }
}).listen(3000, function() {
    console.log("serving at http://localhost:3000");
});