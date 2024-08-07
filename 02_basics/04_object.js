//const tinderuser =  new Object()  // singleton object
const tinderuser= {};  // non singleton

tinderuser.id = "123abc"
tinderuser.name = "abhi"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularuser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ram",
            lastname: "negi"
        }
    }
}

//console.log(regularuser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = {
    id: 1,
    email: "name@gmail.com"
}

/*
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
*/


const course = {
    coursename: " english",
    price: "999",
    courseinst: "abhi"
}

// course.price

const {courseinst: ins} = course
console.log(ins);

//{
//    "name": "ram",
//    "coursename": "english",
//    "price": "free"
//}


{
    {},
    {},
    {}
}