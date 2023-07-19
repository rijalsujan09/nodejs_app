const url = require('url');
const http = require('http');
const fs = require('fs');


// creating server
http.createServer(function(req, res){
const pathName = req.url;

if(pathName == "/"){

    res.writeHead(200, {'content-type': 'text/html'});
    const homeContent = fs.readFileSync("./views/index.html");
    res.write(homeContent);
    res.end();

    console.log("Home Page");

}else if(pathName == "/about"){

    res.writeHead(200, {'content-type': 'text/html'});
    const homeContent = fs.readFileSync("./views/about.html");
    res.write(homeContent);
    res.end();

    console.log("About Page");


}else if(pathName == "/contact"){

    res.writeHead(200, {'content-type': 'text/html'});
    const homeContent = fs.readFileSync("./views/contact.html");
    res.write(homeContent);
    res.end();

    console.log("Contact Page")


}else if(pathName == "/service"){

    res.writeHead(200, {'content-type': 'text/html'});
    const homeContent = fs.readFileSync("./views/service.html");
    res.write(homeContent);
    res.end();

    console.log("Service Page")
}
}).listen(8082);