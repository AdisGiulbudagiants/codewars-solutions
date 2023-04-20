function getMiddle(str) {
  const odd = Math.floor(str.length / 2)
  const even = str.length / 2
  return str.length % 2 === 0 ? str[even - 1] + str[even] : str[odd]
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
