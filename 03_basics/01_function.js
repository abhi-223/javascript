//console.log("h");
//console.log("i");
//console.log("t");

function saymyname(){
    console.log("h");
    console.log("i");
    console.log("t");
}


//saymyname()

//function addtwono(num1, num2){
//    console.log(num1 + num2);
     
//}

function addtwono(num1, num2){
   // let result = num1 + num2
    //return result
    return num1 + num2 
}

const result = addtwono(3,5)
//console.log(result);

function loginusermsg(username){
    return `${username} just logged in `
}
//console.log(loginusermsg("ram"))

function calculatecartprice(val1 ,...num1){
return num1
}

//console.log(calculatecartprice(200, 400, 500));

const user = {
    username: "ram",
    price: 888
}

function handleobj(anyobj){
    console.log(`username is ${anyobj.username}and price is ${anyobj.price}`);
    
}

handleobj({
    username: "ram",
    price: 500
})

const mynewarray = [200, 400, 300, 500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue([200, 400, 300, 500]));



  