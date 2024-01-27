function countLettersAndDigits(input) {
  const matches = input.match(/[a-zA-Z0-9]/g)
  return matches ? matches.length : 0
}

console.log(countLettersAndDigits("hel2!lo")) //6
console.log(countLettersAndDigits("n!!_ice!!123")) //7
console.log(countLettersAndDigits("?")) //0
