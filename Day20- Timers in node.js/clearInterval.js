function hello() {
    console.log("This will never get printed");
}

console.log("This was supposed to get printed every 2000ms");
let s_int = setInterval(hello, 2000);
clearInterval(s_int);