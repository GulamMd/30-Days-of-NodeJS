const fs = require('fs');

let fileName = 'message.txt';
let content = "I am changing the content synchronously...Chill";

fs.writeFileSync(fileName, content);
console.log("File overwritten successful");