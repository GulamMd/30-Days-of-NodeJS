const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('Server listening at 127.0.0.1:3000');
    // change the MIME type to 'application/pdf'
    res.writeHead(200, {'Content-type': 'application/pdf'});
    fs.readFile('index.pdf', (err, data) => {
        if(err) {
            res.json({ 'status': 'err', msg: err });
        } 
        else {
            res.write(data);
            res.end();
        }
    });
}).listen(3000);