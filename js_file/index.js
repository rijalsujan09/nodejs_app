const http = require('http');
const avg = require("./myModule");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'});

    res.write('<h2>Hello My name is Sujan Rijal!<h2>');
    res.write('<button>Click Me </button><br/>');
    res.end("The End!");
});

server.listen('8080');

const x = avg(1,2,3);
console.log(`avg is ${x}`);
