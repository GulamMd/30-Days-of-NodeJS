function hello() {
    console.log("This will run recursively");
}

console.log("It will print the data recursively after every 2000ms");
setInterval(hello, 2000);