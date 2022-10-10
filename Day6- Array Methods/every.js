//every method is used to check whether a condition in fulfilled by all the elements or not. every method returns true if the condition is satisfied by all the elements of the array otherwise every method will return false

arr = [2, 4, 6, 8, 10];
arr2 = [12, 14, 13, 16, 18];

function isEven(value) {
    if(value %2 == 0 ) {
        return true;
    }
    return false;
}

var out = arr.every(isEven);
var out2 = arr2.every(isEven);
console.log("Output of array 1: " + out);
console.log("Output of array 2: " + out2);