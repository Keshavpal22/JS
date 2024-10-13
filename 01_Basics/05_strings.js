 const name  = "keshav"

 const repoCount = 50

//  console.log(name + repoCount + " Value");

console.log(`Hello my anme is ${name} and my repo is ${repoCount}`);

const gameName = new String('keshav-pal')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    keshav    "
console.log(newStringOne.trim());

const url = "https://keshav.com/keshav%20pal"

console.log(url.replace('%20', '_'));

console.log(url.includes('kishan'));

console.log(gameName.split('-'));

















 