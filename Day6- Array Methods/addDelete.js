let arr = ['a', 'e', 'i', 'o'];
//Push method to add element at the end of the array
console.log("Array before push operation: "+arr);
arr.push('u');
console.log("New array after push: " + arr);

//Pop operation to delete element at the end of the array
console.log("Array before pop operation: "+ arr);
arr.pop();
console.log("Array after pop: "+ arr);

//Unshift operation to add element at start of the array
console.log("Array before unshift operation: " +arr);
arr.unshift('z');
console.log("Array after unshift: "+ arr);

//Shift operation to delete element from start of the array
console.log("Array before shift operation: " +arr);
arr.shift();
console.log("Array after shift: "+ arr);
