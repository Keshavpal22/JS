// singleton

// object literals
const mySym = Symbol("key1")
// Object.create
const JsUser = {
    name: "keshav",
    "full name": "keshav pal",
    [mySym]:"kishan",
    age: 18,
    location : "delhi",
    email : "keshav@google.com",
    isLoggerIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser["full name"]);


console.log(JsUser["email"]);

console.log(JsUser[mySym]);

JsUser.email = "keshavpal@123.com"
// Object.freeze(JsUser)
JsUser.email = "keshav@pal456.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting());


  


