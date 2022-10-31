const os = require('os');

// This method is used to get the system uptime in seconds.
// This method returns Integer .
const value = os.uptime();
console.log("os.uptime() ==> ", value);