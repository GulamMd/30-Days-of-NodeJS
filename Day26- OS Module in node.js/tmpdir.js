const os = require('os');

// This method is used to get the default directory for temporary files in operating system.
// This method returns String .
const value = os.tmpdir();
console.log("os.tmpdir() ==> ", value);