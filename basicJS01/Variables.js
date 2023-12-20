const accountId = 144553
let accountEmail = "vinay@123.com"
var accountPass = "12345"
accountCity = "Gurgaon"
let accountState
// On changing const Variable then We get error
// accountId = 2

accountEmail = "vinay123.com"
accountPass = "212121"
accountCity = "kanpur"

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/