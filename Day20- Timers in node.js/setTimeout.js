function hello() {
    console.log("This will get printed once");
}

console.log("This will get printed once after 2000ms")
setTimeout(hello, 2000);