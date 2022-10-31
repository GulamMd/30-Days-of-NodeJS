const os = require('os');
// This method is used to get the information of all the CPU/Core installed in the system. This method returns an array 
const value = os.cpus();
console.log("os.cpus() ==> ", JSON.stringify(value));