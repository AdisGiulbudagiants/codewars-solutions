function position(letter) {
  const alphabetNum = letter.toUpperCase().charCodeAt(0) - 64
  return `Position of alphabet: ${alphabetNum}`
}

console.log(position("a")) //Position of alphabet: 1
console.log(position("z")) //Position of alphabet: 26
console.log(position("e")) //Position of alphabet: 5
