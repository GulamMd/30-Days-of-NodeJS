const os = require('os');

// This method is used to get the hostname of the operating system. This method returns String .
const value = os.hostname();
console.log("os.hostname() ==> ", value);