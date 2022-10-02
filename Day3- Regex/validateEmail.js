const str = "abcd@pqr.com";

let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

let res = str.match(pattern);

if(res){
    console.log("Valid Email address");
}
else {
    console.log("Please enter a valid emailaddress");
}