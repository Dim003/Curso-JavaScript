let http = require('http');

const server = http.createServer(function (req,res) {
    res.write('Ola mundo');
    res.end(); 
});

server.listen(8000, function (req, res) {

});