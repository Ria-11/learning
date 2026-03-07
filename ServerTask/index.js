const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
   const method = req.method;

   const path = req.url;

   const log = `$[${Date.now()}] : ${method} ${path}`;
   fs.appendFileSync('log.txt', log , 'utf-8');



   switch(method){
     case 'GET':{
        switch(path){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return  res.end('Hello from the Server');
        case '/contact-us':
            res.writeHead(200, {'Content-Type': 'text/plain'});   
            return  res.end('Contact us at ribbo6@gmail.com');

        case '/tweet':
            res.writeHead(200, {'Content-Type': 'text/plain'});   
            return  res.end('Tweet1\nTweet2\nTweet3');
          }   

     }

     break
     case 'POST':{

        switch(path){
        case '/tweet':
            res.writeHead(201, {'Content-Type': 'text/plain'});
            return res.end('Tweet posted successfully');
        }
     }

    }
     return res.writeHead(404).end('You are lost man');


      

});

// start listening
const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});