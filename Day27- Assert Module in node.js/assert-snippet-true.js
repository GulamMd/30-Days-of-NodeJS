// In this we are performing the strict comparison operation and checking whether the sum of 3 numbers is equal to the expected output or not.

const assert = require('assert');

function sum(a, b, c) {
    return a + b + c;
}

let output = sum(3, 4, 5);
console.log("Output: ", output);
let expected_output = 12;
console.log("Expected Output: ", expected_output);
assert( output === expected_output , 'Test case is true so this will not get printed');