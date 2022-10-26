function hello() {
    console.log("This will never get printed");
}

console.log("This was supposed to get printed once after 2000ms")
let s_timeout = setTimeout(hello, 2000);
clearTimeout(s_timeout);