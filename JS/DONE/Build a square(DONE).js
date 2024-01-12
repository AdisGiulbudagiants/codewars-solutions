function generateShape(integer) {
  const row = "+".repeat(integer)
  const square = (row + "\n").repeat(integer - 1) + row
  return square
}

console.log(generateShape(3)) //'+++\n+++\n+++'
console.log(generateShape(8)) //'++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
