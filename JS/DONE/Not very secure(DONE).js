function alphanumeric(string) {
  return /^[a-zA-Z0-9]+$/.test(string)
}

console.log(alphanumeric("Mazinkaiser")) //true
console.log(alphanumeric("hello world_")) //false
console.log(alphanumeric("PassW0rd")) //true
console.log(alphanumeric("     ")) //false
console.log(alphanumeric("n")) //true
console.log(alphanumeric("")) //false
