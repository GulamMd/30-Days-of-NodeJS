const fs = require('fs');

let fileName = 'message.txt';
const content = fs.readFileSync(fileName);
console.log("Content: "+ content);