// singleton

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "ram",
    "full name": "abhi rawat",
    [mysym]: "mykey1",
    age: 18,
    email: "ram223@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]

}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mysym]);

JsUser.email = "rabhi223@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "tyson@gmail.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
    
    
}
console.log(JsUser.greeting);
console.log(JsUser.greetingtwo);





