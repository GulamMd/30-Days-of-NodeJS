const fs = require('fs');

fs.renameSync('content.txt', 'message.txt');
console.log("Change success");
//To check it's Synchronous nature !
console.log("The method is Synchronous");