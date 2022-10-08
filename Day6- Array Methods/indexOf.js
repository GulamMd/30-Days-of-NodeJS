//indexOf method is used to return the first index of the element passed within the array or otherwise it will return -1 if the value is not found.
arr = [ 5 , 2 , 8 , 5 , 6 ];
console.log(arr);
var pos = arr.indexOf(8);
console.log("index of 8 is : " + pos);
var pos1 = arr.indexOf(5);
console.log("index of 5 is : " + pos1);		

// lastIndexOf method is used to return the last index of the element passed within the array or otherwise it will return -1 if the value is not found.
console.log(arr);
var pos = arr.lastIndexOf(5);
console.log("Last index of 5 is : " + pos);