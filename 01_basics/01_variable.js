const accountId = 144454
let accountEmail = "abhi@gmail.com"
var acountPass = "1234"
accountCity = "jaipur" // it is possible 
let accountState ;


//accountId = 2  //not allowed
accountEmail = "robin@gmail.com"
acountPass = "5555"
accountCity = "kanpur"

console.log(accountId);

/*
prefer not to use var beacause of issue of block scope and functional scope 
*/

console.table([accountId,accountEmail,acountPass,accountCity,accountState]);