const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(`Request received at [${new Date().toISOString()}]`);

    console.log(req.url);

    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return  res.end('we are on home page');

        case '/about':    
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return  res.end('we are on about page');

         case '/contact':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return  res.end('we are on contact page');
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});       
            return  res.end('page not found');
    }
});

// start listening
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});