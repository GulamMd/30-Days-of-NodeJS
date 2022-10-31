const os = require('os');

// This method is used to get the home directory of the current user. This method returns String .
const value = os.homedir();
console.log("os.homedir() ==> ", value);