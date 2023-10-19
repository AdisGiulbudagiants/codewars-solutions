function digits(n) {
  return n.toString().split("").length
}

console.log(digits(0)) //1
console.log(digits(9)) //1
console.log(digits(66)) //2
console.log(digits(128685)) //6
