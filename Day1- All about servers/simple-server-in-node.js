//Import http module
const http = require('http');
// Host and port upon which the server would be running
const host = '127.0.0.1';
const port = '3000';

//createServer() is used to create the server it takes request and response as parmaeter
const server = http.createServer((req, res) => {

    //response.writeHead is an inbuilt method which is used to send the status code and the MIME type[A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) indicates the nature and format of a document, file, or assortment of bytes]
    res.writeHead(200, {"Content-type": "text/plain"});
    console.log("Your pretty cute server is working now!");
    res.end("Smile! ...It worked");
});

//server.listen() is an inbuilt method used to bind to the port an start listening for incoming connections.

server.listen(port, host, (error) => {
    if(error) {
        return console.error('Error occured: ', error);
    }
    console.log("Server is listening on "+ host + ':' + port);
});