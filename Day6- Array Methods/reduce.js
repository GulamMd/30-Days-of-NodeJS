// reduce method is used to reduce the array to a single value. This method executes the provided function for each value of the array and stores the result in accumulator. 
// Note : It does not execute on array with no values.

arr = [4, 5, 6, 2, 4, 8, 9];
console.log("Array is: "+ arr);
function mul(value, total) {
    total = value + total;
    return total;
}

let outputTotal = arr.reduce(mul);
console.log(outputTotal);