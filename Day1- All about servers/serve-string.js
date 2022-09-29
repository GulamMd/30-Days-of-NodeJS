const http = require('http');

const host = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    console.log("Your pretty cute server is working now!");
    //response.write() : It is the inbuilt method which is used to send the response
    res.write("You can write anything here to tell the server you reached here!");
    res.end();
});

server.listen(port, host, (error) => {
    if(error) {
        return console.error('Error occured: ', error);
    }
    console.log("Server is listening on "+ host + ':' + port);
});