const os = require('os');

/* This method is used to get the endianness of the CPU for which the node.js binary was compiled.
Possible values are :

'BE' : for big endian
'LE' : for little endian
This method returns String .
*/
const value = os.endianness();
console.log("os.endianness() ==> ", value);