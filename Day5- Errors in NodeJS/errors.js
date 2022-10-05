//Reading a File Asynchronously using nodejs
//if any error occurs such as file not found
//we don't have permissions , etc
//then an err message will be console.
//otherwise data will be printed

const fs = require('fs');

fs.readFile('data.txt', (err, data) => {
    if(err) {
        return console.error(err);
    }
    else {
        console.log("Content : "+ data);
    }
})