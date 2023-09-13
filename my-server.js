const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World from Swetha Chintala!');
    res.end();
}).listen(3000, function(){
    console.log("Serving at http://localhost:3000");
}); 