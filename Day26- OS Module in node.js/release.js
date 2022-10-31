const os = require('os');

// This method is used to get the operating system release.
// This method returns String .
const value = os.release();
console.log("os.release() ==> ", value);