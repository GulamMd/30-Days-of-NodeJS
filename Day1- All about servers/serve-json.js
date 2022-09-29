const http = require('http');

http.createServer((req, res) => {
    console.log('Server listening at 127.0.0.1:3000');
    // change the MIME type to 'application/json'
    res.writeHead(200, {'Content-type': 'application/json'});
    // Create a JSON
    let json_response = {
        status: 200,
        demo: "Just to say that these things can be anything whatever you want",
        message: 'Successful',
        result: ['one', 'two', 'three', 'four', 'five', 'six'],
        code : 2000
    }
    res.end(JSON.stringify(json_response));
}).listen(3000);