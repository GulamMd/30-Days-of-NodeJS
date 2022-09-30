const fs = require('fs');

new_data = "I won't change your past i am the future";
fs.appendFile('message.txt', new_data, (err) => {
    if(err)
        throw err;
    console.log("I am now the present i got set here");
})