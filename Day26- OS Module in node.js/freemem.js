const os = require('os');

// This method is used to get the amount of free system memory in bytes. This method returns Integer . 
const value = os.freemem();
console.log("os.freemem() ==> ", value);