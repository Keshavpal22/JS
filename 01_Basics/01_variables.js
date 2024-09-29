const accountId = 14453
let accountEmail = "keshav@hoogle.com"
var accountPassword = "124578"
accountCity = "Delhi"
let accountstate;

// accountId = 3
accountEmail = "Keshav@lomdu.com"
accountPassword = "1245789630"
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])
