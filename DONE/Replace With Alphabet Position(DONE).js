function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return text
    .toLowerCase()
    .split("")
    .filter((el) => alphabet.includes(el))
    .map((el) => alphabet.indexOf(el) + 1)
    .join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("Adis"))
console.log(alphabetPosition("b"))
console.log(alphabetPosition("X"))
