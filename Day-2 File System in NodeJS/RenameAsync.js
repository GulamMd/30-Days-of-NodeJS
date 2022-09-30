const fs = require('fs');

fs.rename('message.txt', 'content.txt', (err) => {
    if(err)
        throw err;
    console.log('Kisi ka toh ho');
});
//To check it's Asynchronous nature !
console.log("The method is Asynchronous");