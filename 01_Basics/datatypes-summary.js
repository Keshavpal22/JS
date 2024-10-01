// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Javascript is dunamic type language

const score = 100
const age = 12.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 134134565446464245454364n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ['shakitiman', 'keshav', 'jerry']

let myObj = {
    name:"kishan",
    age:23   
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

