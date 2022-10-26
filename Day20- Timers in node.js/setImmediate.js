function hello() {
    console.log("This will run immediately");
}

console.log("This will print data immediately");
setImmediate(hello);