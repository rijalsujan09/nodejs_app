const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
console.log(req.url);
const urlObject = url.parse(req.url, true);
console.log(urlObject);
console.log(urlObject.path);
console.log(urlObject.query);
}).listen(8081);