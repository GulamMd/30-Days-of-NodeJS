const os = require('os');

/*This method is used to get the operating system name as returned by Uname.
Common values are :

'Windows_NT' : on Windows
'Linux' : on Linux
'debian' : on MacOS
This method returns String . */
const value = os.type();
console.log("os.type() ==> ", value);