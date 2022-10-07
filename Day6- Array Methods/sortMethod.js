//For sorting number array
let arr = ['34', '23', '45', '2', '345', '1'];
console.log("Array before sort: "+arr);
//For ascending order
arr.sort(function(a, b) {return (a-b)});
console.log("Array after sort in ascending order: "+arr);
//For descending order
arr.sort(function(a, b) { return b-a });
console.log("Array after sort in descending order: "+arr);

//For sorting string array
let alphaArray = ['z', 'e', 'y', 'c', 'p'];
console.log("Array before sort: "+alphaArray);
alphaArray.sort();
console.log("Array after sort: "+alphaArray);
