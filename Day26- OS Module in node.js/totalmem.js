const os = require('os');

// This method is used to get the total amount of system memory in bytes.
// This method returns Integer .
const value = os.totalmem();
console.log("os.totalmem() ==> ", value);