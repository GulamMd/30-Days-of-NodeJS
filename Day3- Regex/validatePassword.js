let str = '123456abc';
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let res = str.match( pattern );
if(res){
	console.log("Valid password");
}else{
	console.log("Not a valid password");
}