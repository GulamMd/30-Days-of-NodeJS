const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('Port Number : 3000');
    // change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200, {'Content-type': 'text/html'});
    // Reading the content file
    fs.readFile('index.html', (err, data) => {
        //Checking the errors
        if(err) {
            throw err;
        }
        console.log("Yay! You did it...");
        //Sending the response
        res.end(data);
    });
}).listen(3000);