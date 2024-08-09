const user = {
    username: "Ram",
    price: 999,

    welcomemsg: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
/*
user.welcomemsg()
user.username = "sam"
user.welcomemsg()

console.log(this);
*/

//function chai(){
//    let username = "ram"
//    console.log(this.username)
    
//}
//chai()


/*
const chai = function(){
    let username = "ram"
    console.log(this.username);
    
}
*/

const chai = () => {
    let username = "ram"
    console.log(this);
    
}
//chai()


//const addtwo = (num1, num2) => {
//    return num1 + num2
//}


//const addtwo = (num1, num2) =>  (num1 + num2)

const addtwo = (num1, num2) =>  ({username: "Ram"})

console.log(addtwo(3,5));
