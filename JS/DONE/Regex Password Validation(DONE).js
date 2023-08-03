const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/

console.log(REGEXP.test("fjd3IR9")) //true
console.log(REGEXP.test("ghdfj32")) //false
console.log(REGEXP.test("DSJKHD23")) //false
console.log(REGEXP.test("dsF43")) //false
console.log(REGEXP.test("4fdg5Fj3")) //true
