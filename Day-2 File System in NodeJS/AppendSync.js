const fs = require('fs');

new_Content = "I am here to get involved in old content of txt file synchronously";
fs.appendFileSync('message.txt', new_Content);
console.log("Everything got updated");