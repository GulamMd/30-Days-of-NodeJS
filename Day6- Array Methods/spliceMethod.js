// splice method can be used in two ways i.e to either add the element into the array or remove the elements from the array.

//Add using splice without replacing existing element
arr = ["Javascript", "NodeJS", "ExpressJS"];
console.log("Array before splice method: "+ arr);
arr.splice(1,0, "React"); //For replace the existing element change the second parameter of splice method
console.log("Array after splice method: "+ arr);

//Delete using splice
console.log("Array before splice method: "+ arr);
arr.splice(2,2);
console.log("Array after splice method: "+ arr);
