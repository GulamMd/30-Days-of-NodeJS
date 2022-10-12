arr1 = [1, 3, 4, 6, 8, 9, 10];
arr2 = [2, 4, 6, 8, 10];

var opt1 = arr1.filter(even);
var opt2 = arr2.filter(even);

function even(value) {
    if(value % 2 ==0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(opt1);
console.log(opt2);