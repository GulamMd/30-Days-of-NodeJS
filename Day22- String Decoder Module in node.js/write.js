let stringDecoder = require('string_decoder').StringDecoder;
let sd = new stringDecoder();

let buffer = Buffer('data to be buffered here');
//Print the buffered data
console.log(buffer);
//Print the decoded buffer
console.log(sd.write(buffer));