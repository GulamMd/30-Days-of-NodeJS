const os = require('os');

// This method is used to return the CPU architecture of operating system for which the node.js binary was compiled.
// Possible values are : 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64', and 'x86'. This method returns String .
const value = os.arch();
console.log("os.arch() ==> ", value);