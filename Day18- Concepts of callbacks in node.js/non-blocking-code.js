//Example of non blocking code in node.js

var fs = require('fs');

//For calculating execution time
var date1 = new Date();
var time_start = date1.getTime();
console.log("Starting at: "+ time_start);
console.log("Let's start reading file");

//Name of the file to be read
var file_Name = 'demo.txt';
//Reading file asynchronously
fs.readFile(file_Name, (err, data) => {
    if(err)
        throw err;
    
    console.log("Content is: " + data);
});

//For calculating execution time
var date2 = new Date();
var time_end = date2.getTime();
console.log("Finishing at: " + time_end);
var execution_time = time_end - time_start;
console.log("Time of exection is: " + execution_time);

//Consider it some other task in queue 
console.log("Another task to be executed");
