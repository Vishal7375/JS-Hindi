const  accountId = 144553;
let accountEmail = "vishal@google.com";
var accountPassword = "12345";
accountCity = "Vadodara";
let accountState;

// accountId = 2 //not allowed 

accountEmail = "vk@vk.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
