const os = require('os');

// This method is used to get the operating system platform as set during compile time of node.js .
const value = os.platform();
console.log("os.platform() ==> ", value);