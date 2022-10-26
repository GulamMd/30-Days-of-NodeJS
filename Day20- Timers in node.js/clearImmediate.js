function hello() {
    console.log("This will never get printed");
}

console.log("This was supposed to get printed");
let imm = setImmediate(hello);
clearImmediate(imm);