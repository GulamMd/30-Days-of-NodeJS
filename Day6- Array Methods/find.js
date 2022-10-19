arr = [2, 4, 6, 8];
arr1 = [2, 3, 4, 6, 7, 8];

function odd(val) {
    return val % 2 == 1;
}
var out = arr.find(odd);
var out1 = arr1.find(odd);

console.log("output from arr: " +out);
console.log("output from arr1: " +out1);
