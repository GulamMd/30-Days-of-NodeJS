const fs = require('fs');

let content = "I am changing the content temporary..Don't Worry";
fs.writeFile('message.txt', content, (err) => {
    if(err)
        throw err;
    console.log("Message overwritten");
})