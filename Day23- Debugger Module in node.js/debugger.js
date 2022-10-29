// Step-1 Run the script without any breakpoint 
var x = 5;
var y = 6;
var z = x + y;
//Run a for loop which will throw a error
//add a debugger here
for(let i = 0; i<12; i++) {
    debugger;
    console.log(i);
}

//Write node inspect debugger.js to start the debugging mode
// Following are commonly used shortcuts while debugging ::

// cont , c - Continue execution
// next , n - Step next
// step , s - Step in