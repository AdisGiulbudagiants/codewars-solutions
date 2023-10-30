var greet = function (name) {
  const firstLetter = name.slice(0, 1).toUpperCase()
  const elseLetters = name.slice(1).toLowerCase()
  return `Hello ${firstLetter}${elseLetters}!`
}

console.log(greet("riley")) //"Hello Riley!"
console.log(greet("JACK")) //"Hello Jack!"
