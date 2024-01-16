function validateUsr(username) {
  const res = /^[0-9a-z_]{4,16}$/
  return res.test(username)
}

console.log(validateUsr("asddsa")) //true
console.log(validateUsr("a")) //false
console.log(validateUsr("Hass")) //false
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas")) //false
console.log(validateUsr("")) //false
console.log(validateUsr("____")) //true
