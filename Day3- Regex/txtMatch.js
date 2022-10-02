const fs = require('fs');

let fileName = 'data.txt';
let str = fs.readFileSync(fileName).toString();
let pattern = /man/gim;
let myArr = str.match(pattern);

console.log("Total number of occurance of string is :"+ myArr.length);